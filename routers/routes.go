package routers

import (
	c "../controllers"
)

var routes = Routes{
	Route{
		"POST", "/api/pso", false, c.PostPSO,
	},
}
