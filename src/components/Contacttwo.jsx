import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Contacttwo = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [eventdate, setEventdate] = useState("");
  const [eventtype, setEventtype] = useState("");
  const [guestcount, setGuestcount] = useState("");
  const [moredetails, setMoredetails] = useState("");
  const dbref = collection(db, "userInfo");
  const send = async () => {
    try {
      await addDoc(dbref, {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phonenumber: phonenumber,
        eventdate: eventdate,
        eventtype: eventtype,
        guestcount: guestcount,
        moredetails: moredetails,
      });
      alert("Response submitted.");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="relative w-full">
      <div className="max-w-4xl mx-auto mt-8 px-4">
        <div className="mb-8">
          <h2 className="text-3xl mb-4 italic font-serif">Contact Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-md font-medium text-gray-600 my-3"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstname}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-md font-medium text-gray-600 my-3"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastname}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-md font-medium text-gray-600 my-3"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-md font-medium text-gray-600 my-3"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={phonenumber}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                onChange={(e) => setPhonenumber(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl mb-4 italic font-serif my-3">
            Event Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="eventDate"
                className="block text-md font-medium my-3 text-gray-600"
              >
                Event Date
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={eventdate}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                onChange={(e) => setEventdate(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="eventType"
                className="block text-md font-medium my-3 text-gray-600"
              >
                Event Type
              </label>
              <select
                id="eventType"
                name="eventType"
                value={eventtype}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                onChange={(e) => setEventtype(e.target.value)}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="wedding">Wedding</option>
                <option value="social">Social Celebrations</option>
                <option value="corporate">Corporate Events</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="guestCount"
                className="block text-md font-medium my-3 text-gray-600"
              >
                Estimated Guest Count
              </label>
              <input
                type="number"
                id="guestCount"
                name="guestCount"
                value={guestcount}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                onChange={(e) => setGuestcount(e.target.value)}
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="moreDetails"
                className="block text-md font-medium my-3 text-gray-600"
              >
                More Details
              </label>
              <textarea
                id="moreDetails"
                name="moreDetails"
                value={moredetails}
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-600 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                onChange={(e) => setMoredetails(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            onClick={send}
            className="bg-orange-500 hover:bg-gray-600 text-white py-3 px-6 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 my-7"
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacttwo;
