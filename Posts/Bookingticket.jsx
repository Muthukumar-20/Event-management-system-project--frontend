import React, { useEffect, useState, useContext } from 'react';
import api from '../Services/localStorage.js';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Bookingticket = ({ userData }) => {

  const { event_id } = useParams()
  const _id = event_id
  const navigate = useNavigate();
  // const {userData}=useContext(UserDetailsContext);
  const [ticketQuantity, setTicketQuantity] = useState(1); // Default 1 ticket
  const [generaltotalPrice, setGeneralTotalPrice] = useState(0);
  const [viptotalPrice, setVipTotalPrice] = useState(0);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [ticketType, setTicketType] = useState('general')
  const initialDetails = { generalprice: 0, vipprice: 0, location: '', date: '', description: '' };
  const [postDetails, setPostDetails] = useState(initialDetails);
  const [post, setPost] = useState(_id); // Post ID (for the service)
  const [date, setDate] = useState();// Date of the booking
  const [user, setUser] = useState(); // Date of the booking
  const [loading, setLoading] = useState(false); // To show loading status
  const [price, setPrice] = useState()
  const [error, setError] = useState(''); // To handle errors
  const [success, setSuccess] = useState(''); // To show success message
  const [quantity, setQuantity] = useState()
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatePrice, setUpdatePrice] = useState('');
  const [buttonText, setButtonText] = useState("Select booking tickets")

  const [activeTab, setActiveTab] = useState('generalprice');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  useEffect(() => {
    const dropdownToggle = document.getElementById('dropdownToggle');
    const dropdownMenu = document.getElementById('dropdownMenu');

    if (dropdownToggle && dropdownMenu) { // Check if elements exist
      const handleClick = () => {
        if (dropdownMenu.classList.contains('block')) {
          dropdownMenu.classList.add('hidden')
          dropdownMenu.classList.remove('block');


        } else {

          dropdownMenu.classList.add('block');
          dropdownMenu.classList.remove('hidden');
        }
      };
      dropdownToggle.addEventListener('click', handleClick);

      // Cleanup function (important to prevent memory leaks)
      return () => {
        dropdownToggle.removeEventListener('click', handleClick);
      }
    }
  }, [])


  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const res = await api.post('/booking/postDetails', { _id });
        const details = res.data.findDetails || {};

        // Validate the data before setting it
        setPostDetails({
          ...details,
          generalprice: details.generalprice || 0, // Default to 0
          vipprice: details.vipprice || 0,         // Default to 0
        });

        // Set default ticket price and total price
        setTicketPrice(details.generalprice || 0);
        setTotalPrice((details.generalprice || 0) * ticketQuantity);
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    fetchEventDetails();
  }, [_id]);


  useEffect(() => {
    if (postDetails) {
      const basePrice =
        ticketType === "vipprice"
          ? postDetails.vipprice || 0
          : postDetails.generalprice || 0;

      const calculatedTotal = basePrice * ticketQuantity;
      setTotalPrice(calculatedTotal);
    }
  }, [ticketType, ticketQuantity, postDetails]);


  const handleTicketTypeChange = (type) => {
    setTicketType(type);
  };

  const handleTicketChange = (quantity) => {
    if (quantity >= 0) {
      setTicketQuantity(quantity);
    }
  };

  const res = {
    data: {
      findDetails: {
        generalprice: postDetails.generalprice,
        vipprice: postDetails.vipprice
      },
    },
  };


  console.log(res);

  useEffect(() => {
    setGeneralTotalPrice(setTotalPrice(res.data.findDetails.generalprice * ticketQuantity));
  }, [ticketQuantity, res.data.findDetails.generalprice]);

  useEffect(() => {
    setVipTotalPrice(setTotalPrice(res.data.findDetails.vipprice * ticketQuantity));
  }, [ticketQuantity, res.data.findDetails.vipprice]);

  // Handle change in ticket quantity
  const handleTicketQuantityChange = (e) => {
    const quantity = parseInt(e.target.value, 10) || 0; // Default to 0 if invalid
    if (quantity >= 0) {
      setTicketQuantity(quantity);
    }
  };


  // Handle checkbox to add/remove tickets
  const handleCheckboxChange = (e) => {
    if (e.target.onChange) {
      setTicketQuantity(ticketQuantity + 1);
    } else {
      setTicketQuantity(ticketQuantity - 1);
    }
  };




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
          date: postDetails.date,
          totalPrice,
          ticketQuantity,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          },
        }
      );
      toast.success(response.data.message);
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Booking failed.');
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (postDetails) {
      const basePrice =
        ticketType === "vipprice"
          ? postDetails.vipprice // VIP price
          : postDetails.generalprice; // General price

      const calculatedTotal = basePrice * ticketQuantity;

      setTotalPrice(calculatedTotal);
    }
  }, [ticketType, ticketQuantity, postDetails]);

  console.log(date);


  const handleDropdownChange = (ticket) => {
    setTicketQuantity(ticket);
    setButtonText(`${ticket} ticket${ticket > 1 ? 's' : ''} selected`);
  };

  const tickets = Array.from({ length: 50 }, (_, index) => index + 1);

  return (
    <>
      <button
        onClick={() => navigate(-1)} // Navigates to the previous page
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 absolute left-32 top-10 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Go Back
      </button>

      <div className="grid sm:grid-cols-2 items-start relative pt-28 gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif]">
        <div>
          <h1 className="text-gray-800 text-3xl font-extrabold">Book tickets</h1>
          <p className="text-sm text-gray-500 font-bold mt-4">{postDetails.description}</p>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                    viewBox="0 0 479.058 479.058">
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000" />
                  </svg>
                </div>
                <a href="javascript:void(0)" className="text-[#007bff] text-sm ml-4">
                  <small className="block">Mail</small>
                  <strong>Muthu@eventmanagement.com</strong>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Location</h2>
            <p className="pt-4 text-gray-500 font-bold">{postDetails.location}</p>
          </div>
        </div>

        <form className="ml-auto space-y-4" onSubmit={handleSubmit}>
          <p className="w-full rounded-md py-3 font-bold px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent">{postDetails.title}</p>
          <input
            className="w-full rounded-md py-3 px-4 font-bold bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
            value={postDetails.date ? new Date(postDetails.date).toLocaleDateString() : ""}
            disabled
          />
          <br />
          <div className="grid items-center gap-8">
            <label className="flex items-center space-x-2 gap-1">


              <input
                type="radio"
                name="ticketType"
                value="generalprice"
                id="generalprice"
                className={`tab  ${activeTab === 'deshboard' ? 'bg-[#d9f3ea] text-green-700' : 'text-gray-600 font-semibold'
                  }`} onClick={() => handleTabClick('generalprice')}
                checked={ticketType === 'generalprice'}
                onChange={() => handleTicketTypeChange('generalprice')}
              />
              <img src="https://media.istockphoto.com/id/1438669029/vector/vector-ticket-isolated-isolated-on-white-background-cinema-theater-concert-play-party-event.jpg?s=612x612&w=0&k=20&c=BjBJb7DTkw2BPtuuHzw-1yN4WNUECYLlhQ9NpM_NF9k=" alt="" className="w-24 h-16 bg-cover bg-no-repeat  " />
              generalprice
            </label>

            <label className="flex items-center space-x-2 gap-1">
              <input
                type="radio"
                name="ticketType"
                value="vipprice"
                id="vipprice"
                checked={ticketType === 'vipprice'}
                className={`tab${activeTab === 'deshboard' ? 'bg-[#d9f3ea] text-green-700' : 'text-gray-600 font-semibold'
                  }`} onClick={() => handleTabClick('vipprice')}
                onChange={() => handleTicketTypeChange('vipprice')}
              />
              <img src="https://luxurygala.com/wp-content/uploads/2019/05/vip-club-cards-members-only-gold-ribbon_100456-1240.png" alt="" className="w-24 h-10  " />
              VIP Ticket (30% extra)
            </label>

          </div>
          <br />

          <p className={`w-full rounded-md py-3 px-4 font-bold bg-gray-100 text-red-500 text-sm outline-blue-500 focus:bg-transparent  ${activeTab === 'generalprice' ? 'block' : 'hidden'}`}>₹{postDetails.generalprice}</p>
          <p className={`w-full rounded-md py-3 px-4 font-bold bg-gray-100 text-red-500 text-sm outline-blue-500 focus:bg-transparent  ${activeTab === 'vipprice' ? 'block' : 'hidden'}`}>₹{postDetails.vipprice}</p>

          <div class="relative font-[sans-serif] w-max ">
            <button type="button" id="dropdownToggle"
              class="px-6 py-3 rounded text-white text-sm font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
              {buttonText}
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-white inline ml-3" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                  clip-rule="evenodd" data-original="#000000" />
              </svg>
            </button>


            <ul id="dropdownMenu" class='absolute hidden shadow-lg bg-white py-2 z-[1000] w-max rounded max-h-96 overflow-auto'>
              <ul>
                {tickets.map((ticket) => (

                  <li
                    key={ticket}
                    className="flex items-center py-3 px-6 hover:bg-blue-50 text-black text-sm cursor-pointer"
                    onClick={() => handleDropdownChange(ticket)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      className="mr-3 inline-block fill-current"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M61.92 30.93a7.076 7.076 0 0 0-6.05-5.88 8.442 8.442 0 0 0-.87-.04V22A15.018 15.018 0 0 0 40 7H24A15.018 15.018 0 0 0 9 22v3.01a8.442 8.442 0 0 0-.87.04 7.076 7.076 0 0 0-6.05 5.88A6.95 6.95 0 0 0 7 38.7V52a3.009 3.009 0 0 0 3 3v6a1 1 0 0 0 1 1h3a1 1 0 0 0 .96-.73L16.75 55h30.5l1.79 6.27A1 1 0 0 0 50 62h3a1 1 0 0 0 1-1v-6a3.009 3.009 0 0 0 3-3V38.7a6.95 6.95 0 0 0 4.92-7.77ZM11 22A13.012 13.012 0 0 1 24 9h16a13.012 13.012 0 0 1 13 13v3.3a6.976 6.976 0 0 0-5 6.7v3.18a3 3 0 0 0-1-.18H17a3 3 0 0 0-1 .18V32a6.976 6.976 0 0 0-5-6.7Zm37 16v5H16v-5a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1ZM13.25 60H12v-5h2.67ZM52 60h-1.25l-1.42-5H52Zm3.83-23.08a1.008 1.008 0 0 0-.83.99V52a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V37.91a1.008 1.008 0 0 0-.83-.99 4.994 4.994 0 0 1 .2-9.88A4.442 4.442 0 0 1 9 27h.01a4.928 4.928 0 0 1 3.3 1.26A5.007 5.007 0 0 1 14 32v12a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V32a5.007 5.007 0 0 1 1.69-3.74 4.932 4.932 0 0 1 3.94-1.22 5.018 5.018 0 0 1 4.31 4.18v.01a4.974 4.974 0 0 1-4.11 5.69Z"
                        data-original="#000000"
                      />
                    </svg>
                    {ticket} tickets
                  </li>
                ))}
              </ul>
            </ul>
          </div>

          <div className="pt-4 pb-10 mt-10">

            <p className={`text-lg font-medium text-green-600 mb-4`}>
              Total Amount: ₹{totalPrice}
            </p>


            <br />
            <Link to={`/payment/${totalPrice}/${ticketType}/${ticketQuantity}/${_id}/${postDetails.date}`}>
              <button
                type="button"
                className={`w-full px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold focus:outline-none ${loading && 'opacity-50 cursor-not-allowed'}`}
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Book Now'}
              </button>
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Bookingticket;
