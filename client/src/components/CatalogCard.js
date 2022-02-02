import { useState } from "react";
import { Card, CardHeader, CardContent, CardActions, Collapse, IconButton, Typography, List, ListItem } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

export const CatalogCard = ({ product }) => {

  const [expanded, setExpanded] = useState(false);

  return (
    <Card sx={{ maxWidth: 345 }} elevation={3}>
      <CardHeader sx={{ height: 64, overflow: "hidden", alignItems: 'flex-start' }}
        title={product.name}
      />
      <CardContent>
        <Typography variant='body2' color="text.secondary" sx={{ height: 60, overflow: "hidden" }}>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <List>
            {product.info.map((item) => (
              <ListItem key={item.label}>
                <Typography component="span">{item.label}:</Typography>
                <Typography ml={1} component="span" variant='body2' color='text.secondary'>{item.value}</Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Collapse>
    </Card >
  )
}

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));