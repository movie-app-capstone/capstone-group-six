import { Outlet } from 'react-router-dom';
import Wrapper from "../assets/wrappers/Dashboard.js";
import SmallSidebar from "../components/SmallSidebar.jsx";
import {BigSidebar, NavBar} from "../components/index.js";
import {useContext, createContext, useState} from "react";

const DashBoardContext = createContext();


const DashboardLayout = (isDarkThemEnabled) => {
    const user = {name:'joe'}
    const [showSidebar,setShowSidebar] = useState(false);
    const [isDarkTheme,setIsDarkTheme] = useState(false);

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        document.body.classList.toggle('dark-theme', newDarkTheme);
        localStorage.setItem('darkTheme', newDarkTheme);
     };
    const toggleSidebar= () => {
        setShowSidebar(!showSidebar);
    };
    const logoutUser = async  () => {
        console.log('logout');
    };
    return (
        <DashBoardContext.Provider
            value={ {
            user,
            showSidebar,
            toggleSidebar,
            isDarkTheme,
            toggleDarkTheme,
            logoutUser}} >
            <Wrapper>
                <main className={'dashboard'}>
                    <SmallSidebar />
                    <BigSidebar />
                    <div>
                        <NavBar />
                        <div className={'dashboard-page'}>
                            <Outlet />
                        </div>
                    </div>
                </main>
            </Wrapper>
        </DashBoardContext.Provider>
    );
};



export const useDashboardContext = () => useContext(DashBoardContext);
export default DashboardLayout;
