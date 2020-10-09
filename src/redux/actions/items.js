import {
  ADD_BOOK_TO_SHELF,
  CREATE_SHELF,
  SET_ACTIVE_BOOK,
  SET_ALL_BOOKS,
  SET_ALL_STORE,
  SET_BOOK_RATING,
  SET_SHELF_RATING,
} from '../constants';
import { books } from '../../data/books';

export const initStore = () => {
  return (dispatch) => {
    const storeFromStorage = localStorage.getItem('store') ? JSON.parse(localStorage.getItem('store')) : false;

    if (!storeFromStorage) {
      return dispatch(setAllBooks());
    }

    dispatch(setStore(storeFromStorage));
  };
};

export const setAllBooks = () => ({
  type: SET_ALL_BOOKS,
  books,
});

export const setStore = (store) => ({
  type: SET_ALL_STORE,
  store,
});

export const saveStoreOnAppDown = () => {
  return (dispatch, getStore) => {
    const { books } = getStore();

    localStorage.setItem('store', JSON.stringify(books));
  };
};

export const createShelf = (shelf) => ({
  type: CREATE_SHELF,
  shelf,
});

export const addBookToShelf = (book, shelfId) => ({
  type: ADD_BOOK_TO_SHELF,
  book,
  id: shelfId,
});

export const setActiveBook = (id) => ({
  type: SET_ACTIVE_BOOK,
  id,
});

export const setBookRating = (id, value) => ({
  type: SET_BOOK_RATING,
  id,
  value,
});

export const setShelfRating = (id, value) => ({
  type: SET_SHELF_RATING,
  id,
  value,
});
