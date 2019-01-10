package services

import(
	// "log"
	"math"
)


func (swarm *Swarm) make(){
	//log.Println("make: ",swarm)
	swarm.Particles = make([]*Particle,nParticles,nParticles)
	swarm.GlobalBest = Measurer{ Cost: math.MaxFloat64}

	for i  := range swarm.Particles {
		swarm.Particles[i] = new(Particle)
		//particle := swarm.Particles[i]
		//log.Println("particle: ",particle)
	}
	swarm.encode()
}

func (swarm *Swarm) encode(){
	route := swarm.Route
	dimension := len(route.Clients)
	for _,particle := range swarm.Particles {
		particle.make(dimension,route)
		
	}
}

func (swarm *Swarm) decode(){
	globalBest := swarm.GlobalBest
	route := swarm.Route

	route.decode(globalBest.Dimension,globalBest.Position)
}

func (swarm *Swarm) pso(){
	particles := &(*swarm).Particles
	nPupulation := len(*particles)
	swarm.GlobalBest.Position = (*particles)[0].Best.Position
	swarm.GlobalBest.Dimension = (*particles)[0].Dimension
	
	for t := 0; t < maxIterations; t++ {

		for i := 0; i < nPupulation; i++ {
			particle := (*particles)[i]

				particle.update(&swarm.GlobalBest)
				particle.Route.Vehicle.Init(particle.Route.Stations)
				// log.Println("paricle: ",i,"Iteration: ",t)
				// log.Println("Position : ",particle.Position)
				// log.Println(particle.Velocity)
				// log.Println("Cost",particle.Cost)
				// log.Println("-----------------------------------")
			
		
			
		// log.Println("Iteration ",t," Best Cost = ",swarm.GlobalBest.Cost)
		
		}
	}
	// panic(0)
}

func (swarms *Swarms) GetVehiclesRouting() (vehiclesRouting []VehicleRouting) {
	for _, swarm := range *swarms {
		route := swarm.Route

		vehiclesRouting = append(vehiclesRouting, route.GetVehicleRouting())

	}
	return
}
