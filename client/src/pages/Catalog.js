import { useState, useEffect, useCallback } from 'react'
import debounce from 'lodash.debounce'
import { Container, Grid } from '@mui/material'

import { Search } from '../components/Search'
import { InfoFilter } from '../components/InfoFilter'
import { Backdrop } from '../components/Backdrop'
import { CatalogCard } from '../components/CatalogCard'
import { FilterLayout } from '../components/FilterLayout'
import { getProducts } from '../services/api'
import { filterList } from '../filterList'

export const Catalog = () => {

  const [productList, setProductList] = useState([])
  const [searchString, setSearchString] = useState('')
  const [filterController, setFilterController] = useState(filterList)
  const [isProductsFetched, setIsProductsFetched] = useState(false)
  const [isFilterSubmited, setIsFilterSubmited] = useState(false)

  useEffect(() => {
    setIsProductsFetched(false)
    const params = {
      name: searchString,
      info: filterController.filter(item => (item.value !== ""))
    }
    getProducts(params)
      .then((res) => {
        setProductList(res.data)
      })
      .finally(() => {
        setIsProductsFetched(true)
        setIsFilterSubmited(false)
      })
  }, [searchString, isFilterSubmited])

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchString(value)
  }

  const handleFilterChange = (e) => {
    const value = e.target.value
    const label = e.target.dataset.label
    setFilterController((prev) => prev.map((item) => {
      if (item.label === label) {
        item.value = value
      }
      return item
    }))
  }

  const handleFilterSubmit = (e) => {
    e.preventDefault()
    setIsFilterSubmited(true)
  }

  const debouncedChangeHandler = useCallback(debounce(handleSearchChange, 600), [])

  return (
    <Container maxWidth='none'>
      <Grid container py={3} spacing={3}>
        <Grid item xs={12} md={10}>
          {isProductsFetched ?
            <Grid container mt={3} spacing={3}>
              {productList.map((product) => (
                <Grid key={product._id} item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <CatalogCard product={product} />
                </Grid>
              ))}
            </Grid>
            :
            <Backdrop />
          }
        </Grid>
        <FilterLayout>
          <Search handleChange={debouncedChangeHandler} />
          <InfoFilter handleChange={handleFilterChange} handleSubmit={handleFilterSubmit} filterItems={filterController} />
        </FilterLayout>
      </Grid>
    </Container >
  )
}