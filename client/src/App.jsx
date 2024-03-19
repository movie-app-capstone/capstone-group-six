import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    HomeLayout,
    Landing,
    Register,
    Login,
    DashboardLayout,
    Error,
    AddReview,
    AllReviews, Profile, Stats, Admin
} from './pages';

const checkDefaultTheme = () => {
    const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    document.body.classList.toggle('dark-theme', isDarkTheme);
    return isDarkTheme;
};

const isDarkthemeEnabled = checkDefaultTheme();
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
            {
                path: 'register',
                element: <Register />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'dashboard',
                element: <DashboardLayout  isDarkThemEnabled={isDarkthemeEnabled} />,
                children: [
                    {
                        index: true,
                        element: <AddReview />,
                    },
                    {
                        path: 'stats',
                        element: <Stats />,
                    },
                    {
                        path: 'all-reviews',
                        element: <AllReviews />,
                    },
                    {
                        path: 'profile',
                        element: <Profile />,
                    },
                    {
                        path: 'admin',
                        element: <Admin />,
                    },
                ],
            },
        ]
    }
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
