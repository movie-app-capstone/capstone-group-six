import { MdLocalMovies } from "react-icons/md";
import { CgList } from "react-icons/cg";
import { FcRating } from "react-icons/fc";

import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ReviewsContainer';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import ReviewInfo from "./ReviewInfo.js";

day.extend(advancedFormat);

const MovieReviews = ({
                          _id,
                          movieTitle,
                          rating,
                          genre,
                          createdAt,
                          rottenMovie,
                      }) => {
  const date = day(createdAt).format('MMM Do, YYYY');
  return (
      <Wrapper>
        <header>
          <div className='main-icon'>{movieTitle}</div>
          <div className='info'>
            <h5>{genre}</h5>
            <p>{rating}</p>
          </div>
        </header>
        <div className='content'>
          <div className='content-center'>
            <ReviewInfo icon={<MdLocalMovies />} text={movieTitle} />
            <ReviewInfo icon={<CgList />} text={genre} />
            <ReviewInfo icon={<FcRating />} text={rating} />
            <div className={`status ${rottenMovie}`}>{rottenMovie}</div>
          </div>
          <footer className='actions'>
            <Link to={`../edit-review/${_id}`} className='btn edit-btn'>
              Edit
            </Link>
            <Form method='post' action={`../delete-review/${_id}`}>
              <button type='submit' className='btn delete-btn'>
                Delete
              </button>
            </Form>
          </footer>
        </div>
      </Wrapper>
  );
};


export default MovieReviews;

