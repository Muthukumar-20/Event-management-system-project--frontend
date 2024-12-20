import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserDetailsContext } from '../src/App';
import { useNavigate } from 'react-router-dom';

const UserProfilePage = ({userData}) => {
    //  const { userData } = useContext(UserDetailsContext);
   
    const navigate = useNavigate();



   useEffect(()=>{
      console.log(userData);
   },[userData])


    // console.log(userdata);
    



    return (
        <>
        
            <div className="max-h-full bg-gray-100 flex items-center justify-center p-6 relative">
            <button
        onClick={() => navigate(-1)} // Navigates to the previous page
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 absolute left-40 top-10 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
        Go Back
        </button>
                <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
                    <div className='flex justify-center'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxn6HttfyveJwe2VY0xQYuwC7_3JdVOnLnKg&s" alt="profile-pic"
                            class="w-52 h-52 max-lg:w-16 max-lg:h-16 rounded-full border-2 border-gray-300 cursor-pointer" />
                    </div>

                    <div className="mt-4">
                        <h2 className="text-lg font-semibold text-gray-700">Name:</h2>
                        <p className="text-gray-600">{userData.name}</p>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold text-gray-700">Your id:</h2>
                        <p className="text-gray-600">{userData.userid}</p>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold text-gray-700">About:</h2>
                        <p className="text-gray-600">{userData.about}</p>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold text-gray-700">Email:</h2>
                        <p className="text-gray-600">{userData.email}</p>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold text-gray-700">Role:</h2>
                        <p className="text-gray-600">{userData.role}</p>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold text-gray-700">Address:</h2>
                        <p className="text-gray-600">{userData.address}</p>
                    </div>
                </div>
            </div>
            </>

    );
};

// export default function App() {
//     const user = {
//         name: 'John Doe',
//         about: 'I am a software engineer passionate about creating efficient and scalable web applications.',
//         email: 'john.doe@example.com',
//         role: 'Frontend Developer',
//         address: '1234 Elm Street, Springfield, USA',
//     };

//     return <UserProfilePage user={user} />;
// }

export default UserProfilePage;