import { useNavigate, useParams } from "react-router-dom";
import {useGetMovieIDQuery} from "/features/api/apiSlice";
import {
  CardContent,
  Card,
  Typography,
  Grid,
  Link,
  CardActions,
  Button,
} from "";
import { apiSlice } from "../../features/features/api/apiSlice";

const AddReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {data} = useGetMovieIDQuery(id)

  

  const handleBorrow = () => {
    console.log("borrow button click!");
  };

  const { movie } = data;
  console.log(movie);
  return (
    <>
      <Link
        component="button"
        onClick={() => navigate("/")}
        sx={{ marginBottom: 2, marginY: 1 }}
        variant="body1"
        underline="none"
      >
        Back
      </Link>
      <Card key={movie.id} variant="outline">
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="div" gutterBottom>
                {movie.original_title}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {movie.media_type}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {movie.overview}
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <img
                src={movie.poster_path}
                alt={movie.original_title}
                style={{ height: "auto" }}
              />
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleBorrow}
                >
                  Borrow
                </Button>
              </CardActions>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};


export default AddReview;