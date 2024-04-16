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

const AddReview = () => {
    const { user } = useOutletContext();
    const [spoilers, setSpoilers ] = useState(false);
    const [rottenMovie, setRottenMovie ] = useState(false)

    const handleSpoilersCheck = () => setSpoilers(!spoilers);
    const handleRottenMovieCheck = () => setRottenMovie(!rottenMovie);

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
};
export default AddReview;