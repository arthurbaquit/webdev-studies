package helpers

import (
	"math"

	"github.com/arthurbaquit/pagination/initializers"
	"github.com/arthurbaquit/pagination/models"
)

func GetPaginationData(page int) (models.Pagination, int) {

	var pagination models.Pagination
	var totalRows int64
	initializers.DB.Model(&models.Fullname{}).Count(&totalRows)
	totalPages := int(math.Ceil(float64(totalRows) / 15))
	offset := (page - 1) * 15

	pagination.TotalPages = totalPages
	pagination.CurrentPage = page
	pagination.NextPage = page + 1
	pagination.PreviousPage = page - 1

	return pagination, offset
}
