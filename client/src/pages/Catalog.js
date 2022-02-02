import { CatalogCard } from '../components/CatalogCard'
import { Container, Grid, Backdrop, FormGroup, CircularProgress } from '@mui/material'
import { useState, useEffect, useCallback } from 'react'
import { getProducts } from '../services/api'
import { Search } from '../components/Search'
import { InfoFilter } from '../components/InfoFilter'
import { grey } from '@mui/material/colors'
import debounce from 'lodash.debounce'

export const Catalog = () => {

  const [productList, setProductList] = useState([])
  const [searchString, setSearchString] = useState('');
  const [selectItems, setSelectItems] = useState([]);
  const [isProductsFetched, setIsProductsFetched] = useState(false);

  const getSelectItems = (data) => {

    let selectItemsArr = []
    console.log(selectItems)
    // 42 итерации на 8 товаров с 3 свойствами
    for (const dataItem of data) {
      for (const infoItem of dataItem.info) {
        if (!selectItemsArr.length) {
          selectItemsArr = [{ name: infoItem.label, values: [{ name: infoItem.value, checked: false }] }]
          break
        }
        for (let i = 0; i < selectItemsArr.length; i++) {
          if (selectItemsArr[i].name === infoItem.label) {
            selectItemsArr[i].values.findIndex((curr) => curr.name === infoItem.value) === -1 && selectItemsArr[i].values.push({ name: infoItem.value, checked: false })
            break
          } else if (i === selectItemsArr.length - 1) {
            selectItemsArr = [...selectItemsArr, {
              name: infoItem.label,
              values: [{ name: infoItem.value, checked: false }]
            }]
          }
        }
      }
    }
    console.log(selectItemsArr)
    setSelectItems(selectItemsArr)
  }

  useEffect(() => {
    setIsProductsFetched(false)
    const params = {
      name: searchString
    }
    getProducts(params)
      .then((res) => {
        setProductList(res)
        getSelectItems(res)
      })
      .finally(() => setIsProductsFetched(true))
  }, [searchString])

  const handleSearchChange = (e) => {
    const value = e.target.value
    console.log('changer call => ', value);
    setSearchString(value)
  }

  const handleSelectChange = (e) => {
    const chekboxValue = e.target.value
    const checkboxParent = e.target.dataset.parent
    // const checkboxState = filterMap.find((item) => item.name === checkboxParent).values.find((value) => value.name === chekboxValue)
    // checkboxState.checked ? checkboxState.checked = false : checkboxState.checked = true
    setSelectItems((prevMap) => {
      const checkboxState = prevMap.find((item) => item.name === checkboxParent).values.find((value) => value.name === chekboxValue)
      checkboxState.checked ? checkboxState.checked = false : checkboxState.checked = true
      return prevMap
    })
    console.log(selectItems);
  }

  const debouncedChangeHandler = useCallback(debounce(handleSearchChange, 600), []);

  return (
    <Container maxWidth='none'>
      <Grid container spacing={3}>
        <Grid item xs={10}>
          {isProductsFetched ?
            <Grid container mt={3} spacing={3}>
              {productList.map((product) => (
                <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>
                  <CatalogCard product={product} />
                </Grid>
              ))}
            </Grid>
            :
            <Backdrop
              sx={{ color: 'white', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open
            >
              <CircularProgress disableShrink color="inherit" />
            </Backdrop>
          }
        </Grid>
        <Grid component='aside' item xs={2}>
          <FormGroup sx={{
            mt: 3,
            bgcolor: grey[100],
            p: 1,
            pb: 3,
          }}>
            <Search handleChange={debouncedChangeHandler} />
            <InfoFilter handleChange={handleSelectChange} selectItems={selectItems} />
          </FormGroup>
        </Grid>
      </Grid>
    </Container >
  )
}