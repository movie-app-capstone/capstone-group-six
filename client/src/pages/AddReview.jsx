<<<<<<< HEAD
import { GENRE_TYPE } from '../../../utils/constants';
import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import React, { useState} from "react";

export const action =
    (queryClient) =>
        async ({ request }) => {
            const formData = await request.formData();
            let data = Object.fromEntries(formData);

            if (!data.hasOwnProperty('spoilers')) {
                data.spoilers = false;
            } else {
                data.spoilers = data.spoilers === "true";
            }

            try {
                await customFetch.post('/reviews', data);
                queryClient.invalidateQueries(['reviews']);
                toast.success('Review added successfully ');
                return redirect('all-reviews');
            } catch (error) {
                toast.error(error?.response?.data?.msg);
                return error;
            }
        };
=======
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
>>>>>>> origin/main


const AddReview = () => {
<<<<<<< HEAD
    const { user } = useOutletContext();
    const [spoilers, setSpoilers ] = useState(false);
    const [rottenMovie, setRottenMovie ] = useState(false)
=======
  const { id } = useParams();
  const navigate = useNavigate();
  const {data} = useGetMovieIDQuery(id)
>>>>>>> origin/main

    const handleSpoilersCheck = () => setSpoilers(!spoilers);
    const handleRottenMovieCheck = () => setRottenMovie(!rottenMovie);

<<<<<<< HEAD
    return (
        <Wrapper>
            <Form method='post' className='form'>
                <h4 className='form-title'>add review</h4>
                <div className='form-center'>
                    <FormRow type='text' name='movieTitle' />
                    <FormRowSelect
                        labelText='genre'
                        name='genre'
                        list={Object.values(GENRE_TYPE)}
                    />
                    <FormRow type='number' name='rating' />
                    <FormRow type='checkbox' name='spoilers'
                             labelText='Spoilers (optional)' value={'false'}
                             checked={spoilers}
                             onChange={handleSpoilersCheck} />

                    <FormRow type='text' name='review' maxLength={256} />
                    <FormRow type='checkbox' name='rottenMovie'
                                labelText='RottenMovie' value={'false'}
                                checked={rottenMovie}
                                onChange={handleRottenMovieCheck} />

                    {user && <FormRow
                        type='text'
                        labelText='Movie Viewed'
                        name='reviewLocation'
                        defaultValue={user.location}
                    />}

                    <SubmitBtn formBtn />
                </div>
            </Form>
        </Wrapper>
    );
=======
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
>>>>>>> origin/main
};
export default AddReview;