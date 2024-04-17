import { FormRow, FormRowSelect, SubmitBtn } from '.';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form, useSubmit, Link } from 'react-router-dom';
import { REVIEW_SORT_BY, GENRE_TYPE, SPOILER_TYPE } from '../../../utils/constants';
import { useAllReviewsContext } from '../pages/AllReviews';

const SearchContainer = () => {
  const { searchValues } = useAllReviewsContext();
  const { search, genre, spoilers, rating, sort } = searchValues;
  const submit = useSubmit();

  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 2000);
    };
  };

  return (
      <Wrapper>
        <Form className='form'>
          <h5 className='form-title'>search form</h5>
          <div className='form-center'>
            <FormRow
                type='search'
                name='search'
                defaultValue={search}
                onChange={debounce((form) => {
                  submit(form);
                })}
            />
            <FormRow
                type='number'
                name='rating'
                defaultValue={rating}
                onChange={debounce((form) => {
                  submit(form);
                })}
            />
            <FormRowSelect
                labelText='genre'
                name='genre'
                list={['all', ...Object.values(GENRE_TYPE)]}
                defaultValue={genre}
                onChange={(e) => {
                  submit(e.currentTarget.form);
                }}
            />
            <FormRow
                type='date'
                name='reviewDate'
                defaultValue={search}
                onChange={debounce((form) => {
                  submit(form);
                })}
            />
              <FormRowSelect
                  labelText='spoilers'
                  name='spoilers'
                  list={['all', ...Object.values(SPOILER_TYPE)]}
                  defaultValue={spoilers}
                  onChange={debounce((form) => {
                      submit(form);
                  })}
              />
            <FormRowSelect
                name='sort'
                defaultValue={sort}
                list={[...Object.values(REVIEW_SORT_BY)]}
                onChange={(e) => {
                  submit(e.currentTarget.form);
                }}
            />
            <Link to='/dashboard/all-reviews' className='btn form-btn delete-btn'>
              Reset Search Values
            </Link>
          </div>
        </Form>
      </Wrapper>
  );
};

export default SearchContainer;