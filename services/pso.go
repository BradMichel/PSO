package services

import(
	"log"
)

func PSO(vehicles *Vehicles,stations *Stations) []VehicleRouting{
	log.Println("PSO")

	nVehicles := len(*vehicles)

	swarms := make(Swarms,nVehicles,nVehicles)
	log.Println("nStaciones: ",len(*stations))

	for i := range swarms {
		log.Println("i= ", i)
		swarm := &swarms[i]
		*swarm = Swarm{Route:Route{Stations:*stations}}
		route := &swarm.Route
		route.nearNeighbour(&(*vehicles)[i],stations)
		log.Println("route near neighbour: ",swarm.Route.GetVehicleRouting())
		swarm.make()
		swarm.pso()
		swarm.decode()
		// log.Println(len(route.Stations),len(*stations))
		// panic(swarm.Route.Clients.GetID())
	}

	return swarms.GetVehiclesRouting()


}