import {Client, Deposit, User} from './'
import { isNullOrUndefined } from 'util';


export class Place {
    id:number
    name: string
    description?: string
    latLng: google.maps.LatLng
    infoWindow:google.maps.InfoWindow
    distances:{[key:string]:number|boolean} // C
    finalized:boolean
    W:number[]  // tiempo requerido para remover los escombros de los arcos
    B:number[]  //  1 escombros removidos
    I:number[]  //  0 bloqueado por escombros




    constructor(name:string,latLng:any,finalized:boolean = false, distances:{[key:string]:number|boolean} = {},id:number = 0){
        latLng = (latLng instanceof google.maps.LatLng) ? latLng:new google.maps.LatLng(latLng.lat,latLng.lng);
        let infoWindow = new google.maps.InfoWindow({
            content: '<div>'
                +'<div> Name: '+ name + '</div>'
                +'</div>',
            position:latLng
        })
        this.id = id
        this.name = name
        this.latLng = latLng
        this.infoWindow = infoWindow     
        this.distances = distances
        this.distances[name] = 0;
        this.finalized = finalized;
        this.W = []
        this.B = []
        this.I = []
        
    }

    initW = (length:number) => {
        
       for (let index = 0; index < length; index++) {           
           this.W.push(0)
       }

       if(this.id == 0){
       }
    }

    initB = (length:number) => {
        for (let index = 0; index < length; index++) {           
           this.B.push(0)
        }
    }

    initI = (length:number) => {
        for (let index = 0; index < length; index++) {           
           this.I.push(1)
        }
    }

    loadW = () => {
        this.loadI()
        this.W.forEach((w:number,index:number) => {
            if(this.I[index] == 0){
                this.W[index] = Math.floor((Math.random()*3600))
            }
        })
    }

    loadI = () => {
        this.I.forEach((I:number,index) => {
            this.I[index] = (Math.random() < 0.65) ? 0:1; 
        })
    }

    toJson(){
        const {name,latLng,distances,finalized,id} = this
        return {id,name,latLng:{lat:latLng.lat(),lng:latLng.lng()},distances,finalized}
    }
    toJsonToSend(){
        const {name,latLng,distances,id,W,B,I} = this
        let distancesToSend = []
        for (const key in distances) {
            if (distances.hasOwnProperty(key)) {
                if(typeof(distances[key]) !== "number"){
                    console.log(id,key , distances[key])
                }
                distancesToSend.push(distances[key])
                
            }
        }
        return {id,name,latLng:{lat:latLng.lat(),lng:latLng.lng()},distances:distancesToSend,W,B,I}
    }

    isFinalized = () => {
        
        let finalized = true
        for (const key in this.distances) {
            if (this.distances.hasOwnProperty(key)) {
                const distance = this.distances[key];
                if(distance === false) {
                    finalized = false
                    console.trace("isFinalized",finalized,key,distance)
                    return finalized;
                }                
            }
        }
        // console.trace("isFinalized",finalized)
        this.finalized = finalized;
        return finalized
    }
    
}

export class Places {
    private limit:number;posOrigin:number;posDestination:number
    private places:(Client|Deposit)[]
    private position:number

    constructor(deposits:Deposit[] = [],clients:Client[] = []){
        let Id = 0;
        this.places = deposits.map((deposit:Deposit) => {

            return new Deposit(deposit.name,deposit.latLng,deposit.finalized,deposit.distances, Id++)
        })
        
        clients = clients.map((client:Client,id:number) => {
            return new Client(client.name,client.latLng,Id++,client.finalized,client.distances)
        })

        this.merge(clients)
        this.limit = 5
        
    }

    setPosition = (position:number) => {
        this.position = position
    }

    push = (place:Client|Deposit) =>{
        // console.trace("place to push: ",place.name,JSON.stringify(place.distances),place.distances)
        // console.log("place.name: ",place.name)
        if (!isNullOrUndefined(place)){
        if(!this.exists(place.name)){
            this.places.map((placeIn:Client|Deposit) => {
                if(isNullOrUndefined(place.distances[placeIn.name])){
                    place.distances[placeIn.name] = false                    
                }
                if(isNullOrUndefined(placeIn.distances[place.name])){
                    // console.log("entra ", placeIn.name,place.name)
                    placeIn.distances[place.name] = false
                    placeIn.finalized = false
                }                
            }) 
            // console.log("place pushed: ",place.finalized)      
            this.places.push(place)                 
        }
    }else{
        this.places = []
    }
    }

    merge = (places:(Client|Deposit)[]) => {
        // console.trace("merge")
        places.forEach((place:Client|Deposit) => {
            this.push(place)
        })
    }

    exists = (name:string) => {
       let placeFound =  this.getByName(name)

        return !isNullOrUndefined(placeFound)
    }

    loadDemand = () => {
        let nPlaces = this.places.length

        this.places.forEach((place:Client|Deposit) => {
            if(place instanceof Client) {
                place.loadDemand()
                place.loadP()
            }
            place.initB(nPlaces)
            place.initI(nPlaces)
            place.initW(nPlaces)
            place.loadW()
            
        })
    }



    getByName = (name:string) => {
        let placeFound:Client|Deposit
        let placesFound =  this.places.filter((place:Client|Deposit) => {
            return place.name === name
        })

        if(placesFound.length > 0){
            placeFound = placesFound[0]
        }

        return placeFound;        
    }

    toJson(){
       return this.places.map((place:Client|Deposit) => {
            return place.toJson()
        })
    }

    clientsToJson = () => {
        return this.getClients().map((client:Client) => {
            return client.toJson()
        })
    }

    depositsToJson = () => {
        return this.getDeposits().map((deposit:Deposit) => {
            return deposit.toJson()
        })
    }

    get = () => {
        return this.places
    }

    getClients = () => {
        return this.places.filter((place:Client|Deposit) => {
            return place instanceof Client
        })
    }

    getDeposits = () => {
        return this.places.filter((place:Client|Deposit) => {
            return place instanceof Deposit
        })
    }

    getOriginsAndDestinations = () => {
        const limit = 5; 
        let i = 0;
        let origins:(Client|Deposit)[] = [];
        let destinations:(Client|Deposit)[] = [];

        origins = this.places.filter((origin:Client|Deposit) => {
            if(origin.isFinalized() == false && i < limit){
                i++
                return true;
            } else{
                return false;
            }           
        })


        i = 0
        origins.forEach((place:Client|Deposit) => {
            let distances = place.distances
            // console.log("place: ",place)
            let finalized:boolean = true
            for(const name in distances){
                if(distances.hasOwnProperty(name) && distances[name] === false && i < 5){
                    let destination = this.getByName(name)
                    destinations.push(destination)
                    // finalized = false
                    i++
                }else if(distances[name] === false ){
                    finalized = false
                }
            }
            place.finalized = finalized
        })

        return {origins:origins.slice(),destinations:destinations.slice()}
    }

    getDistances = (callback: Function, user:User) => {
        // console.log("getDistances")
        let service = new google.maps.DistanceMatrixService()
        const {origins,destinations} = this.getOriginsAndDestinations()
        const originsCoordinates = origins.map((place:Client|Deposit) => { return place.latLng})
        const destinationsCoordinates = destinations.map((place:Client|Deposit) => { return place.latLng})
        // console.log("origins: ",origins)
        // console.log("destinations: ",destinations)
        if (origins.length > 0 && destinations.length > 0) {            
            const distances = localStorage.getItem("distances")

            if(!isNullOrUndefined(distances)){
                this.readDistances(JSON.parse(distances),callback,user)
            }else{
                service.getDistanceMatrix({
                    origins: originsCoordinates,
                    destinations: destinationsCoordinates,
                    travelMode: google.maps.TravelMode.DRIVING,
                    }, 
                    (response:google.maps.DistanceMatrixResponse, status: google.maps.DistanceMatrixStatus) => {
                       
                        this.readDistanceMatrix(response, status, origins, destinations, callback,user)
                    }
                )
            } 
            
        }else{ 

            callback(user)
        }
    }

    readDistances = (distances:{[key:string]:number[]},callback:Function,user:User) => {
        console.trace("readDistances")
        for(var name in distances){
            if(distances.hasOwnProperty(name)){
                let place = this.getByName(name)
                let distanceVector = distances[name]
                if(!isNullOrUndefined(place) && !isNullOrUndefined(distanceVector)){
                    let i = 0
                    place.finalized = true
                    console.trace("name: ",name," - ",place.distances,"finalized : ",true)
                    for(var key in place.distances){
                        if(place.distances.hasOwnProperty(key)){
                            // console.log("key: ",key, " - i: ",i)
                            const distance = distanceVector[i]
                            if(!isNullOrUndefined(distance)){
                                place.distances[this.places[i].name] = distanceVector[i]                                
                            }
                            i++
                        }
                    }
                }                
            }
        }
        localStorage.removeItem("distances")
        callback(user)

    }

    readDistanceMatrix = (response:google.maps.DistanceMatrixResponse, status: google.maps.DistanceMatrixStatus,origins:(Client|Deposit)[], destinations:(Client|Deposit)[], callback: Function,user:User) => {
        //console.trace("staus ",status,callback)
        if (status === google.maps.DistanceMatrixStatus.OK){
            let rows = response.rows
            rows.map((row: google.maps.DistanceMatrixResponseRow, positionOfOrigin: number) => {
                let elements = row.elements
                console.log("elements: ",elements)
                const name = origins[positionOfOrigin].name
                let origin = this.getByName(name)
                
                // if (this.distances[posI] === undefined){ this.distances.push([])}
                // if (this.durations[posI] === undefined){ this.durations.push([])}
                elements.map((responseElement: google.maps.DistanceMatrixResponseElement, positionOfDestination:number) => {
                   if(responseElement.status == google.maps.DistanceMatrixElementStatus.OK){
                       
                        let destination = destinations[positionOfDestination]
                        origin.distances[destination.name] = responseElement.duration.value

                        if(!isNullOrUndefined(user)){
                            user.places.getByName(name).distances[destination.name] = responseElement.duration.value
                        }
                        // this.distances[posI].push(responseElement.distance.value)
                        // this.durations[posI].push(responseElement.duration.value)                    

                   }

                })
            })


            //this.save()

            callback(user) 
            setTimeout(()=>{this.getDistances(callback,user)}, 3000)

        }else{
            console.log(status)
            setTimeout(()=>{this.getDistances(callback,user)}, 10000)
        }
    }

    save = () => {
        localStorage.setItem('clients', JSON.stringify(this.clientsToJson()) )
        localStorage.setItem("deposits", JSON.stringify(this.depositsToJson()))
        
    }

    getDistancesToSend = () => {
        const distances = this.places.map((clientI:Client|Deposit) => {
            // return {name:clientI.name, distance: this.places.map((clientJ:|Deposit) => {
            return  this.places.map((clientJ:|Deposit) => {
                
                // return {name:clientJ.name,distance:clientI.distances[clientJ.name]}
                return clientI.distances[clientJ.name]
                

            })
        })
        console.log("distances: ",distances)
        return distances
        

    }

    delete = (name:string) => {
        this.places = this.places.filter((place:Client|Deposit) => {
            delete place.distances[name];            
            return place.name !== name
        })
    }

}