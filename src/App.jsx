import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Desboard from '../Pages/Desboard';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Admin from '../Pages/Admin';
import CreateEvent from '../Pages/CreateEvent';
import Booking from '../Pages/Booking';
import GetPost from '../Posts/GetPost';
import Bookingticket from '../Posts/Bookingticket';
import Payment from '../Pages/Payment';
import { useState, createContext, useEffect } from "react";
import Gateway from '../Posts/Gateway'
import RegisterFormbooking from '../Posts/RegisterFormbooking';
import Homepage from '../Posts/Homepage';
import Post from '../Pages/Post';
import Account from '../Posts/Account';
import './index.css';
import Team from '../Pages/Team';
export const UserDetailsContext = createContext();


const App = () => {
    const [userData, setUserData] = useState("userinformation");
    const [postid, setPostid] = useState('')
    const [postDetaild, setPostDetaild] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const userDetails = (userinformation) => {
        if (userinformation) {
            console.log(setUserData(userinformation));
        }
    }
    useEffect(() => {
        userDetails()
    }, [])
    useEffect(() => {
        console.log(userData);

    }, [userData])

    const posterId = (posterID) => {
        if (posterID) {
            setPostid(posterID)
        }
        // console.log(postid, "App page posterid");
    }

    const posterDetail = (post) => {
        if (post) {
            setPostDetaild(post)

        }
        console.log(postDetaild);

    }

    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path='/' element={<UserDetailsContext.Provider value={userData}>
                        <Homepage isLoggedIn={isLoggedIn} />
                    </UserDetailsContext.Provider>} />
                    <Route path='/desboard' element={<Desboard  userData={userData} />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={
                        <Login userDetails={userDetails} setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path='/admin' element={<Admin />} />
                    <Route path='/post' element={<Post />} />
                    <Route path='/team' element={<Team />} />
                    <Route path='/create_event' element={<CreateEvent />} />
                    <Route path='/get_post' element={

                        <GetPost posterDetail={posterId} />
                    } />
                    <Route path='/ticketbooking/:event_id' element={
                        <UserDetailsContext.Provider value={{ userData, userDetails, postid, postDetaild }} >
                            <Bookingticket userData={userData} />
                        </UserDetailsContext.Provider>
                    } />
                    <Route path='/payment/:totalprice/:ticketType/:ticketquantity/:_id/:datepost' element={<Payment  userData={userData}  />} />
                    <Route path='/booking' element={<Booking userDetails={userDetails} />} />
                    <Route path='/gateway' element={<Gateway />} />
                    <Route path='/registerfrom' element={<RegisterFormbooking />} />
                    <Route path='/account' element={
                        <UserDetailsContext.Provider value={userData}>

                        <Account userData={userData} />
                    </UserDetailsContext.Provider>} />

                </Routes>

            </BrowserRouter>
        </>
    );
};

export default App;