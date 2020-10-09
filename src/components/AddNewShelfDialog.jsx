import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddBoxIcon from '@material-ui/icons/AddBox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { v4 as uuid } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import { categories } from '../data/categories';
import { createShelf } from '../redux/actions/items';

const useStyles = makeStyles({
  card: {
    minWidth: 380,
  },
  text: {
    marginBottom: '2rem',
  },
});

const AddNewShelfDialog = ({ createShelf, className }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [category, setCategory] = useState(categories[1].id);

  const classes = useStyles();

  const save = () => {
    if (name) {
      const newShelf = {
        id: uuid(),
        name,
        categoryId: category,
        books: [],
        rating: 0,
      };

      createShelf(newShelf);
    }

    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={className}>
      <Button variant="contained" color="primary" endIcon={<AddBoxIcon />} onClick={() => setOpen(true)}>
        Add new shelf
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create new shelf</DialogTitle>
        <DialogContent className={classes.card}>
          <FormControl fullWidth className={classes.text}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Shelf name"
              type="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
          </FormControl>
          <br />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {Object.keys(categories).map((keyName) => (
                <MenuItem value={categories[keyName].id} key={categories[keyName].id}>
                  {categories[keyName].name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={save} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default connect(null, { createShelf })(React.memo(AddNewShelfDialog));
