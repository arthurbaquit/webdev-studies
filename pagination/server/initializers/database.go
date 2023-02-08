package initializers

import (
	"log"
	"os"

	"github.com/arthurbaquit/pagination/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func MigrateDatabase() {
	// Migrate the schema
	DB.AutoMigrate(&models.Fullname{})
}

func ConnectDatabase() {
	var err error
	DB, err = gorm.Open(postgres.Open(os.Getenv("DB")), &gorm.Config{})
	if err != nil {
		log.Fatal("error connecting to the DB ", err)
	}
}
