import { GENRE_TYPE, ROTTEN_TYPE, SPOILER_TYPE } from '../../../utils/constants';
import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import React from "react";

export const action =
    (queryClient) =>
        async ({ request }) => {
            const formData = await request.formData();
            let data = Object.fromEntries(formData);

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
                    <FormRowSelect
                        labelText='spoilers'
                        name='spoilers'
                        list={Object.values(SPOILER_TYPE)}
                    />

                    <FormRow type='text' name='review' maxLength={256} />
                    <FormRowSelect
                        labelText='Impressions'
                        name='rottenMovie'
                        list={Object.values(ROTTEN_TYPE)}
                    />

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