import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import api from '../Services/localStorage';

const Booking = ({ userData }) => {
//   const { event_id } = useParams();
//   const navigate = useNavigate();

//   const [ticketType, setTicketType] = useState('general'); // 'general' or 'vip'
//   const [ticketQuantity, setTicketQuantity] = useState(1); // Default 1 ticket
//   const [postDetails, setPostDetails] = useState({});
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [loading, setLoading] = useState(false);

//   const tickets = Array.from({ length: 50 }, (_, index) => index + 1);

//   // Fetch event details
//   useEffect(() => {
//     const fetchEventDetails = async () => {
//       try {
//         const res = await api.post('/booking/postDetails', { _id: event_id });
//         const details = res.data.findDetails;
//         setPostDetails(details);
//         setTotalPrice(details.generalprice * ticketQuantity); // Default general ticket price
//       } catch (error) {
//         toast.error('Failed to fetch event details.');
//       }
//     };
//     fetchEventDetails();
//   }, [event_id]);

//   // Update total price based on ticket type and quantity
//   useEffect(() => {
//     if (postDetails) {
//       const price =
//         ticketType === 'vip' ? postDetails.vipprice : postDetails.generalprice;
//       setTotalPrice(price * ticketQuantity);
//     }
//   }, [ticketType, ticketQuantity, postDetails]);

//   const handleTicketTypeChange = (type) => {
//     setTicketType(type);
//   };

//   const handleQuantityChange = (quantity) => {
//     setTicketQuantity(quantity);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await api.post(
//         '/booking/book',
//         {
//           user: userData,
//           post: event_id,
//           date: postDetails.date,
//           totalPrice,
//           ticketQuantity,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('userToken')}`,
//           },
//         }
//       );
//       toast.success(response.data.message);
//     } catch (err) {
//       toast.error('Booking failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <button
//         onClick={() => navigate(-1)}
//         className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
//       >
//         Go Back
//       </button>

//       <div className="grid sm:grid-cols-2 gap-16 p-4 mx-auto max-w-4xl bg-white">
//         <div>
//           <h1 className="text-3xl font-bold">Book Tickets</h1>
//           <p className="text-gray-500 mt-4">{postDetails.description}</p>
//           <p className="mt-4 font-semibold">Location: {postDetails.location}</p>
//           <p className="mt-4 font-semibold">Date: {new Date(postDetails.date).toLocaleDateString()}</p>
//         </div>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <h2 className="font-bold">Select Ticket Type</h2>
//           <div className="flex space-x-4">
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="ticketType"
//                 value="general"
//                 checked={ticketType === 'general'}
//                 onChange={() => handleTicketTypeChange('general')}
//               />
//               <span className="ml-2">General - ₹{postDetails.generalprice}</span>
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="ticketType"
//                 value="vip"
//                 checked={ticketType === 'vip'}
//                 onChange={() => handleTicketTypeChange('vip')}
//               />
//               <span className="ml-2">VIP - ₹{postDetails.vipprice}</span>
//             </label>
//           </div>

//           <h2 className="font-bold">Select Quantity</h2>
//           <select
//             className="border rounded-md px-3 py-2"
//             value={ticketQuantity}
//             onChange={(e) => handleQuantityChange(Number(e.target.value))}
//           >
//             {tickets.map((num) => (
//               <option key={num} value={num}>
//                 {num}
//               </option>
//             ))}
//           </select>

//           <p className="font-semibold">Total Price: ₹{totalPrice}</p>

//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded-md"
//             disabled={loading}
//           >
//             {loading ? 'Processing...' : 'Book Now'}
//           </button>
//         </form>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };
<div className='flex justify-center'>
<form className='w-[600px]'>
  <div className='grid'>
    <h2 className="text-2xl font-extrabold  text-gray-800">Payment process</h2>
    <div className="grid gap-4 mt-8 w-[600px]">
      <div>
        <label className="block text-base font-semibold text-gray-800 mb-2">Card Holder Name</label>
        <input type="text" placeholder="John Doe"
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
          <input type="number" placeholder="xxxx xxxx xxxx"
            className="px-4 py-3 bg-transparent text-gray-800 w-full text-sm outline-none" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-base font-semibold text-gray-800 mb-2">Expiry Date</label>
          <input type="number" placeholder="08/27"
            className="px-4 py-3 bg-transparent text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-purple-500 outline-none" />
        </div>

        <div>
          <label className="block text-base font-semibold text-gray-800 mb-2">CVV</label>
          <input type="number" placeholder="XXX"
            className="px-4 py-3 bg-transparent text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-purple-500 outline-none" />
        </div>
      </div>
    </div>
  </div>
  <div class="mt-8">
    <h3 class="text-base font-bold text-gray-800">Apply promo code</h3>
    <div class="flex border border-blue-600 overflow-hidden max-w-md rounded-lg mt-4">
      <input type="email" placeholder="Promo code"
        class="w-full outline-none text-gray-800 text-sm px-4 py-3 bg-white" />

      <button type='button' class="flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-6 py-3 font-semibold tracking-wide text-sm text-white outline-none">
        Apply
      </button>
    </div>
  </div>

  <ul className="text-gray-800 mt-8 space-y-4">
    <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-bold">₹{totalPrice}</span></li>
    <li className="flex flex-wrap gap-4 text-sm">Discount <span className="ml-auto font-bold">$0.00</span></li>
    <hr className="border-gray-300" />
    <li className="flex flex-wrap gap-4 text-sm font-bold">Total <span className="ml-auto">₹{totalPrice}</span></li>
  </ul>

  <button type="submit" className={`mt-8 text-sm px-4 py-3 w-full font-semibold tracking-wide bg-purple-600 hover:bg-purple-700 text-white rounded-md ${loading && 'opacity-50 cursor-not-allowed'}`}
    disabled={loading}
  > {loading ? 'Processing...' : 'Make Payment'} </button>
</form>
</div>
}
export default Booking;
