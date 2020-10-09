import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';
import { blue } from '@material-ui/core/colors';
import { addBookToShelf } from '../redux/actions/items';

const AddBookInShelf = (props) => {
  const classes = useStyles();
  const { onClose, open, book, shelves, addBookToShelf } = props;

  const { id, title } = book;

  const onAddBook = (id) => {
    addBookToShelf(book, id);

    onClose();
  };

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Select shelf to add book '{title}'</DialogTitle>
      <List>
        {shelves.length === 0 && <p>First you need to create one shell with specific category</p>}
        {shelves.map((shelf) => (
          <ListItem
            disabled={shelf.categoryId !== book.categoryId}
            autoFocus
            button
            onClick={() => onAddBook(shelf.id)}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={shelf.name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  shelves: state.books.shelves,
});

export default connect(mapStateToProps, { addBookToShelf })(AddBookInShelf);
