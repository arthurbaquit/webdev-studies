package controllers

import (
	"fmt"
	"strconv"

	"github.com/arthurbaquit/pagination/helpers"
	"github.com/arthurbaquit/pagination/initializers"
	"github.com/arthurbaquit/pagination/models"
	"github.com/gin-gonic/gin"
)

func FullnameIndex(c *gin.Context) {
	pageString := c.Param("page")
	pageInt, err := strconv.Atoi(pageString)
	fmt.Println(pageInt)
	if err != nil {
		c.JSON(400, gin.H{"error": "Page must be a number"})
		return
	}
	if pageInt < 1 {
		c.JSON(400, gin.H{"error": "Invalid page number"})
		return
	}
	pagination, offset := helpers.GetPaginationData(pageInt)
	var fullnames []models.Fullname
	initializers.DB.Limit(15).Offset(offset).Find(&fullnames)
	c.JSON(200, gin.H{"fullnames": fullnames, "pagination": pagination})
}
