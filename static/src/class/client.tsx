
import {Place} from './'


export class Client extends Place {
    clientName:string
    demand: number
    P: number // tiempo de visita

    constructor(name:string,latLng:google.maps.LatLng,id:number,finalized:boolean = false, distances:{[key:string]:number|boolean} = {}){
        super(name,latLng,finalized,distances,id)
        this.clientName = name
        latLng = (latLng instanceof google.maps.LatLng) ? latLng:new google.maps.LatLng(latLng.lat,latLng.lng);

        let infoWindow = new google.maps.InfoWindow({
            content: '<div>'
                +'<div> Nombre: '+ name + '</div>'
                +'</div>',
            position:latLng
        })


        this.infoWindow = infoWindow
    }

    loadDemand = () => {
        this.demand = Math.floor((Math.random()*10000)+1)
    }

    loadP = () => {
        this.P = 0
    }

    toJson(){
        const {id,name,clientName,latLng,distances,finalized} = this
        return {id,name,clientName,latLng:{lat:latLng.lat(),lng:latLng.lng()},distances,finalized}   
    }

    toJsonToSend(){
        const {id,name,clientName,latLng,distances,P,W,B,I,demand} = this
        let distancesToSend = []
        for (const key in distances) {
            if (distances.hasOwnProperty(key)) {
                if(typeof(distances[key]) !== "number"){
                    console.log(id,key , distances[key])
                }
                distancesToSend.push(distances[key])
                
            }
        }
        
        return {id,name,clientName,latLng:{lat:latLng.lat(),lng:latLng.lng()},distances:distancesToSend,W,B,I,P,demand}
    }

}

