import {
  ADD_BOOK_TO_SHELF,
  CREATE_SHELF,
  SET_ACTIVE_BOOK,
  SET_ALL_BOOKS,
  SET_ALL_STORE,
  SET_BOOK_RATING,
  SET_SHELF_RATING,
} from '../constants';

const initialState = {
  all: [],
  loading: true,
  activeBook: false,
  shelves: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_BOOKS:
      return {
        ...state,
        all: action.books,
        loading: false,
      };

    case SET_ALL_STORE:
      return {
        ...action.store,
        activeBook: false,
        loading: false,
      };

    case SET_ACTIVE_BOOK:
      return {
        ...state,
        activeBook: state.all.find((book) => book.id === Number(action.id)),
      };

    case CREATE_SHELF:
      return {
        ...state,
        shelves: [...state.shelves, action.shelf],
      };

    case ADD_BOOK_TO_SHELF:
      return {
        ...state,
        shelves: state.shelves.map((one) =>
          one.id === action.id ? { ...one, books: [...one.books, action.book] } : one
        ),
        all: state.all.map((book) => (book.id === action.book.id ? { ...book, disabled: true } : book)),
      };

    case SET_BOOK_RATING:
      return {
        ...state,
        all: state.all.map((book) => (book.id === Number(action.id) ? { ...book, rating: action.value } : book)),
        activeBook:
          state.activeBook.id === Number(action.id) ? { ...state.activeBook, rating: action.value } : state.activeBook,
      };

    case SET_SHELF_RATING:
      console.log('shelf', action);

      return {
        ...state,
        shelves: state.shelves.map((shelf) => (shelf.id === action.id ? { ...shelf, rating: action.value } : shelf)),
      };

    default:
      return state;
  }
};
