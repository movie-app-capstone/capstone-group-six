import { useNavigate, useParams } from "react-router-dom";
import {useGetMovieIDQuery} from "/features/api/apiSlice";
import LikeButton from '.src/pages/LikeButton';
import {
  CardContent,
  Card,
  Typography,
  Grid,
  Link,
  CardActions,
} from "";


const AddReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {data} = useGetMovieIDQuery(id)

  

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
              <div>
                <LikeButton />
              </div>
              </CardActions>
            </Grid>
            <Grid item xs={12}></Grid>
            <Typography variant="subtitle1" gutterBottom>
               <p>This capstone project uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.</p>
              </Typography>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};


export default AddReview;