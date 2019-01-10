package services

import(
	"log"
)

func (vehicle *Vehicle) Init(stations Stations) {

	size := len(stations)
	log.Println("vehicle init nStations = ", size)
	// panic(0)
	vehicle.X = make(map[int32]map[int32]map[int32]map[int32]int32)
	vehicle.Y = make(map[int32]map[int32]int32)
	vehicle.N = 1

	for i := 0; i < size; i++ {

		vehicle.X[stations[int32(i)].ID] = make(map[int32]map[int32]map[int32]int32)
		vehicle.Y[stations[int32(i)].ID] = make(map[int32]int32)


		for j := 0; j < size; j++ {

			vehicle.X[stations[int32(i)].ID][stations[int32(j)].ID] = make(map[int32]map[int32]int32)
			vehicle.Y[stations[int32(i)].ID][stations[int32(j)].ID] = 0


			for k := 0; k < size; k++ {

				vehicle.X[stations[int32(i)].ID][stations[int32(j)].ID][stations[int32(k)].ID] = make(map[int32]int32)


				for l := 0; l < size; l++ {
					
		
					vehicle.X[stations[int32(i)].ID][stations[int32(j)].ID][stations[int32(k)].ID][stations[int32(l)].ID] = 0

					
					
				}
				
			}

		}
	}

	// panic(vehicle.X)

}

func (vehicle *Vehicle) ValidateX(){
	X := vehicle.X
	log.Println("---------------------------ValitateX")
	cont := 0
	for i, Xi := range X {
		for j,  Xij := range Xi {
			for k, Xijk := range Xij {
				for l ,Xijkl := range Xijk {
					if(Xijkl == 1 ){
						log.Println("i: ",i," j: ",j," k: ",k," l: ",l," Xijkl: ",Xijkl)
						cont++
					}
				}
			}
		}
	}
	log.Println(cont)
	panic(0)
}