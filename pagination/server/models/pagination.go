package models

type Pagination struct {
	TotalPages   int `json:"totalPages"`
	CurrentPage  int `json:"currentPage"`
	NextPage     int `json:"nextPage"`
	PreviousPage int `json:"previousPage"`
}
