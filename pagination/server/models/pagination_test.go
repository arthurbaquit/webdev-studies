package models_test

import (
	"testing"

	"github.com/arthurbaquit/pagination/models"
	"github.com/stretchr/testify/require"
)

func TestPagination(t *testing.T) {
	var pagination models.Pagination
	pagination.TotalPages = 1
	pagination.CurrentPage = 1
	pagination.NextPage = 2
	pagination.PreviousPage = 0
	require.Equal(t, pagination.TotalPages, 1)
	require.Equal(t, pagination.CurrentPage, 1)
	require.Equal(t, pagination.NextPage, 2)
	require.Equal(t, pagination.PreviousPage, 0)
}
