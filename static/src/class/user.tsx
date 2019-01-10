import {Client,Deposit,Places, VehicleRouting, Place} from "./"
import firebase, { FirebaseFirestore } from "../config/firebase"
import { firestore } from "firebase/app";
import { string } from "prop-types";

export class User {
    name:string
    ID:string
    places:Places

    constructor(name:string,ID:string,clients:Array<Client>,deposits:Array<Deposit>){
        this.name=name
        this.ID=ID
        this.places= new Places(deposits)
        this.places.merge(clients)

    }

    create = (callback:(user:User)=>void) => {
        const create = confirm("Esta seguro de crear un nuevo usuario")
        if(create){
            let users = JSON.parse(localStorage.getItem("users"))
            if (users == undefined) {
                users = []
            }
            users.push(this.name)

            localStorage.setItem("users",JSON.stringify(users))

            this.ID = this.name
            callback(this)

        }else{
            alert("Usuario no creado")
        }  

    }

    saveClients = () => {
        // console.log("saveClients",this.ID,this.places.clientsToJson())
        let clients = this.places.clientsToJson()
        // console.trace("clients: ", clients)
        localStorage.setItem("clients"+this.ID,JSON.stringify(clients))
    }

    saveDeposits = () => {
        // console.trace("saveDeposits",this.ID)

        let deposits = this.places.depositsToJson()
        // console.log("deposits: ",deposits)
        localStorage.setItem("deposits"+this.ID,JSON.stringify(deposits))
    }

    get = () => {
 
        let clients = JSON.parse(localStorage.getItem("clients"+this.ID)) || []
        let deposits = JSON.parse(localStorage.getItem("deposits"+this.ID)) || []



        this.name = this.ID
        this.places = new Places(deposits,clients)
        this.saveClients()

    }

    send = (places:Places, numberOfVehicles:number,vehicleCapacity:number, callback:Function) => {

        const body = JSON.stringify({
            stations: places.get().map((station:Deposit|Client) => {return station.toJsonToSend()}),
            vehicle:{capacity:vehicleCapacity, quantity: numberOfVehicles}
        })    

        // console.log("body: ",body)

        fetch(`api/pso`,{
            method:`post`,
            headers:{
                'Content-Type': 'application/json'
            },
            body:body  
        })
        .then((response:Response) => {
            if(response.status <= 400){
                response.json().then((vehiclesRouting:VehicleRouting[]) => {

                    console.log("vehiclesRouting: ",vehiclesRouting)
                    
                    if(vehiclesRouting.length > 0){
                        //console.log("places: ",places.get())
                        //console.log("route: ",vehiclesRouting[0].path)
                        callback(vehiclesRouting)
                    }
                    
                })
            }else{
                response.text().then((text:String) => {
                    throw text
                })
            }
        })
    }

    getDistances = () => {
        // console.log("getDistances")
        this.places.getDistances((user:User) => {user.saveClients();user.saveDeposits()},this)
    }
    
}

export class Users{
    private users:Array<User>
    
    constructor(){
        this.users = new Array()
    }

    getUser = (ID:string) => {
       const usersFound = this.users.filter((user:User)=>{return user.ID === ID})
       const user = (usersFound.length > 0) ? usersFound[0]:undefined
       return user
    }

    load = () => {

                // console.log(data.name,doc.id,data.clients)
        var users:string[] = JSON.parse(localStorage.getItem("users"))
        
        if(users == undefined || users.length == 0){
            const user = new User("User1","0000000",[],[])
            this.add(user)
        }else{
            users.forEach((userName:string) => {
                const user = new User(userName,userName,[],[])
                user.get()
                this.add(user)
            })
        }
        

        






    }

    getClientsFromData = (clientsData:any) => {
        return clientsData.map((client:any,id:number)=>{ return new Client(client.name,new google.maps.LatLng(client.latLng.lat,client.latLng.lng),id,client.finalized,client.distances)})
    }

    getDepostisFromData = (depositsData:any) => {
        return depositsData.map((deposit:any) => { return new Deposit(deposit.name, new google.maps.LatLng(deposit.latLng.lat,deposit.latLng.lng),deposit.finalized,deposit.distances)})
    }

    add = (user:User)=>{
        this.users.push(user)
    }
    search = (value:string) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        let usersFound:Array<User> =  inputLength === 0 ? [] :this.users.filter(user =>
            user.name.toLowerCase().slice(0, inputLength) === inputValue
          );

        return usersFound
    }
}