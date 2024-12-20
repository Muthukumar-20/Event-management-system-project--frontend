import React, { useState, useEffect } from 'react';

const TicketPriceUpdater = () => {
  // Sample response with price from the backend
  const res = {
    data: {
      findDetails: {
        price: 50, // Example default price for a single ticket
      },
    },
  };

  // State for the ticket count and price
  const [ticketQuantity, setTicketQuantity] = useState(1); // Default 1 ticket
  const [totalPrice, setTotalPrice] = useState(res.data.findDetails.price); // Default price

  // Update the total price whenever ticket quantity or price changes
  useEffect(() => {
    setTotalPrice(res.data.findDetails.price * ticketQuantity);
  }, [ticketQuantity, res.data.findDetails.price]);

  // Handle change in ticket quantity
  const handleTicketQuantityChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    if (quantity >= 0) {
      setTicketQuantity(quantity);
    }
  };

  // Handle checkbox to add/remove tickets
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setTicketQuantity(ticketQuantity + 1);
    } else {
      setTicketQuantity(ticketQuantity - 1);
    }
  };

document.addEventListener('DOMContentLoaded', function () {
    let tabs = document.querySelectorAll('.tab');
    let contents = document.querySelectorAll('.tab-content');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function (e) {
            let targetId = tab.id.replace('Tab', 'Content');

            // Hide all content divs
            contents.forEach(function (content) {
                content.classList.add('hidden');
            });

            // Remove active class from all tabs
            tabs.forEach(function (tab) {
                tab.classList.remove('text-white', 'font-bold', 'bg-purple-500');
                tab.classList.add('text-gray-600', 'font-semibold');
            });

            // Show the target content
            document.getElementById(targetId).classList.remove('hidden');

            // Add active class to the clicked tab
            tab.classList.add('text-white', 'font-bold', 'bg-purple-500');
            tab.classList.remove('text-gray-600', 'font-semibold');
        });
    });
});




  return (
    <>
    
    <div>
      <h2>Ticket Price: ${totalPrice}</h2>

      <div>
        {/* Ticket quantity input */}
        <label>
          Number of Tickets:
          <input
            type="number"
            value={ticketQuantity}
            onChange={handleTicketQuantityChange}
            min="1"
          />
        </label>
      </div>

      <div>
        {/* Checkbox to add/remove a ticket */}
        <label>
          Add 1 Ticket:
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
          />
        </label>
      </div>

      {/* Display selected number of tickets */}
      <p>Tickets Selected: {ticketQuantity}</p>
      <p>Total Price: ${totalPrice}</p>
    </div>



    <div class="font-sans p-4">
    <ul class="flex bg-gray-100">
        <li id="homeTab"
            class="tab text-white font-bold tracking-wide w-full text-center text-base bg-purple-500 py-3 px-6 cursor-pointer">
            Home</li>
        <li id="settingTab"
            class="tab text-gray-600 font-semibold tracking-wide w-full text-center text-base py-3 px-6 cursor-pointer">
            Settings</li>
        <li id="profileTab"
            class="tab text-gray-600 font-semibold tracking-wide w-full text-center text-base py-3 px-6 cursor-pointer">
            Profile</li>
    </ul>

    <div id="homeContent" class="tab-content max-w-2xl block mt-8">
        <h4 class="text-lg font-bold text-gray-600">Home</h4>
        <p class="text-sm text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed auctor auctor arcu, at fermentum dui.
            Maecenas vestibulum a turpis in lacinia.
            Proin aliquam turpis at erat venenatis malesuada.
        </p>
    </div>
    <div id="settingContent" class="tab-content max-w-2xl hidden mt-8">
        <h4 class="text-lg font-bold text-gray-600">Setting</h4>
        <p class="text-sm text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed auctor auctor arcu, at fermentum dui.
            Maecenas vestibulum a turpis in lacinia.
            Proin aliquam turpis at erat venenatis malesuada.
            Sed semper, justo vitae consequat fermentum, felis diam posuere ante, sed fermentum quam justo in dui.
        </p>
    </div>
    <div id="profileContent" class="tab-content max-w-2xl hidden mt-8">
        <h4 class="text-lg font-bold text-gray-600">Profile</h4>
        <p class="text-sm text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed auctor auctor arcu, at fermentum dui.
            Maecenas vestibulum a turpis in lacinia.
        </p>
    </div>
</div>


    </>




  );
};

export default TicketPriceUpdater;
