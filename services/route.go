package services

import(
	"log"

)


func (route *Route) nearNeighbour(vehicle *Vehicle, stations *Stations) {
		route.Vehicle = *vehicle
		route.Residue = vehicle.Capacity
		route.Deposit = (*stations)[0]
		previousStation := &route.Deposit
		actualStation := route.GetActualStation(previousStation, stations)
		maxLoop := 0
		// log.Println("actualStation: ",actualStation.ID)

		for actualStation != nil && (*route).Residue >= 0 && maxLoop < 500 {
			log.Println("actualStation.Demand: ",actualStation.ID,actualStation.Demand,route.Residue)
			if route.Residue - actualStation.Demand >= 0 {
				route.AddClient(previousStation, actualStation)
				previousStation = actualStation
				
			}
			actualStation = route.GetActualStation(previousStation, stations)
			maxLoop++
		}

		route.GetStations()

		route.Vehicle.Init(route.Stations)
		// log.Println("stations: ",len(route.Stations), route.Residue)
		// log.Println("stop for : actualStation != nil: ", actualStation != nil, " (*route).Residue >= 0: ", (*route).Residue >= 0, " maxLoop < 5000: ", maxLoop < 500)
		// log.Println(" actualStation: ", actualStation.ID, " (*route).Residue: ", (*route).Residue, " maxLoop: ", maxLoop)
		// panic(1)
}

func(route *Route) GetStations() {
	stations := make(Stations,0,0)

	stations = append(stations,route.Deposit)
	stations = append(stations,route.Clients...)
	route.Stations = stations
}

func (route *Route) GetActualStation(previousStation *Station, stations *Stations) (actualStation *Station) {
	//TAG:="(route *Route)GetActualStationForTimeWindows(previousStation *Station,clients *Clients) (actualStation *Client)"
	//logPrintln(TAG)
	deposit := &route.Deposit
	actualStation = previousStation.NextClient(stations, deposit)

	return
}

func (route *Route) AddClient(previusStation *Station, actualClient *Station) {
	(*route).Residue -= (*actualClient).Demand
	route.Clients = append(route.Clients, *actualClient)

	// log.Println("route.EndTime: ", route.EndTime)
	previusStation = actualClient
	previusStation.Visited = true
}

func (route *Route) decode( dimension []int32,position []float64){
	log.Println("decode.Route: ")

	l := len(position)
	distances := make([]float64, l, l*2)
	copy(distances[:], position)

	stations := &route.Stations
	stations.initB()
	vehicle := &route.Vehicle
	vehicle.Init(*stations)
	deposit := &route.Deposit
	deposit.P = 0
	actualStation := deposit

	visitedIDs := make(map[int32]int32,0)

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
		client := stations.GetByID(dimension[men])	

		// log.Println("nStations: ",len(route.Stations))
		// indexActualStation := route.Stations.GetIndexByID(actualStation.ID)
		// indexClient := route.Stations.GetIndexByID(client.ID)

		// log.Println("actualStation.ID: ",actualStation.ID,indexActualStation, "client.ID: ",client.ID,indexClient)
		// log.Println(vehicle.Y)
		// log.Println(vehicle.X[indexActualStation][indexClient])
		
		actualStation.selectB(client.ID)
		vehicle.Y[actualStation.ID][client.ID] = 1
		vehicle.X[actualStation.ID][client.ID][actualStation.ID][client.ID] = 1

		client.P = actualStation.P + actualStation.Distances[client.ID]
		// vehicle.X[actualStation.ID][client.ID][client.ID][actualStation.ID] = 1

		// for fromID, toID := range visitedIDs {
		// 		vehicle.X[actualStation.ID][client.ID][fromID][toID] = 1
		// 		// vehicle.X[actualStation.ID][client.ID][client.ID][ID] = 1			

		// }

		// log.Println("i: ",actualStation.ID," j: ",client.ID," k: ",actualStation.ID," l: ",client.ID)

		visitedIDs[actualStation.ID] = client.ID

		// log.Println("visitedIDs: ",visitedIDs)

		actualStation = client
		route.Clients[index] = *client

		distances[men] = -1
	}

	actualStation.selectB(deposit.ID)
	vehicle.Y[actualStation.ID][deposit.ID] = 1
	vehicle.X[actualStation.ID][deposit.ID][actualStation.ID][deposit.ID] = 1
	// vehicle.X[actualStation.ID][deposit.ID][deposit.ID][actualStation.ID] = 1

	// log.Println("i: ",actualStation.ID," j: ",deposit.ID," k: ",actualStation.ID," l: ",deposit.ID)

	
	route.loadTT()

}

func (route *Route) GetVehicleRouting() (vehicleRouting VehicleRouting) {
	vehicleRouting = VehicleRouting{}
	path := &vehicleRouting.Path

	clients := route.Clients
	nClients := len(clients)
	if nClients > 0 {
		deposit := route.Deposit
		lastClient := clients[nClients-1]

		for _, client := range route.Clients {
			*path = append(*path, client.ID)
		}
		// log.Println(deposit.TimeVisited.Time, " - ", route.EndTime, " - ", deposit.TimeLimit)
		// log.Println(route.EndTime.Sub(deposit.TimeVisited.Time))
		route.loadTT()

		vehicleRouting.Distance = route.TT + lastClient.Distances[deposit.ID] + route.getSummationOfBW()
	}

	return
}

// sumar los tiempos de recogida de escombros
func (route *Route) getSummationOfBW() (summation float64){
	actualStation := route.Deposit;
	summation = 0
	for _,client := range route.Clients{
		b := float64(actualStation.B[client.ID])
		w := actualStation.W[client.ID]
		r := b * w
		summation += r
	}
	return
}

func (route *Route) loadTT(){
	actualStation := &route.Deposit
	var TT float64 = 0
	var P float64 = 0
 
	for index,_ := range route.Clients {
		nextStation := &route.Clients[index]
		// log.Println("actualStation.ID,nextStation.ID,",actualStation.ID,nextStation.ID)
		// log.Println("actualStation.Distances= ",actualStation.Distances)
		// log.Println("actualStation.W = ",actualStation.W)
		T := actualStation.Distances[nextStation.ID]
		TT  += T
		if(actualStation.B[nextStation.ID] == 1){
			TT += actualStation.W[nextStation.ID]
		}

		P += T

		actualStation = nextStation
	}
	TT += actualStation.Distances[route.Deposit.ID]
	route.TT = TT
}

func (route *Route) GetStationById(Id int32) (stationFound Station){
	
	deposit := route.Deposit

	if( deposit.ID == Id){
		stationFound = deposit
		return
	}

	clients := route.Clients
	for _, client := range clients {
		if( client.ID == Id ){
			stationFound = client
			return
		}
	}
	return
}

func (route *Route) Validate() (valid bool){
	route.loadTT()
	valid = true
	if valid = route.validation1();valid == false{
		return
	}
	if valid = route.validation2();valid == false{
		return
	}
	if valid = route.validation3();valid == false{
		return
	}
	if valid = route.validation4();valid == false{
		return
	}
	if valid = route.validation5();valid == false{
		return
	}
	if valid = route.validation6();valid == false{
		return
	}
	if valid = route.validation7();valid == false{
		return
	}
	if valid = route.validation8();valid == false{
		return
	}
	if valid = route.validation9();valid == false{
		return
	}
	if valid = route.validation10();valid == false{
		return
	}
	if valid = route.validation11();valid == false{
		return
	}
	if valid = route.validation12();valid == false{
		return
	}
	if valid = route.validation13();valid == false{
		return
	}
	if valid = route.validation14();valid == false{
		return
	}
	if valid = route.validation15();valid == false{
		return
	}
	if valid = route.validation16();valid == false{
		return
	}
	if valid = route.validation17();valid == false{
		return
	}
	if valid = route.validation18();valid == false{
		return
	}
	if valid = route.validation19();valid == false{
		return
	}

	log.Println("All validations satisfied")

	return
}

func (route *Route) validation1() (valid bool){
	valid = true
	vehicle := route.Vehicle
	N := vehicle.N
	Y := vehicle.Y



	sumAllI := make(map[int32]float64)

	for _,Yj := range Y {		
		for i,Yji := range Yj {
			
			if(i != route.Deposit.ID){
				sumAllI[i] += float64(Yji)
			}
		}
	}

	for i,sum := range sumAllI {
		value := sum * float64(N)
		if (value != 1){
			log.Println("validation1 not satisfied: ",i,value, sum, N)

			valid = false
			log.Println(Y[i])
			panic(valid)
			return
		}
	}
	return
}

func (route *Route) validation2() (valid bool){

	valid = true
	vehicle := route.Vehicle
	N := vehicle.N
	Y := vehicle.Y

	sumAllI := make(map[int32]float64)

	for i,Yi := range Y {		
		for _,Yij := range Yi {
			
			if(i != route.Deposit.ID){
				sumAllI[i] += float64(Yij)
			}
		}
	}

	for i,sum := range sumAllI {
		value := sum * float64(N)
		if (value != 1){
			log.Println("validation2 not satisfied: ",i,value, sum, N)
			log.Println(Y[i])
			valid = false
			// panic(valid)
			return
		}
	}
	return
}

func (route *Route) validation3() (valid bool){
	valid = true
	vehicle := route.Vehicle
	N := vehicle.N
	Y := vehicle.Y

	sumAllI := make(map[int32]float64)

	for i,Yi := range Y {		
		for j,Yij := range Yi {
			if(j != route.Deposit.ID && i == route.Deposit.ID){
				sumAllI[i] += float64(Yij)
			}
		}
	}

	for _,sum := range sumAllI {
		value := sum * float64(N)
		if (value != 1){
			log.Println("validation3 not satisfied: ",value)
			valid = false
			return
		}
	}
	return
}

func (route *Route) validation4() (valid bool){
	valid = true
	vehicle := route.Vehicle
	X := vehicle.X
	N := float64(vehicle.N)
	Y := vehicle.Y
	// log.Println(X)
	// panic(false)


	sumXijli := make(map[int32]map[int32]float64)
	sumXijil := make(map[int32]map[int32]float64)

	for i,Xi := range X {
		sumXijil[i] = make(map[int32]float64)
		sumXijli[i] = make(map[int32]float64)

		for j,Xij := range Xi {
			for l,Xijl := range Xij{
				Xijli := Xijl[i]
				Xijil := Xij[i][l]
				sumXijil[i][j] += float64(Xijil)
				sumXijli[i][j] += float64(Xijli)
			}
		}
	}

	for i := range sumXijil{
		for j := range sumXijil[i]{
			Yij := float64(Y[i][j])
			value := ( sumXijil[i][j] * N ) - ( sumXijli[i][j] * N ) 
			if( value != Yij){
				valid = false
				log.Println("validation4 not satisfied: value=",value," Yij= ",Yij," sumXijil[i][j]= ",sumXijil[i][j]," sumXijli[i][j]= ", sumXijli[i][j]," i= ",i," j= ",j)
				log.Println("X",X[i][j])
				return
			}
		}
	}

	return
}

func (route *Route) validation5() (valid bool){
	valid = true
	clients := route.Clients
	vehicle := route.Vehicle
	X := vehicle.X
	N := float64(vehicle.N)
	Y := vehicle.Y


	// panic(false)
	sumXijli := make(map[int32]map[int32]float64)
	sumXijjl := make(map[int32]map[int32]float64)

	for i,Xi := range X {
		sumXijjl[i] = make(map[int32]float64)
		sumXijli[i] = make(map[int32]float64)

		for j,Xij := range Xi {
			for l,Xijl := range Xij{

				Xijli := Xijl[j]
				Xijjl := Xij[j][l]			

				sumXijjl[i][j] += float64(Xijjl)
				sumXijli[i][j] += float64(Xijli)
			}
		}
	}

	for i := range sumXijli{
		for j := range sumXijli[i]{
			Yij := float64(Y[i][j])
			value := ( sumXijjl[i][j] * N ) - ( sumXijli[i][j] * N ) 
			if( value != -Yij){
				valid = false
				log.Println("validation5 not satisfied: value=",value," Yij= ",Yij," i= ",i," j= ",j, "sumXijjl[i][j]: ",sumXijjl[i][j],"sumXijli[i][j]:",sumXijli[i][j])
				log.Println(clients.GetID())
				for a,Xij := range X[i][j] {
					log.Println(a)
					log.Println(Xij)
					log.Println()

				}
				panic(0)
				return
			}
			
		}
	}

	return
}

func (route *Route) validation6() (valid bool){
	valid = true
	vehicle := route.Vehicle
	X := vehicle.X
	N := float64(vehicle.N)
	//Y := vehicle.Y

	sumXijlk := make(map[int32]map[int32]float64)
	sumXijkl := make(map[int32]map[int32]float64)

	for i,Xi := range X {

		if(sumXijkl[i] == nil){
			sumXijkl[i] = make(map[int32]float64)
		}

		if(sumXijlk[i] == nil){
			sumXijlk[i] = make(map[int32]float64)
		}

		for j,Xij := range Xi {
			for k,Xijk := range Xij{
				for l, Xijkl := range Xijk {
					if( k != i && k != j){
						Xijlk := Xij[l][k]
						//Xijkl := Xij[k][l]
						sumXijkl[i][j] += float64(Xijkl)
						sumXijlk[i][j] += float64(Xijlk)
					}		
				}
			}
		}
	}

	for i := range sumXijlk{
		for j := range sumXijlk[i]{

			value := ( sumXijkl[i][j] * N ) - ( sumXijlk[i][j] * N ) 
			if( value != 0){
				valid = false
				log.Println("validation6 not satisfied: value=",value," i= ",i," j= ",j)
				return
			}
		}
	}

	return
}

func (route *Route) validation7() (valid bool){
	valid = true
	stations := route.Stations
	clients := route.Clients
	vehicle := route.Vehicle
	Y := vehicle.Y

	for _, station := range stations {
		for _, client := range clients {
			i := station.ID
			j := client.ID

			Yij := Y[i][j]

			Pj := route.GetStationById(j).P
			stationI := route.GetStationById(i)
			Pi := stationI.P
			Cij := stationI.Distances[j]

			if(Pj < ( Pi + Cij - ( M * ( 1 - float64(Yij))))){
				log.Println("validation7 not satisfied: i= ",i ," j= ",j," Pj= ", Pj, "Pi= ",Pi, " Cij= ",Cij, "M = ", M, " Yij= ", Yij ,"  Pi + Cij - ( M * ( 1 - Yij)) = ", Pi + Cij - ( M * ( 1 - float64(Yij))))
				valid = false
				return
			}
		}
	}

	return
}

func (route *Route) validation8() (valid bool){
	valid = true
	deposit := route.Deposit
	stations := route.Stations
	route.loadTT()
	TT := route.TT
	
	for i, station := range stations{
		if( int32(i) != deposit.ID) {
			Pi := station.P
			if( TT < Pi){
				log.Println("validation8 not satisfied: TT= ",TT," Pi= ",Pi)
				valid = false
				return
			}
		}
	}

	return
}

func (route *Route) validation9() (valid bool){
	valid = true
	stations := route.Stations
	vehicle := route.Vehicle
	X := vehicle.X
	N := float64(len(stations))

	sumXijkl := make(map[int32]map[int32]float64)

	for i, Xi := range X {
		sumXijkl[i] = make(map[int32]float64)
		for j, Xij := range Xi {
			for _, Xijk := range Xij {
				for _, Xijkl := range Xijk {
					sumXijkl[i][j] += float64(Xijkl)
				}
			}
		}
	}

	for i := range sumXijkl {
		for j := range sumXijkl[i] {
			sum := sumXijkl[i][j]
			Yij := vehicle.Y[i][j]
			if( sum > ( float64(Yij) * N * N ) ){
				log.Println("validation9 not satisfied sumXijkl= ",sum, " ( Yij * N * N )= ",( float64(Yij) * N * N ))
				valid = false 
				return
			}
		}
	}

	return
}

func (route *Route) validation10() (valid bool) {
	valid = true
	stations := route.Stations
	vehicle := route.Vehicle

	// vehicle.ValidateX()
	X := vehicle.X

	sumXijlk := make(map[int32]map[int32]float64)
	

	for i, Xi := range X {
		sumXijlk[i] = make(map[int32]float64)
		for j, Xij := range Xi {
			for k, Xijk := range Xij {
				for l, Xijkl := range Xijk {
					
					station := stations.GetByID(k)
					tkl := station.Distances[l]
					// if(Xijkl ==1 ){
					// 	log.Println(" i= ", i ," j= ",j," K= ",k," l= ",l ," tkl= ",tkl," sumXijlk[i][j]: ",sumXijlk[i][j])
					// }
					sumXijlk[i][j] += ( float64(Xijkl) * tkl )
				}
			}
		}
	}

	// panic(sumXijlk)

	for i := range sumXijlk {
		for j := range sumXijlk{

			Cij:= route.getCij(i,j)


			if( Cij != sumXijlk[i][j]){
				log.Println("validation10 not satisfied: Cij= ", Cij ," sum = ",sumXijlk[i][j]," i= ", i ," j= ",j)
				log.Println(route.Clients.GetID())
				valid = false
				return
			}
		}
	}

	return
}

func (route *Route) validation11() (valid bool) {
	valid = true
	stations := route.Stations
	nStations := len(stations)
	vehicle := route.Vehicle
	X := vehicle.X
	//N := float64(vehicle.N)
	//Y := vehicle.Y
	L := float64(nStations * nStations)

	sumXijlk := make(map[int32]map[int32]float64)
	sumXijkl := make(map[int32]map[int32]float64)

	for i,Xi := range X {
		for j,Xij := range Xi {
			for k,Xijk := range Xij{

				sumXijkl[k] = make(map[int32]float64)
				sumXijlk[k] = make(map[int32]float64)

				for l, Xijkl := range Xijk {
					if( k != i && k != j){
						Xijlk := Xij[l][k]
						//Xijkl := Xij[k][l]
						sumXijkl[k][l] += float64(Xijkl)
						sumXijlk[k][l] += float64(Xijlk)
					}		
				}
			}
		}
	}

	for k := range sumXijlk{
		for l := range sumXijlk[k]{

			stationK := stations.GetByID(k)
			Ikl := stationK.I[l]
			Bkl := stationK.B[l]

			if( ( sumXijkl[k][l] + sumXijlk[k][l] ) > ( ( float64(Bkl) + float64(Ikl) ) * L * L) ){
				valid = false
				log.Println("validation11 not satisfied: sumXijkl[k][l]= ", sumXijkl[k][l] ," sumXijlk[k][l]= ", sumXijlk[k][l] ," Bkl= ", Bkl ," Ikl= ", Ikl , " k= ",k," l= ",l)
				return
			}
		}
	}

	return
}

func (route *Route) validation12() (valid bool) {
	valid = true
	stations := route.Stations

	for i,station := range stations{
		P := station.P
		 if P != 0 {
			log.Println("validation12 not satified: P= ", P ," i= ", i ," Id= ",station.ID)
			valid = false
			return
		 }
	}
	return
}

func (route *Route) validation13() (valid bool){
	valid = true
	TT := route.TT
	if( TT < 0){
		log.Println("validation13 not satisfied: TT= ",TT)
		valid = false
		return
	}
	return
}

func (route *Route) validation14() (valid bool) {
	valid = true
	stations := route.Stations
	deposit := route.Deposit
	for i,station := range stations{
		P := station.P
		ID := station.ID
		 if((ID != deposit.ID) && (P != 0)) {
			log.Println("validation14 not satified: P= ", P ," i= ", i ," Id= ",ID)
			valid = false
			return
		 }
	}
	return
}

func (route *Route) validation15() (valid bool) {
	valid = true
	stations := route.Stations

	for i, station := range stations {
		for j, Cij := range station.Distances {
			if( Cij < 0 ){
				log.Println("validation15 not satisfied: Cij= ", Cij ," i= ", i , " j= ", j)
				valid = false
				return
			}
		}
	}
	return
}

func (route *Route) validation16() (valid bool) {
	valid = true
	vehicle := route.Vehicle
	X := vehicle.X

	for i, Xi := range X {
		for j, Xij := range Xi {
			for k, Xijk := range Xij {
				for l, Xijkl := range Xijk {
					if((Xijkl != 0 && Xijkl != 1)){
						log.Println("validation16 not satisfied: Xijkl= ", Xijkl ," i= ", i ," j= ", j ," k= ", k ," l= ", l )
						valid = false
						return
					}
				}
			}
		}
	}
	return
}

func (route *Route) validation17() (valid bool) {
	valid = true
	stations := route.Stations

	for k, station := range stations {
		Bk:= station.B
		for l, Bkl := range Bk {
			if(Bkl != 0 && Bkl != 1){
				log.Println("validation17 not satisfied: Bkl= ", Bkl ," k= ", k ," l= ", l)
				valid = false
				return
			}
		}
	}
	return
}

func (route *Route) validation18() (valid bool) {
	valid = true
	vehicle := route.Vehicle
	Y := vehicle.Y

	for i, Yi := range Y {
		for j, Yij := range Yi {
			if( Yij != 0 && Yij != 1){
				log.Println("validation18 not satisfied: Yij= ", Yij ," i= ", i , " j= ", j )
				valid = false
				return
			}
		}
	}
	return
}

func (route *Route) validation19() (valid bool){
	valid = true
	vehicle := route.Vehicle
	N := vehicle.N
	if( N != 0 && N != 1 ){
		log.Println("validation19 not satisfied: N= ",N)
		valid = false
		return
	}
	return
}

func (route *Route) getCij(i int32, j int32) (Cij float64){
	stations := route.Stations
	vehicle := route.Vehicle
	Xij := vehicle.X[i][j]

	for k, Xijk := range Xij {
		for l, Xijkl := range Xijk {
	
			station := stations.GetByID(k)
			tkl := station.Distances[l]

			Cij += ( float64(Xijkl) * tkl )
		}
	}
	
	return
}