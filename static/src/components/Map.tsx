import * as React from "react"

import {VehicleRouting,Deposit,Client,Place,User, Places} from "../class"
import { isNullOrUndefined } from "util";

let google = window.google;

interface Props{
    user:User
    modeAddClient:boolean
    modeListClients:boolean
    selectedClients: {[key:string]:Client}
    vehicleRoute: VehicleRouting
    placesToSend:Places
    addClient: (client:Client,userID:string)=>void
    routeID:string

}

interface State{
    positionGetDirection: number
    
}

export class Map extends React.Component<Props,State>{
    map:google.maps.Map;    
    vehicleRoute: VehicleRouting
    places: Array<google.maps.Marker>
    paths: Array<Array<google.maps.Polyline>>
    directionsDisplay: Array<google.maps.DirectionsRenderer>
    getDirections: Array<Function>
    directionsResults:google.maps.DirectionsResult[]
   
    // Lyfecicle

        constructor(){
            super()

            this.paths = new Array()
            this.directionsDisplay = new Array()
            this.directionsResults = []
            this.places = new Array()
            // this.vehicleRoute = new Array()
            this.getDirections = new Array()
            
            this.state = {positionGetDirection: 0}

        }

        componentDidMount(){
            let mapOptions = {
                center: { lat: 7.107246, lng: -73.109486 },
                zoom: 12
            }
            this.map = new google.maps.Map(this.getDOMNode(), mapOptions)
            
        }

        componentWillUpdate(nextProps:Props){
            const {modeAddClient,vehicleRoute, routeID} = nextProps
            let lastRouteID = this.props.routeID
            this.vehicleRoute = vehicleRoute;
            if(!modeAddClient){
                let input = document.getElementById("pac-input") as HTMLInputElement
                if(input !== null){
                    let MapDiv = document.getElementById("Map") as HTMLDivElement
                    let mapDiv = document.getElementById("map") as HTMLDivElement
                    if(MapDiv !== null && mapDiv !== null){                        
                        MapDiv.insertBefore(input,mapDiv)                    
                    }
                }
            }

            if(lastRouteID !== routeID){
                this.erasePaths()
                this.getDirections = new Array()
                this.paths = new Array()
                this.directionsDisplay = new Array()
                this.directionsResults = []
                this.places = new Array()
            }
        }

        componentDidUpdate(prepProps:Props){
            const {directionsDisplay,directionsResults} = this
            const {positionGetDirection} = this.state   
            const preRouteID = prepProps.routeID
            let {user, vehicleRoute,routeID} = this.props



            if(user !== undefined){               

                const {places} = user
                if ( places != undefined ){
                    //this.drawPlaces()
                    if((!isNullOrUndefined(vehicleRoute) && isNullOrUndefined(prepProps.vehicleRoute))){
                     
                        this.getPaths()

                    }
                    if((!isNullOrUndefined(vehicleRoute) && routeID !== preRouteID && directionsDisplay.length == 0 && vehicleRoute.path.length>0)){
                        this.getMarkers() 
                        this.getPaths()
                    }
                    this.getMarkers()                   
                    
                }
        
            }else{
                this.erasePlaces()
                this.erasePaths()
            }
            if(directionsDisplay.length > 0 && directionsDisplay.length === directionsResults.length){
                this.drawDirectionsResults()
            }
            // this.loadDirections(positionGetDirection)

        
        }

    // 

    addMarker = (place:Place) => { 
        
        let marker = new google.maps.Marker({
            position: place.latLng,
            title: place.name,
            label: ''+place.name
        })

 
        marker.addListener('click', () => {
            place.infoWindow.open(this.map, marker)
        })

        this.places.push(marker)
        
    }

    erasePlaces = () => {
        this.places.forEach((marker:google.maps.Marker,index:number) => {
            marker.setMap(null)
        })
    }

    drawPlaces = () => {
        // console.trace("drawPlaces")
        // if (this.vehicleRoute ){
            this.erasePlaces()
            
            this.places.map((place:any) => {
                place.setMap(this.map)
        })
        // }
        
    }

    drawRoutePlaces = () => {
        this.erasePlaces()
        let {vehicleRoute} = this.props
        let {places} = this

        for (let index = 0; index < vehicleRoute.path.length; index++) {
            const element = vehicleRoute.path[index];

            places[element].setMap(this.map)
            
        }

        
    }

    erasePaths = () => {
        // console.trace("erasePaths")
            this.directionsDisplay.forEach((directionDisplay:google.maps.DirectionsRenderer) => {
                directionDisplay.setMap(null)
            })
    }

    drawPath = () =>{
        this.erasePaths()
        
        let directionsDisplay = this.directionsDisplay
        if (directionsDisplay){
            directionsDisplay.forEach((directionDisplay:google.maps.DirectionsRenderer) => {
                directionDisplay.setMap(this.map)
            })
        }        
    }

    drawDirectionsResults = () => {
        
        this.directionsResults.forEach((directionsResult:google.maps.DirectionsResult,index) => {
            const panel = document.getElementById(`right-panel-${index}`)
            const directionsDisplay = this.directionsDisplay[index]
            console.log("directionsResult: ",directionsResult)
            directionsDisplay.setMap(this.map)
            // console.log("i",index)
            // console.log(`right-panel-${index}`,panel)
            directionsDisplay.setPanel(panel)
            directionsDisplay.setDirections(directionsResult)
            directionsDisplay.setRouteIndex(1)
            // callback()
            
        })
    }

    // # Loads

        loadDirections = (position: number) => {
            
            const newPosition = position+1
            
            let getDirection = this.getDirections[newPosition]
            if (getDirection != undefined){
                let callback = () => {
                    this.getDirections.splice(0,1)
                    this.setState({positionGetDirection:newPosition})
                }
                let callbackError = () => {
                    setTimeout( () => {this.setState({positionGetDirection:position})},5000)
                }
                getDirection(callback, callbackError)

            }
        }



    // 

    // # gets 

        getMenuSelect = () => {
            // const { routeSelected } = this.state         
            // let menuSelect = (<DropDownMenu value={routeSelected} onChange={this.handleChangeRouteSelected.bind(this)} > 
            //         {this.directionsDisplay.map((path:Array<google.maps.DirectionsRenderer>, index:number) => {
            //             return <MenuItem key={index} value={index} primaryText={"Vehiculo número "+index} />
            //         })}
            //     </DropDownMenu>)
            //     if ( this.vehicleRoute != undefined && this.vehicleRoute[routeSelected] != undefined){
            //         // console.log('path: ', this.vehicleRoute[routeSelected].path)
            //     }

            // return menuSelect;
        }

        getPaths = () => {
            this.paths = new Array()
            let directionsService:google.maps.DirectionsService = new google.maps.DirectionsService()
                let pathPolyline:Array<google.maps.Polyline> = new Array()
                // console.log("places: ",this.places)
                let getDirections:Function[]=[]
                // console.log("path: ",this.vehicleRoute.path)
                this.vehicleRoute.path.forEach((posMarker:number,i:number,path:number[]) => {
                    // console.log("i",i)
                    if ( i >= 1){             
                        // console.log("entra")
                        this.directionsDisplay.push(new google.maps.DirectionsRenderer({
                            suppressMarkers: true
                        }))
                        const posPreMarker = path[i-1]
                        const positionOrigen = this.places[posPreMarker].getPosition()
                        const positionDestinate = this.places[posMarker].getPosition()
    
                        let coordinates = [
                            { lat: positionOrigen.lat(), lng: positionOrigen.lng() },
                            { lat: positionDestinate.lat(), lng: positionDestinate.lng() }
                        ]
                        // console.log("--",this.places[path[i-1]],path[i-1]," - ",this.places[posMarker],posMarker)
                        // console.log(path[i-1]," - ",posMarker)
                        
                        
                        let getDirection =  (index:number) => {
                            console.log(positionOrigen,posPreMarker," - ",positionDestinate,posMarker)
                            this.getDirection(positionOrigen,positionDestinate,directionsService,this.directionsDisplay[i-1], index)
                        }
                        
                       
                        let polyline = new google.maps.Polyline({
                            path: coordinates,
                            geodesic: true,
                            strokeColor: '#4682B4',
                            strokeOpacity: 1.0,
                            strokeWeight: 2
                        })
                        
                        pathPolyline.push(polyline)
                        getDirections.push(getDirection)
                        
    
                    }
                    // console.log("getDirections: ",)
                })

                // console.log("getDirections: ",getDirections)
                // console.log("-------------------------------------------------------")
                this.getDirections = getDirections
                // console.log("this.getDirections: ",this.getDirections)
                // this.setState({positionGetDirection: 0})
                this.paths.push(pathPolyline)

                this.forceUpdate(() => {this.getDirections[0](0)})
            this.drawPath()
        }
    
        getDirection = (positionOrigen: google.maps.LatLng, positionDestinate: google.maps.LatLng, directionsService:google.maps.DirectionsService, directionsDisplay: google.maps.DirectionsRenderer,index:number) => {
            console.log("Map getDirection: ",positionOrigen,positionDestinate,index)
            
            directionsService.route({
                origin: positionOrigen,
                destination: positionDestinate,
                travelMode: google.maps.TravelMode.DRIVING,
            }, (response: google.maps.DirectionsResult, status: google.maps.DirectionsStatus) => {

                if( status === google.maps.DirectionsStatus.OK){
                    this.directionsResults.push(response)
                    if (!isNullOrUndefined(this.getDirections[index+1])){
                        let getDirections = this.getDirections
                        setTimeout(function(){getDirections[index+1](index+1)},1000)
                        
                    }else{
                        console.log("End")
                        this.forceUpdate()
                    }
                   
                }else{
                    console.error(response)
                    console.error(status)
                    // callbackError()
                    let getDirections = this.getDirections
                    setTimeout(function(){getDirections[index](index)},15000)

                    //this.getDirections[index](index)
                    
                }
                
            })
        }

        getDOMNode = () => {
            let map = document.getElementById('map')
            return map
        }
    
        getMarkers = () => {
            this.erasePlaces()
            this.places = []
            let places = this.props.placesToSend
            if(!isNullOrUndefined(places) && places.get().length <= 1){
             places = this.props.user.places                
            }
            // let {places} = this.props.user
            this.places = new Array();
            const deposits = places.getDeposits(), clients = places.getClients();

            deposits.forEach((deposit: Deposit,i:number) => {
                this.addMarker(deposit as Place)
            })
    
            clients.forEach((client:Client) => {
                this.addMarker(client as Place)
            })
            
            if(this.directionsDisplay.length > 0){
                this.drawRoutePlaces()
            }else{
                this.drawPlaces()
            }
    
        }

        
    //

    render(){
        const {modeAddClient, modeListClients, vehicleRoute,placesToSend} = this.props
        const arrayPlacesTosend = (isNullOrUndefined(placesToSend)) ? []:placesToSend.get()
        const {directionsDisplay,directionsResults} = this
        const display = (modeListClients) ? "none":"inherit"
        const searchBox = (modeAddClient) ? <input id="pac-input" className="controls" type="text" placeholder="Search the direction" />:null;
        const halfPanel = (directionsDisplay.length > 0 ) ? "halfPanel":"";
        //console.log("DirectionsResults: ",directionsResults)
        //console.log("directionsDisplay ",directionsDisplay)
        //console.log(directionsDisplay.length > 0 , directionsResults.length , directionsDisplay.length)

        if(directionsDisplay.length > 0) {
            this.erasePlaces()
        }

        const rightPanel = (directionsDisplay.length > 0 && directionsResults.length === directionsDisplay.length) ?<div id="right-panel" className={halfPanel} >
            <br />
            <table style={{width:"100%"}} >
                <caption>Destinos</caption>
                <tbody>
                    {
                        directionsDisplay.map((directionDisplay:google.maps.DirectionsRenderer,index) => { 
                            const clientIN = arrayPlacesTosend[vehicleRoute.path[index+1]] as Client; 
                            return (
                                <tr key={index}>
                                <td>{clientIN.name}</td>
                                <td>{directionsResults[index].routes[0].legs[0].duration.text}</td>
                                </tr>
                                )
                        })
                    }
                </tbody>
            </table>

            <br /><br />

            <div > 
            {
                directionsDisplay.map((directionDisplay,index) => { 
                    let nameOrigin = arrayPlacesTosend[vehicleRoute.path[index+1]].name;
                    let nameDestinate = arrayPlacesTosend[vehicleRoute.path[index]].name;
                    return (
                        <div key={index}  >
                            <div>
                                from: {nameOrigin}, to {nameDestinate} 
                            </div>
                            <div id={`right-panel-${index}`} />
                        </div>
                    )
                })
            } </div></div>:null 

        return(
            <div id="Map" className={display} >
                {searchBox}
                <div id="map" />
                {rightPanel}

            </div>
        )
    }
}