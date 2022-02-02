import { FormControl, Typography, TextField, MenuItem, Select, InputLabel, Checkbox, ListItemText, OutlinedInput, Box, List, ListItem, FormGroup, FormControlLabel } from '@mui/material';
import { useState, useEffect, memo } from 'react';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

export const InfoFilter = ({ handleChange, selectItems }) => {

  const [filterMap, setFilterMap] = useState([]);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setFilterMap(selectItems)
    console.log(selectItems);
  })

  // const handleSelectChange = (e) => {
  //   const value = e.target.value
  //   setSelectedValues([])
  //   setSelectedName(value)

  //   const selectObj = selectItems.find((select) => select.name === value).values
  //   setSelectValues(selectObj)
  // };

  const handleValueChange = (e) => {
    console.log(filterMap);
    const chekboxValue = e.target.value
    const checkboxParent = e.target.dataset.parent
    // const checkboxState = filterMap.find((item) => item.name === checkboxParent).values.find((value) => value.name === chekboxValue)
    // checkboxState.checked ? checkboxState.checked = false : checkboxState.checked = true
    setFilterMap((prevMap) => {
      const checkboxState = prevMap.find((item) => item.name === checkboxParent).values.find((value) => value.name === chekboxValue)
      checkboxState.checked ? checkboxState.checked = false : checkboxState.checked = true
      return prevMap
    })
  };
  console.log('render');
  return (
    <Box>
      {/* <FormControl sx={{ mt: 3, width: '50%' }}>
        <InputLabel id="info-select-label">Параметр</InputLabel>
        <Select
          labelId="info-select-label"
          value={selectedName}
          label="Параметр"
          onChange={handleSelectChange}
        >
          {selectItems.map((item) => <MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl sx={{ mt: 3, width: '50%' }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedValues}
          onChange={handleValueChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {selectValues.map((value) => (
            <MenuItem key={value} value={value}>
              <Checkbox checked={selectedValues.indexOf(value) > -1} />
              <ListItemText primary={value} />
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}
      <Box>
        <List>
          {selectItems.map((item) =>
            <ListItem key={item.name} sx={{
              alignItems: 'flex-start',
              flexDirection: 'column'
            }}>
              <ListItemText>{item.name}</ListItemText>
              <FormGroup>
                {item.values.map((value) => (
                  <FormControlLabel
                    key={value.name}
                    control={<Checkbox inputProps={{ 'data-parent': item.name }} value={value.name} sx={{ p: '5px' }} />}
                    onChange={handleChange}
                    label={
                      <Typography component='span'
                        sx={{ fontWeight: 'fontWeightLight' }}>
                        {value.name}
                      </Typography>}
                  />
                ))}
              </FormGroup>
            </ListItem>
          )}
        </List>
      </Box>
    </Box>
  )

}
