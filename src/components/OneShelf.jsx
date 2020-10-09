import React, { Component } from 'react';
import { connect } from 'react-redux';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Book from './Book';
import Ratings from './Ratings';
import { setShelfRating } from '../redux/actions/items';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  accordion: {
    margin: '1.5rem 0',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    display: 'inline-flex',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  ratings: {
    display: 'inline-block',
  },
}));

function OneShelf({ shelf, setShelfRating }) {
  const classes = useStyles();
  const { books, name, rating, id } = shelf;

  return (
    <Accordion key={id} className={classes.accordion}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <div className={classes.content}>
          <Typography className={classes.heading}>{name}</Typography>
          <Typography className={classes.heading}>Category {name}</Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        {books.length === 0 && <p>This shelf is empty</p>}
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
            <Book book={book} />
          </Grid>
        ))}
      </AccordionDetails>
      <div>
        <Ratings value={rating} id={id} setValue={setShelfRating} />
      </div>
    </Accordion>
  );
}

export default connect(null, { setShelfRating })(React.memo(OneShelf));
