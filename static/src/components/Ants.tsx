//  imports
        import * as React from 'react'
        import * as PropTypes from 'prop-types'
        import { Toolbar, ToolbarGroup, ToolbarSeparator, DropDownMenu, MenuItem, FlatButton, IconButton, Checkbox, TextField } from 'material-ui'
        import Group from "material-ui/svg-icons/social/group"
        import PersonAdd from "material-ui/svg-icons/social/person-add"
        import Cancel from "material-ui/svg-icons/navigation/cancel"
        import Visibility from "material-ui/svg-icons/action/visibility"
        import VisibilityOff from "material-ui/svg-icons/action/visibility-off"
        import 'whatwg-fetch'
        import * as Autosuggest from "react-autosuggest"

        import {MenuUsers, Map} from "./"
        import {FirebaseFirestore} from "../config/firebase"

        import { VehicleRouting, Deposit, Client, Place, Content, User , Users, Kml, Places} from '../class'
        import { isNullOrUndefined } from 'util';
        import { ENGINE_METHOD_DIGESTS } from 'constants';

        let google = window.google;
        let  $ = require('jquery')
//


interface Props{

}
interface State{
    userSelectedID: string
    modeAddClient: boolean
    modeListClients: boolean
    numberOfSelectedClients: number
    numberOfVehicles: number
    vehicleCapacity: number
    keyWord:string
    routeSelected:number
}

export class Ants extends React.Component<Props,State>{
    
    kml:Kml
    users:Users
    content: Content
    selectedClients: {[key:string]:Client}
    vehicleRoute: VehicleRouting
    vehicleRoutes:VehicleRouting[]
    

    //# Lifecycle

        constructor(props:Props,state:State){
            super()
            this.state = { userSelectedID:"0", modeAddClient:false, modeListClients:false, numberOfSelectedClients: 0, keyWord: "", numberOfVehicles: 0, vehicleCapacity: 0 ,routeSelected: 0}
            this.init(true)      
            this.bind()
            this.vehicleRoutes = []

        }

        componentDidMount(){   
        }

        componentDidUpdate(){       
        }
    
    //

    bind = () => {
        this._handleCreateUser.bind(this)
        this._handleSelectUser.bind(this)
        this._handleModeAddClient.bind(this)
        this._handleAddClient.bind(this)
        this._handleSend.bind(this)
        this.setVehicleRoute.bind(this)
    }

    init = (first:boolean=false) => {
        this.content = new Content()
        this.users = new Users()
        this.users.load()
        this.selectedClients = {}
        if(!first){
            this.setState({ userSelectedID:"0", modeAddClient:false, modeListClients:false, numberOfSelectedClients: 0 })
            
        }
    }

    erase = () => {
        this.init()
        localStorage.clear()
        this.setState({ userSelectedID: "0" })

    }   

    readJson = (text: string) => {
        let json = JSON.parse(text)
        // console.log(json)
        this.content.getDistancesFromCoordinates(json["coordinates"])
        this.content.capacity = json["capacity"]
        this.content.demand = json["demand"]
        this.content.timeStart = this.content.minuteToTime(json["timeStart"]).toISOString()
        this.content.setTimesWindowsFromMinutes(json["timewindows"])
        this.content.setTimesStartFromMinutes(json["timesStart"])

        this.content.serviceTime = json["serviceTime"]

        this.content.send((vehiclesRouting : Array<VehicleRouting>) => {

                let duration:number = 0
                let duration2:number = 0
                let routes = vehiclesRouting.filter((vehicleRouting:VehicleRouting) => {
                            vehicleRouting.distance = vehicleRouting.distance/60

                            let distances = this.content.distances.map((distances:Array<number>) => {
                                return distances.map((distance: number) => {
                                    return distance/60
                                })
                            })
                            let path = vehicleRouting.path
                            let IdPreStation:number
                            
                            path.map((idStation:number)=>{
                                if(idStation>0){
                                    duration2 += distances[IdPreStation][idStation]
                                }
                                IdPreStation = idStation
                            })
                            duration += vehicleRouting.distance
                            return vehicleRouting.path.length > 1

                        
                    })
                    console.log(JSON.stringify(routes))
                    console.log("routes : ",routes);

                    console.log("distancia Total: ", duration)
                    console.log("distancia sin espera: ", duration2)

        })
    }   

    //# handles 
        _handleCreateUser = (user:User) => {
            this.users.add(user)            
            this._handleSelectUser(user)
            
        }

        _handleSelectUser = (user:User) => {
            if(user !== undefined){
                
                this.setState({
                    userSelectedID: user.ID
                },this.selectAllClients)

                user.getDistances()
                
            }else{
                this.setState({
                    userSelectedID: "0"
                })
            }
            
        }

        _handleChooseMap = (event:any) => {

            const {userSelectedID} = this.state
            console.log(userSelectedID)
            if(userSelectedID !== "0"){
                const user = this.users.getUser(userSelectedID)
                let file:File = event.target.files[0]        
                let reader = new FileReader()
                reader.readAsText(file)
        
                reader.onload = (event:any) =>{
                    
                let text = event.target.result
                const type = (file.type !== "") ? file.type : file.name.split(".")[1]
        
                    switch (type) {
                        case "kml":
                        case "application/vnd.google-earth.kml+xml":

                            this.kml = new Kml(text);
                            let {deposits,clients} = this.kml.getDepositsAndClients()
                            console.log("deposits: ",deposits)
                            console.log("clients: ",clients)
                            user.places = new Places(deposits);
                            user.places.merge(clients)

                            user.saveClients()
                            user.saveDeposits()
                            this.forceUpdate()
                            user.places.getDistances((useri:User) => {useri.saveClients();useri.saveDeposits()},user)
                            

                        break
                        case "json":
                        case "application/json":
                            this.readJson(text)
                        break
                    }
        
                }
            }
        }

        _handleSend = () => {
            const {userSelectedID, numberOfVehicles, vehicleCapacity} = this.state
            if(userSelectedID !== "0"){
                const user = this.users.getUser(userSelectedID)
                user.places.loadDemand()
                
                let placesToSend = this.getPlacesToSend()
                user.send(placesToSend,numberOfVehicles,vehicleCapacity,this.loadVehicleRoutes)
            }
        }

        _handleModeAddClient = () => {
            const {modeAddClient} = this.state
            this.setState({modeAddClient:!modeAddClient})
        }

        _handleModeListClients = () => {
            console.log("list Clients: ",this.selectedClients)
            const {modeListClients} = this.state
            this.setState({modeListClients:!modeListClients})
        }

        _handleAddClient = (client:Client, userID:string) => {
            let user = this.users.getUser(userID)
            user.places.push(client)
            user.saveClients()
            this._handleModeAddClient()
            user.places.getDistances((useri:User) => {useri.saveClients();useri.saveDeposits()},user)
        }

        _handleDeleteClient = (name:string) => {
            console.log("name: ",name)
            let {userSelectedID} = this.state
            if(userSelectedID != "0"){
                let user = this.users.getUser(userSelectedID)
                user.places.delete(name)
                
                user.saveClients()
                user.saveDeposits()
                this.forceUpdate()
            }
        }

        _handleChangeKeyWord = (event:any, newKeyWord:string) => {
            this.setState({keyWord:newKeyWord})
        }

        _handleChangeNumberOfVehicles = (event:any, newNumberOfVehicles:string) => {
            this.setState({numberOfVehicles: +newNumberOfVehicles})
        }

        _handleChangeVehicleCapacity = (event:any, newCapacity:string) => {
            this.setState({vehicleCapacity: +newCapacity})
        } 

        handleChangeRouteSelected = (event:any, value:any) => {
            // console.log(event,value)
            this.setVehicleRoute(value)
        }

    // 

    //gets 

        getDirection = (positionOrigen: google.maps.LatLng, positionDestinate: google.maps.LatLng, directionsService:google.maps.DirectionsService, directionsDisplay: google.maps.DirectionsRenderer, callback:Function, callbackError: Function) => {
            console.trace("Ants getDirection")
            directionsService.route({
                origin: positionOrigen,
                destination: positionDestinate,
                travelMode: google.maps.TravelMode.DRIVING
            }, (response: google.maps.DirectionsResult, status: google.maps.DirectionsStatus) => {
            
                if( status === google.maps.DirectionsStatus.OK){
                    directionsDisplay.setDirections(response)
                    directionsDisplay.setRouteIndex(1)
                    callback()
                }else{
                    callbackError()
                }
            })
        }

        getStyles = () => {
            const styles: {uploadButton:React.CSSProperties, uploadInput:React.CSSProperties} = {
                uploadButton: {
                    verticalAlign: 'middle',
                },
                uploadInput: {
                    cursor: 'pointer',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    width: '100%',
                    opacity: 0,
                },
            };
            return styles;
        }

        getTools = (user: User) => {
            const {modeAddClient, modeListClients, numberOfSelectedClients, routeSelected} = this.state
            const {vehicleRoutes} = this
            const styles = this.getStyles()           
            const  userSelectedID = (user!==undefined) ? user.ID:"0"
            const disable = modeAddClient || modeListClients


            const seeClientsTools = (user === undefined) ? null : (modeListClients) ? <div><IconButton onClick={this._handleModeListClients} tooltip="cancel" tooltipPosition="top-center"> <Cancel /> </IconButton></div>:<div><IconButton onClick={this._handleModeListClients} disabled={modeAddClient} tooltip="See Clients" tooltipPosition="top-center" > < Group /> </IconButton></div>;

            



                let menuSelect = (<DropDownMenu value={routeSelected} onChange={this.handleChangeRouteSelected.bind(this)} > 
                         {vehicleRoutes.map((path:VehicleRouting, index:number) => {
                            return <MenuItem key={index} value={index} primaryText={"Vehiculo número "+index} />
                        })}
                    </DropDownMenu>)


                const selectedVehicleRouteTool = (vehicleRoutes.length > 0) ? <div> {menuSelect}</div> : null;




            const readMapTool = (user === undefined) ? null : <div>
                <FlatButton label="read a map" labelPosition="before" style={styles.uploadButton} containerElement="label" disabled={disable} >
                <input type="file" style={styles.uploadInput} onChange={this._handleChooseMap} />
                </FlatButton>
            </div>;

            const disableSend = (isNullOrUndefined(this.vehicleRoute)) ? false:true
            const send = (numberOfSelectedClients > 0) ? <div> 
                <FlatButton label="send" onClick={this._handleSend} disabled={disableSend} />    
            </div> :null

            return(
                <div id="controls">
                    <Toolbar>
                        <ToolbarGroup firstChild={true} />                               
                        <ToolbarGroup >
                            {selectedVehicleRouteTool}           
                            {seeClientsTools}                            
                            {readMapTool}
                            <div>
                                {/* <FlatButton label="Erase" onTouchTap={this.erase} /> */}
                                <MenuUsers users={this.users} userSelectedID={userSelectedID} createUser={this._handleCreateUser} selectUser={this._handleSelectUser} />
                            </div>
                            {send}
                        </ToolbarGroup>

                    </Toolbar>
                </div>
            )
        }

        getListClients = () => {
            
            const {modeListClients,userSelectedID, keyWord, numberOfVehicles, vehicleCapacity} = this.state
            const {selectedClients} = this
            const display = (modeListClients) ? "inherit":"none"
            let listItems:JSX.Element[]
            const rg = new RegExp(keyWord.toLowerCase(),"g")

            if(modeListClients && userSelectedID !== "0"){
                
                listItems = this.users.getUser(userSelectedID).places.getClients().filter((client:Client) => { const matchName = client.clientName.toLowerCase().match(rg);  return (keyWord === "" || ( !isNullOrUndefined(matchName) && matchName.length > 0) )}).map((client:Client) => {
                    return <div key={client.name}><Checkbox style={{display:"inline-block", width:"90%"}} disabled={!client.finalized} uncheckedIcon={<VisibilityOff />} checkedIcon={ <Visibility />} label={client.clientName} checked={(selectedClients[client.name] !== undefined)} onCheck={this.selectClient} value={client.clientName} /><IconButton onClick={() => {this._handleDeleteClient(client.name)}} tooltip="cancel" tooltipPosition="top-center" > <Cancel /> </IconButton></div>
                })
            }

            return <div id="listClients" className={display} >
                <br />
                <div> Informacion de vehiculos</div>
                <br/>
                Número de vehículos:  
                <br />
                <TextField  value={numberOfVehicles} onChange={this._handleChangeNumberOfVehicles} id="numberOfVehiclesField" hintText="Numero de vehiculos" />
                <br />
                Capacidad de los vehículos: 
                <br /><TextField value={vehicleCapacity} onChange={this._handleChangeVehicleCapacity} id="vehicleCapacityField" hintText="Capacidad de Vehiculos" />
                <br/>
                <br />
                <div> Lista de estaciones </div>                
                <br/>
                <TextField value={keyWord} onChange={this._handleChangeKeyWord} id="keyWordTextField" hintText="Busqueda por nombre" />
                <br/>
                {listItems} 
            </div>

        }

        getPlacesToSend = () => {
            const {userSelectedID} = this.state
            if(userSelectedID !== "0"){
                const user = this.users.getUser(userSelectedID)
                let placesToSend = new Places()
                placesToSend.push(user.places.getDeposits()[0])
                    const {selectedClients} = this
                    for(const name in selectedClients){
                        if(selectedClients.hasOwnProperty(name)){
                            const client = user.places.getByName(name)
                            placesToSend.push(client)
                        }
                    }
                    return placesToSend
            }
        }
    //

    // sets 

       selectClient = (event:MouseEvent<{}>,isInputChecked:boolean) => {
     
           const name = event.target.value
           let {numberOfSelectedClients} = this.state
            if(this.selectedClients[name] === undefined){
                const {userSelectedID} = this.state
                const clients = this.users.getUser(userSelectedID).places.getClients()
                const client = clients.filter((client:Client) => {return client.name === name})
                if(client[0] !== undefined){
                    this.selectedClients[name] = client[0] as Client
                    numberOfSelectedClients++
                }
                             
            }else{
                delete this.selectedClients[name]
                numberOfSelectedClients--
            }
            delete this.vehicleRoute
            // this.forceUpdate()
            this.setState({numberOfSelectedClients:numberOfSelectedClients})
       }

       selectAllClients = () => {
        //    console.log("selectAllClients")
           let {userSelectedID} = this.state
           let numberOfSelectedClients = 0
           let user = this.users.getUser(userSelectedID)

           if(user !== undefined){
            let clients = this.users.getUser(userSelectedID).places.getClients()
            //console.log("clients : ",clients)
            clients.forEach((client:Client) => {
                this.selectedClients[client.name] = client
                numberOfSelectedClients++
            })
 
            this.setState({numberOfSelectedClients: numberOfSelectedClients})
           }
       }

       setVehicleRoute = (index:number) => {
           this.vehicleRoute = this.vehicleRoutes[index]
           this.setState({routeSelected:index})

           //this.forceUpdate()
       }

       loadVehicleRoutes = (vehicleRoutes:VehicleRouting[]) => {
            this.vehicleRoutes = vehicleRoutes;
            this.setVehicleRoute(0)
       }
    //

    render(){
        const { userSelectedID, modeAddClient, modeListClients,routeSelected } = this.state 
        const user = this.users.getUser(userSelectedID)        
        const tools = this.getTools(user)
        const placesToSend = this.getPlacesToSend()
        const vehicleRoute = this.vehicleRoute
        console.log(vehicleRoute)
        const routeID = userSelectedID+routeSelected
        // console.log("vehicleRoute: ",vehicleRoute)
        return(
            <div id="mcvrp">
                {this.getListClients()}
                <Map user={user} modeAddClient={modeAddClient} modeListClients={modeListClients} addClient={this._handleAddClient} selectedClients={this.selectedClients} vehicleRoute={vehicleRoute}  placesToSend={placesToSend} routeID={routeID}  />
                
                {tools}
            </div>
        )
        
    }
}