import React, { useState } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Book from '../components/Book';
import AddBookInShelf from '../components/AddBookInShelf';

const Books = ({ books }) => {
  const [addedBook, setAddedBook] = useState(false);

  return (
    <>
      <Container maxWidth="lg">
        <p>PAGE BOOKS</p>
        <Grid container>
          {books.map((book) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
              <Book book={book} onAdd={setAddedBook} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <AddBookInShelf book={addedBook} open={addedBook !== false} onClose={() => setAddedBook(false)} />
    </>
  );
};

const mapStateToProps = (state) => ({
  books: state.books.all,
});

export default connect(mapStateToProps)(React.memo(Books));
