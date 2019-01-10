package services

const (
	w = 0.7 
	c1 = 1
	c2 = 1.5
	maxIterations = 5
	nParticles = 3
	M = 999999999 // Un numero muy grande
)

type (

	Content struct {

		// Vector de estaciones
		Stations Stations `json:"stations,omitempty"`

		//Ventanas de tiempo
		Vehicles struct {
			Capacity float64 `json:"capacity,omitempty"`
			Quantity int32 `json:"quantity,omitempty"`
		} `json:"vehicle,omitempty"`

	}

	Vehicle struct {
		ID            int32     `json:"id"`
		Capacity	  float64 `json:"capacity"`
		N	int32 `json:"N"`	// 1 si el vehículo v tiene la capacidad disponible para recoger escombros 	0 de lo contrario
		Y map[int32]map[int32]int32 `json:"Y"`	// 1 si el vehículo visita el nodo crítico j, justo después de visitar el nodo critico i
		X map[int32]map[int32]map[int32]map[int32]int32	//	1 si el vehículo  usa el arco (k,l), mientras viaja del nodo critico i al nodo critico j 0 de lo contrario
 	}

	Vehicles []Vehicle

	Station struct {
		ID            int32     `json:"id"`
		Longitude     float64 `json:"longitud"`
		Latitude      float64 `json:"latitud"`
		Distances     []float64 `json:"distances,omitempty"`
		DistancesOrderAsc []int32     `json:"distancesOrderAsc,omitempty"`
		Visited           bool      `json:"visited,omitempty"`
		Capacity      float64 `json:"capacity"`
		Demand        float64 `json:"demand"`
		B	          []int32	`json:"B"`	// vector de arcos 1 si escombros son removidos 0 de lo contrario
		I			[]int32 `json:"I"`		// vector si el arco esta bloqueado 1 de lo contrario 0
		W	          []float64	`json:"W"`	// tiempo requerido para remover los escombros de los arcos
		P	float64 `json:"P"`	// tiempo de visita
	}

	Stations []Station

	Route struct {
		Vehicle       Vehicle   `json:"vehicle"`
		Deposit       Station   `json:"deposit"`
		Clients       Stations `json:"clients"`
		Stations	Stations `json:"_"`
		TT    float64 `json:"time,omitempty"`
		Residue float64 `json:"residue,omitempty"`
	}
	Routes struct {
		Routes       []Route    `json:"routes"`
		UnvisitedClients []int32  `json:"unvisitedClients"`		
	}


	

	// -------------- PSO --------------

	Measurer struct {
		Dimension []int32
		Position []float64
		Cost float64
	}

	Particle struct {
		Dimension []int32
		CodedSolution int32
		Position []float64
		Velocity []float64
		Cost float64
		Best Measurer
		Route Route		
	}

	Swarm struct {
		Particles []*Particle
		GlobalBest Measurer
		Route Route
	}

	Swarms []Swarm
	VehicleRouting struct {
		Path     []int32   `json:"path"`
		Distance float64 `json:"distance"`
	}
)

