import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { setActiveBook, setBookRating } from '../redux/actions/items';
import Ratings from '../components/Ratings';
import { categories } from '../data/categories';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  ratings: {
    textAlign: 'center',
  },
}));

const BookDetails = ({ setActiveBook, activeBook, setBookRating }) => {
  const { id } = useParams();
  const classes = useStyles();

  useEffect(() => {
    setActiveBook(id);
  });

  useEffect(() => {
    setActiveBook(id);
  }, [id]);

  if (!activeBook) return <p>Loading ...</p>;

  const { author, country, imageLink, language, title, rating, categoryId } = activeBook;

  return (
    <>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              {title}
            </Typography>

            <CardMedia className={classes.cardMedia} image={`/${imageLink}`} title={title} />
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc. Make it short and
              sweet, but not too short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Category: {categories[categoryId].name}
              <br />
              Country: {country}
              <br />
              Language: {language}
            </Typography>
            <Typography variant="h5" align="center" color="textPrimary" paragraph>
              Author: {author}
            </Typography>
            <div className={classes.ratings}>
              <Ratings value={rating} id={id} setValue={setBookRating} />
            </div>

            <Typography variant="h6" align="center" color="textPrimary" paragraph />
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button to="/" component={NavLink} variant="contained" color="primary">
                    Books Page
                  </Button>
                </Grid>
                <Grid item>
                  <Button to="/shelves" component={NavLink} variant="outlined" color="primary">
                    Shelves Page
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

const mapStateToProps = (state) => ({
  activeBook: state.books.activeBook,
});

export default connect(mapStateToProps, { setActiveBook, setBookRating })(BookDetails);
