package models_test

import (
	"testing"

	"github.com/arthurbaquit/pagination/models"
	"github.com/stretchr/testify/require"
)

func TestFullname(t *testing.T) {
	var fullname models.Fullname
	fullname.ID = uint(1)
	fullname.FirstName = "Arthur"
	fullname.LastName = "Baquit"
	require.Equal(t, fullname.ID, uint(1))
	require.Equal(t, fullname.FirstName, "Arthur")
	require.Equal(t, fullname.LastName, "Baquit")
}
