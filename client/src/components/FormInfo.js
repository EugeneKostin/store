import { TransitionGroup } from 'react-transition-group'
import { Box, Collapse, IconButton, Typography } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import { FormInfoItem } from './FormInfoItem'
import { useState, useEffect } from 'react'
import { filterList } from '../filterList'

export const FormInfo = ({ setFormData }) => {

  const [infoList, setInfoList] = useState(filterList)

  useEffect(() => {
    setFormData((prevState) => ({ ...prevState, 'info': infoList }))
  }, [infoList])

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...infoList];
    list[index][name] = value;
    setInfoList(list);
  };

  const handleAddField = () => {
    setInfoList([...infoList, { label: '', value: '' }]);
  };
  const handleDeleteField = (index) => {
    const list = [...infoList];
    list.splice(index, 1);
    setInfoList(list);
  };

  return (
    <Box>
      <Typography
        variant="body1"
        mt={5}
      >
        Параметры
      </Typography>
      <TransitionGroup>
        {infoList.map((infoItem, index) => (
          <Collapse key={index}>
            <FormInfoItem infoItem={infoItem} handleChange={(e) => handleChange(e, index)} handleDeleteField={() => handleDeleteField(index)} />
          </Collapse>
        ))}
      </TransitionGroup>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 2,
        }}
      >
        <IconButton
          title="Добавить"
          onClick={handleAddField}
          color="primary"
          size="large"
          disabled
        >
          <AddCircleOutlineOutlinedIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  )
}
