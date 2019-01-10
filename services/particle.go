package services

import(
	"log"
	"math"
	"math/rand"
	"time"
)

func (particle *Particle) make (dimensions int,route Route){
	particle.Dimension = make([]int32,dimensions,dimensions)
	particle.Position = make([]float64,dimensions,dimensions)
	particle.Velocity = make([]float64,dimensions,dimensions)
	particle.Best.Cost = math.MaxFloat64
	particle.Best.Dimension = make([]int32,dimensions,dimensions)
	particle.Best.Position = make([]float64,dimensions,dimensions)
	particle.Route = route

	particle.encode()

}

func (particle *Particle) encode (){

	route := &particle.Route
	clients := route.Clients
	nDimensions := int32(len(clients))
	for i,client := range clients{
		dimension := client.ID
		particle.Dimension[i] = dimension
		particle.Position[i] = particle.getPositionValue(nDimensions,dimension)
		r := rand.New(rand.NewSource(time.Now().UnixNano()))
		particle.Velocity[i] = r.Float64()
		
		particle.Best.Dimension[i] = dimension
		particle.Best.Position[i] = particle.Position[i]
	}
	

	particle.updateCost()

}

func (particle *Particle) decode () {

	route := &particle.Route

	route.decode(particle.Dimension,particle.Position)
	
}

func (particle *Particle) getPositionValue (nDimensions int32, dimension int32) (positionValue float64){
	var (
		xMin float64; xMax float64; n float64; y float64
	)
	xMin = 1
	xMax = 10
	n = float64(nDimensions)
	y = float64(dimension)
	r := rand.New(rand.NewSource(time.Now().UnixNano())).Float64()

	positionValue = xMin + ((xMax-xMin) / n*(y-1+r))
	return

}


func (particle *Particle) update(globalBest *Measurer){
	// log.Println("update: ")

	for dimension := 0; dimension < len(particle.Velocity); dimension++ {
		particle.updateVelocity(dimension,globalBest)
		particle.updatePosition(dimension)	
		
	}
	particle.Route.decode(particle.Dimension,particle.Position)
	particle.updateCost()
	validate := particle.Route.Validate()

	log.Println("validate: ",validate)

	if(validate == true){
		particle.updateBest(globalBest)
	}
	
}

func (particle *Particle) updateVelocity(dimension int, globalBest *Measurer){

	//log.Println("updateVelocity: ",dimension)
	// log.Println("pariticle.Velocity = ",particle.Velocity)
	// log.Println(particle.Velocity[dimension])
	// log.Println("particle.Position = ",particle.Position)
	// log.Println(particle.Position[dimension])
	// log.Println("particle.Best.Position= ",particle.Best.Position)
	// log.Println(particle.Best.Position[dimension])
	// log.Println("globalBest= ",globalBest)

	r := rand.New(rand.NewSource(time.Now().UnixNano()))
	r1 := r.Float64()
	r = rand.New(rand.NewSource(time.Now().UnixNano()))
	r2 := r.Float64()
	//log.Println("particle.Velocity[dimension]: ",particle.Velocity[dimension])
	particle.Velocity[dimension] = (w * particle.Velocity[dimension]) + (c1 * r1*(particle.Best.Position[dimension] - particle.Position[dimension])) + (c2 * r2 * (globalBest.Position[dimension] - particle.Position[dimension]))

	//log.Println("--particle.Velocity[dimension]:",particle.Velocity[dimension])

	if(particle.Velocity[dimension] == 0) {
		log.Println("updateVelocity: ",dimension)
		// log.Println("pariticle.Velocity = ",particle.Velocity)
		log.Println("pariticle.Velocity = ",particle.Velocity[dimension], "(w * particle.Velocity[dimension])",(w * particle.Velocity[dimension]))
		//log.Println("particle.Position = ",particle.Position)
		log.Println("particle.Position = ",particle.Position[dimension],"(c1 * r1*(particle.Best.Position[dimension] - particle.Position[dimension]))",(c1 * r1*(particle.Best.Position[dimension] - particle.Position[dimension])))
		log.Println("particle.Best.Position= ",particle.Best.Position)
		log.Println(particle.Best.Position[dimension],"(c2 * r2 * (globalBest.Position[dimension] - particle.Position[dimension])",(c2 * r2 * (globalBest.Position[dimension] - particle.Position[dimension])))
		log.Println("globalBest= ",globalBest)

		log.Println("r1,r2",r1,r2)
		panic(0)
	}

}

func (particle *Particle) updatePosition(dimension int){
	// log.Println("dimension: ",dimension)
	// log.Println("particle.Position[dimension]: ",particle.Position[dimension])
	particle.Position[dimension] = particle.Position[dimension] + particle.Velocity[dimension]
	// log.Println("---particle.Position[dimension]: ",particle.Position[dimension])

}

func (particle *Particle) updateCost(){	
	// falta releer la nueva ruta
	route := particle.Route
	//log.Println("route: ",route.Clients.GetID())
	route.loadTT()
	TT := route.TT
	summationOfBW := route.getSummationOfBW()

	// log.Println("TT,BW", TT,summationOfBW)

	particle.Cost = TT  + summationOfBW

}

func (particle *Particle) updateBest(globalBest *Measurer){
	if(particle.Cost < particle.Best.Cost){

		particle.Best.Cost = particle.Cost
		particle.Best.Position = particle.Position

		if(particle.Best.Cost < globalBest.Cost){
			*globalBest = particle.Best
		}

 	}
}