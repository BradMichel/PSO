package services

import( 
	//"log"
)

func (station *Station) OrderDistanceAsc() {
	// TAG := "(station *Station)OrderDistanceAsc()"
	// log.Println(TAG)

	l := len((*station).Distances)
	distances := make([]float64, l, l*2)
	copy(distances[:], (*station).Distances)
	distancesOrderAsc := &(*station).DistancesOrderAsc
	for index := 0; index < len(distances); index++ {
		var (
			men    int
			valMen float64
		)
		men, valMen = 0, -1
		for id, distance := range distances {
			if (valMen < 0 || distance < valMen) && distance > 0 {
				men, valMen = id, distance
			}
		}
		*distancesOrderAsc = append(*distancesOrderAsc, int32(men))
		distances[men] = -1
	}
}

func (station *Station) NextClient(clients *Stations, deposit *Station) (minClient *Station) {

	minClient = nil
	var (
		nextClient   *Station
		idNextClient int32

	)
	//log.Println("DistancesOrderAsc: ",station.DistancesOrderAsc)

	for _, idNextClient = range (*station).DistancesOrderAsc {

		//log.Println("(*clients)[idNextClient].Visited= ",(*clients)[idNextClient].Visited)

		if int32(idNextClient) != deposit.ID && !(*clients)[idNextClient].Visited {

			nextClient = &(*clients)[idNextClient]

			if (nextClient != nil && nextClient.Visited == false ) {
				minClient = nextClient
				
				return

			}
		}
	}

	return
}

func (station *Station) selectB(ID int32){
	if(station.I[ID] == 1){
		station.B[ID] = 1
	}
}

func (stations *Stations) initB(){
	for index,_ := range *stations{
		station := &(*stations)[index]
		for ID,_ := range station.B {
			station.B[ID] = 0
		}
	}
}

func (stations *Stations) OrderDistanceAsc(){
	for i := range *stations{
		(*stations)[i].OrderDistanceAsc()
	}
}

func (stations *Stations) GetID () (Ids []int32){
	Ids = make([]int32,0)
	for _,station := range *stations{
		Ids = append(Ids,station.ID)
	}
	return
}

func (stations *Stations) GetByID(ID int32) (stationFound *Station){
	for _, station := range *stations{
		if(station.ID == ID){
			stationFound = &station
			return
		}
	}
	return
}

func (stations *Stations) GetIndexByID(ID int32) (i int32){
	for index, station := range *stations{
		if(station.ID == ID){
			i = int32(index)
			return
		}
	}
	return
}