import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { categories } from '../data/categories';

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
    marginBottom: '2rem',
  },
});

const Book = ({ book, onAdd }) => {
  const { title, imageLink, disabled, id, categoryId } = book;
  const history = useHistory();

  const classes = useStyles();
  const goTo = () => history.push(`/book/${id}`);

  const renderAddButton = () =>
    onAdd ? (
      <Button disabled={disabled} size="small" color="primary" onClick={() => onAdd(book)}>
        {disabled ? 'Added' : 'Add to shelf'}
      </Button>
    ) : null;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={`/${imageLink}`}
          title="Contemplative Reptile"
          onClick={goTo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Category: {categories[categoryId].name}
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={goTo}>
          Watch
        </Button>
        {renderAddButton()}
      </CardActions>
    </Card>
  );
};

export default React.memo(Book);
