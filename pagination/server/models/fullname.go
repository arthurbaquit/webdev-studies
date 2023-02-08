package models

import "gorm.io/gorm"

type Fullname struct {
	gorm.Model
	FirstName string
	LastName  string
}
