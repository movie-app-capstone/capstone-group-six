import { SiThemoviedatabase} from 'react-icons/si';
import { FiUsers } from "react-icons/fi";

import { useLoaderData, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/StatsContainer';
import { toast } from 'react-toastify';
import { StatItem } from '../components';

export const loader = async () => {
    try {
        const response = await customFetch.get('/users/admin/app-stats');
        return response.data;
    } catch (error) {
        toast.error('You are not authorized to view this page');
        return redirect('/dashboard');
    }
};

const Admin = () => {
    const { users, reviews } = useLoaderData();
    return (
        <Wrapper>
            <StatItem
                title='current users'
                count={users}
                color='#e9b949'
                bcg='#fcefc7'
                icon={<FiUsers />}
            />
            <StatItem
                title='total reviews'
                count={reviews}
                color='#647acb'
                bcg='#e0e8f9'
                icon={<SiThemoviedatabase />}
            />
        </Wrapper>
    );
};
export default Admin;
