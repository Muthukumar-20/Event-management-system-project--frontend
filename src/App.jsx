import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Desboard from '../Pages/Desboard';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import GetPost from '../Posts/GetPost';
import Bookingticket from '../Posts/Bookingticket';
import Payment from '../Pages/Payment';
import { useState, createContext, useEffect } from "react";
import RegisterFormbooking from '../Posts/RegisterFormbooking';
import Homepage from '../Posts/Homepage';


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
            (setUserData(userinformation));
        }
    }
    useEffect(() => {
        userDetails()
    }, [])
    useEffect(() => {
        (userData);

    }, [userData])

    const posterId = (posterID) => {
        if (posterID) {
            setPostid(posterID)
        }
        // (postid, "App page posterid");
    }

    const posterDetail = (post) => {
        if (post) {
            setPostDetaild(post)

        }
        (postDetaild);

    }

    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path='/' element={<UserDetailsContext.Provider value={userData}>
                        <Homepage isLoggedIn={isLoggedIn} />
                    </UserDetailsContext.Provider>} />
                    <Route path='/desboard' element={<Desboard userData={userData} />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={
                        <Login userDetails={userDetails} setIsLoggedIn={setIsLoggedIn} />} />
                
                  
                    <Route path='/team' element={<Team />} />
                    <Route path='/get_post' element={

                        <GetPost posterDetail={posterId} />
                    } />
                    <Route path='/ticketbooking/:event_id' element={
                        <UserDetailsContext.Provider value={{ userData, userDetails, postid, postDetaild }} >
                            <Bookingticket userData={userData} />
                        </UserDetailsContext.Provider>
                    } />
                    <Route path='/payment/:totalprice/:ticketType/:ticketquantity/:_id/:datepost' element={<Payment userData={userData} />} />
                    <Route path='/registerfrom' element={<RegisterFormbooking />} />
                </Routes>

            </BrowserRouter>
        </>
    );
};

export default App;