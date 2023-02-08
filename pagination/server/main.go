package main

import (
	"log"

	"github.com/arthurbaquit/pagination/controllers"
	"github.com/arthurbaquit/pagination/initializers"
	"github.com/gin-gonic/gin"
)

func init() {

	initializers.LoadEnvVariables()
	initializers.ConnectDatabase()
	initializers.MigrateDatabase()
	initializers.CreatePeople()

}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Headers", "*")
		c.Header("Access-Control-Allow-Methods", "GET,POST,PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	}
}
func main() {
	app := gin.Default()
	app.Use(CORSMiddleware())

	app.GET("/", func(c *gin.Context) {
		c.Redirect(301, "fullnames/1")
	})
	app.GET("/fullnames/:page", controllers.FullnameIndex)
	log.Fatal(app.Run(":80"))
}
