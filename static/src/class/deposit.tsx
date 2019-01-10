import {Place, Position} from './'

export class Deposit extends Place {
    capacity:number


    constructor(name: string, latLng:google.maps.LatLng, finalized:boolean=false, distances:{[key:string]:number|boolean} = {}, Id:number = 0){
        super(name,latLng,finalized,distances,Id)
        this.capacity = 9999999999

    }



}
