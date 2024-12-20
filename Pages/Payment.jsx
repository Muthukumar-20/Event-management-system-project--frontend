import React, { useEffect, useState, useContext } from 'react';
import api from '../Services/localStorage.js';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Payment = ({ userData }) => {

  const { _id } = useParams()
  const { totalprice } = useParams()
  const { datepost } = useParams()
  const { ticketquantity } = useParams()


  const navigate = useNavigate();
  // const {userData}=useContext(UserDetailsContext);
  const [ticketQuantity, setTicketQuantity] = useState(ticketquantity); // Default 1 ticket
  const [generaltotalPrice, setGeneralTotalPrice] = useState(0);
  const [viptotalPrice, setVipTotalPrice] = useState(0);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [ticketType, setTicketType] = useState('general')
  const initialDetails = { generalprice: 0, vipprice: 0, location: '', date: '', description: '' };
  const [postDetails, setPostDetails] = useState(initialDetails);
  const [post, setPost] = useState(_id); // Post ID (for the service)
  const [date, setDate] = useState(datepost);// Date of the booking
  const [user, setUser] = useState(); // Date of the booking
  const [loading, setLoading] = useState(false); // To show loading status
  const [price, setPrice] = useState()
  const [error, setError] = useState(''); // To handle errors
  const [success, setSuccess] = useState(''); // To show success message
  const [quantity, setQuantity] = useState()
  const [totalPrice, setTotalPrice] = useState(totalprice);
  const [updatePrice, setUpdatePrice] = useState('');
  const [buttonText, setButtonText] = useState("Select booking tickets")

  // const apply =document.getElementsByClassName("apply")
  // const element = document.getElementById("myBtn");

  // element.addEventListener("click", myFunction);

  // function myFunction() {
  //   document.getElementById("Promo code")
  //   alert("Invalid promo code")
  // }


  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const res = await api.post('/booking/postDetails', { _id });
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    fetchEventDetails();
  }, [_id]);

  useEffect(() => {
    (userData);
  }, [userData])


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post(
        '/booking/book',
        {
          user: userData,
          post,
          date,
          totalPrice,
          ticketQuantity,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          },
        }
      );
      setTimeout(() => {
        navigate("/get_post")
      }, 1200)
      toast.success("Bookingticket successfully sending your email");
    } catch (err) {
      // toast.error(err.response.message);
      (err);

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => navigate(-1)} // Navigates to the previous page
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 absolute left-32 top-10 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Go Back
      </button>

      <div className='flex justify-center'>
        <form className='w-[600px]' onSubmit={handleSubmit}>
          <div className='grid'>
            <h2 className="text-2xl font-extrabold  text-gray-800">Payment process</h2>
            <div className="grid gap-4 mt-8 w-[600px]">
              <div>
                <label className="block text-base font-semibold text-gray-800 mb-2">Holder Name</label>
                <input type="text" placeholder={userData.name} disabled
                  className="px-4 py-3 bg-transparent text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-purple-500 outline-none" />
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-800 mb-2">Card Number</label>
                <div className="flex bg-transparent border border-gray-300 rounded-md focus-within:border-purple-500 overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 ml-3" viewBox="0 0 32 20">
                    <circle cx="10" cy="10" r="10" fill="#f93232" data-original="#f93232" />
                    <path fill="#fed049"
                      d="M22 0c-2.246 0-4.312.75-5.98 2H16v.014c-.396.298-.76.634-1.107.986h2.214c.308.313.592.648.855 1H14.03a9.932 9.932 0 0 0-.667 1h5.264c.188.324.365.654.518 1h-6.291a9.833 9.833 0 0 0-.377 1h7.044c.104.326.186.661.258 1h-7.563c-.067.328-.123.66-.157 1h7.881c.039.328.06.661.06 1h-8c0 .339.027.67.06 1h7.882c-.038.339-.093.672-.162 1h-7.563c.069.341.158.673.261 1h7.044a9.833 9.833 0 0 1-.377 1h-6.291c.151.344.321.678.509 1h5.264a9.783 9.783 0 0 1-.669 1H14.03c.266.352.553.687.862 1h2.215a10.05 10.05 0 0 1-1.107.986A9.937 9.937 0 0 0 22 20c5.523 0 10-4.478 10-10S27.523 0 22 0z"
                      className="hovered-path" data-original="#fed049" />
                  </svg>
                  <input type="number" placeholder="xxxx xxxx xxxx" required
                    className="px-4 py-3 bg-transparent border-none text-gray-800 w-full text-sm outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-base font-semibold text-gray-800 mb-2">Expiry Date</label>
                  <input type="date" placeholder="08/27" required
                    className="px-4 py-3 bg-transparent text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-purple-500 outline-none" />
                </div>

                <div>
                  <label className="block text-base font-semibold text-gray-800 mb-2">CVV</label>
                  <input type="number" placeholder="XXX" required
                    className="px-4 py-3 bg-transparent text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-purple-500 outline-none" />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8">
            <h3 class="text-base font-bold text-gray-800">Apply promo code</h3>
            <div class="flex border border-blue-600 overflow-hidden max-w-md rounded-lg mt-4">
              <input type="email" placeholder="Promo code" id='Promo code'
                class="w-full outline-none text-gray-800 text-sm px-4 py-3 bg-white" />

              <button type='button' id='myBtn' class="flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-6 py-3 font-semibold tracking-wide text-sm text-white outline-none">
                Apply
              </button>
            </div>
          </div>

          <ul className="text-gray-800 mt-8 space-y-4">
            <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-bold">₹{totalprice}</span></li>
            <li className="flex flex-wrap gap-4 text-sm">Discount <span className="ml-auto font-bold">$0.00</span></li>
            <hr className="border-gray-300" />
            <li className="flex flex-wrap gap-4 text-sm font-bold">Total <span className="ml-auto">₹{totalprice}</span></li>
          </ul>

          <button type="submit" className={`mt-8 text-sm px-4 py-3 w-full font-semibold tracking-wide bg-purple-600 hover:bg-purple-700 text-white rounded-md ${loading && 'opacity-50 cursor-not-allowed'}`}
          // disabled={loading}
          > {loading ? 'Processing...' : 'Make Payment'} </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Payment;
