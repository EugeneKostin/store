import { TransitionGroup } from 'react-transition-group'
import { Box, Collapse, IconButton, Typography } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import { FormInfoItem } from './FormInfoItem'
import { useState, useEffect } from 'react'

export const FormInfo = ({ setFormData }) => {

  const [infoList, setInfoList] = useState([{ label: '', value: '' }])

  useEffect(() => {
    setFormData((prevState) => ({ ...prevState, 'info': infoList }))
  }, [infoList])

  const handleChange = (e, index) => {
    console.log(infoList);
    const { name, value } = e.target;
    const list = [...infoList];
    list[index][name] = value;
    setInfoList(list);
  };

  const handleAddField = () => {
    console.log(infoList);
    setInfoList([...infoList, { label: '', value: '' }]);
  };
  const handleDeleteField = (index) => {
    const list = [...infoList];
    console.log(index, list);
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
            <FormInfoItem handleChange={(e) => handleChange(e, index)} handleDeleteField={() => handleDeleteField(index)} />
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
        >
          <AddCircleOutlineOutlinedIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  )
}
