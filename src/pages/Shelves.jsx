import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AddNewShelfDialog from '../components/AddNewShelfDialog';
import AllShelvesView from '../components/AllShelvesView';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
    width: '100%',
  },
}));

const Shelves = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg">
        <AllShelvesView />
        <AddNewShelfDialog open={openAdd} setOpen={setOpenAdd} className={classes.button} />
      </Container>
    </>
  );
};

export default Shelves;
