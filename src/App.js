import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import { initStore, saveStoreOnAppDown } from './redux/actions/items';
import MainContainer from './MainContainer';
import CustomThemeProvider from './themes/CustomThemeProvider';

const App = (props) => {
  const { loading, initStore, saveStoreOnAppDown } = props;

  useEffect(() => {
    initStore();
    window.addEventListener('beforeunload', saveStoreOnAppDown);

    return () => window.removeEventListener('beforeunload', saveStoreOnAppDown);
  });

  if (loading) return <CircularProgress color="secondary" />;

  return (
    <CustomThemeProvider>
      <CssBaseline />
      <MainContainer />
    </CustomThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  loading: state.books.loading,
});

export default connect(mapStateToProps, { initStore, saveStoreOnAppDown })(App);
