import {Client,Deposit} from "./"
let  $ = require('jquery')

export interface Position{
    lat: number,
    lng: number
}

export class Kml {
    private kml:any;
    private folders: any

    constructor(kml:string){
        this.kml = $(kml)
        this.folders = this.kml.find("Folder")
    }

    private readFolders = () => {
        let $placemarks:Array<Deposit> = new Array()

        this.folders.each((i: number, folder:any)=>{
             let $folder = $(folder)
             let depositsReader:Deposit[],clientsReader:Client[]

            let $placemarksReader = this.readFolder($folder)
            $placemarks = $placemarks.concat($placemarksReader)

        })

        return $placemarks
    }

    private readFolder = (folder:any) => {
        console.log("readFolder")
        // let name = folder.find('name')[0].innerHTML
        let $placemarks:Array<any> = new Array()


        folder.find('Placemark').each((i:number,placemark:any) => {
            let $placemark = $(placemark)
            
            $placemarks.push($placemark)
        })

        return $placemarks
        
    }

    private readPlacemark = ($placemark:any,id:number) => {
        console.log("readPlacemark")
        let defaultName = 'Deposit'
        const name = $placemark.find('name')[0].innerHTML
        const point = $placemark.find('Point')[0]
        // console.log("Point: ",point)
        if( point == undefined){
            return undefined
        }
        if(name == defaultName){
            const deposit = this.getDeposit($placemark)
            // console.log(" deposit",deposit)
            return deposit
        }else{
            const client = this.getClient($placemark,id)
            // console.log("client: ",client)
            return client
        } 
    }

    private readPlacemarks = ($placemarks:any[]) => {
        let clients:Client[] = []
        let deposits:Deposit[] = []

        $placemarks.map(($placemark:any,id:number)=>{
            let place = this.readPlacemark($placemark,id)
            if(place instanceof Client){
                clients.push(place)
            }else if(place instanceof Deposit){
                deposits.push(place)
            }
        }) 
     
        
        return {deposits,clients}
    }

    getDepositsAndClients = () => {
        let $placemarks = this.readFolders()      
       let {deposits,clients} = this.readPlacemarks($placemarks)
       console.log("{deposits,clients}: ",{deposits,clients})
        return {deposits,clients}
             
    }


    private getDeposit = ($placemark: any) => {
        let name = $placemark.find('name')[0].innerHTML
        let coordinates = $placemark.find('coordinates')[0].innerHTML.split(',')
        const latLng:google.maps.LatLng = new google.maps.LatLng(+coordinates[1], +coordinates[0])

        let deposit = new Deposit(name,latLng)
        
        return deposit
    }

    private getClient = ($placemark:any,id) => {
        let name = $placemark.find('name')[0].innerHTML       
        let coordinates = $placemark.find('coordinates')[0].innerHTML.split(',')
        let latLng:google.maps.LatLng = new google.maps.LatLng( +coordinates[1], +coordinates[0])

        //let Data = $placemark.find("Data")
        //let clientName = $(Data[0]).find("value").text()




        const client = new Client(name, latLng,id)
        
        return client;
    }

}