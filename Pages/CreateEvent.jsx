import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateEvent = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { name, description, price};

        const headers = {
            Authorization: `Bearer ${authToken}`,
          };
        await axios
            .post("http://localhost:5000/api/service/create", payload)
            .then((res) => {
                toast.success(res.data.message);
                console.log(res);
                
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.response.data.message);
            });
        setName(""),
            setDescription(""),
            setImage(""),
            setPrice("")
    };
    console.log(handleSubmit);
    

    return (
        <>
            <form action="" onChange={handleSubmit}>

                <h1>Creat events</h1>

                <label htmlFor="title"></label>
                <p>Title</p>
                <input className='border w-[300px] h-8 border-black'
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter Your Title"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="description"></label>
                <p>description</p>
                <textarea name="description" required value={description} onChange={(e) => setDescription(e.target.value)} id="description"></textarea>

                {/* <label htmlFor="image"></label>
                <p>Image</p>
                <input type="image" src="" alt="" required
                    value={image}
                    onChange={(e) => setImage(e.target.value)} /> */}

                <label htmlFor="price"></label>
                <p>Price</p>
                <input type="number" name="price" id="price" />
                <br />
                <br />


                <button type="submit">Creat event</button>

            </form>



            <ToastContainer />
        </>
    );
};

export default CreateEvent;