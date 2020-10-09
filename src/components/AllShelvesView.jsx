import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import OneShelf from './OneShelf';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

const AllShelvesView = ({ shelves, setShelfRating }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {shelves.length === 0 && <p>Shelves list i empty. You need to create one</p>}
      {shelves.map((shelf) => (
        <OneShelf shelf={shelf} key={shelf.id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  shelves: state.books.shelves,
});

export default connect(mapStateToProps)(AllShelvesView);
