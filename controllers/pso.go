package controllers

import (

	"net/http"
	"encoding/json"
	"log"

	s "../services"
)

func PostPSO(w http.ResponseWriter, r *http.Request) {
	var(
		vehicles s.Vehicles
		stations s.Stations
	)
	content := new(s.Content)
	decoder := json.NewDecoder(r.Body)

	if err := decoder.Decode(content); err != nil{
		log.Println(err)
		responseStatus := http.StatusBadRequest
		w.WriteHeader(responseStatus)		
		return
	}

	stations = content.Stations
	stations.OrderDistanceAsc()
	quantity := content.Vehicles.Quantity
	capacity := content.Vehicles.Capacity

	log.Println("Capacity: ",content.Vehicles.Capacity)

	vehicles = make(s.Vehicles,quantity,quantity)
	// log.Println(stations,vehicles)
	// log.Println(quantity,capacity)
	size := len(stations)

	log.Println("nVehicles: ",size,quantity,capacity,content.Vehicles)

	for index := range vehicles {
		vehicle := &vehicles[index]
		vehicle.ID = int32(index)
		vehicle.Capacity = capacity
		vehicle.N = 1
	}

	
	vehiclesRouting := s.PSO(&vehicles,&stations)

	log.Println("vehiclesRouting: ", vehiclesRouting)
	responseJson(w, vehiclesRouting, http.StatusOK)
}
