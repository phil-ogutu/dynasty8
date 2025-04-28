import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Swal from 'sweetalert2';

const AddProperty = () => {
  const { setProperties } = useOutletContext()
  const navigate = useNavigate();

  const [title, setTitle] = useState("")
  const [type, setType] = useState("")
  const [location, setLocation] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const newProperty = {
      title,
      type,
      location,
      price: Number(price),
      description,
      image: image || "/assets/images/default.png",
    }

    fetch("http://localhost:3000/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProperty),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Property added:", data);

        setProperties((prevProperties) => [...prevProperties, data])

        setTitle("")
        setType("")
        setLocation("")
        setPrice("")
        setDescription("")
        setImage("")

        Swal.fire({
          title: 'Success!',
          text: 'Property added successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          navigate("/admin/dashboard")
        })
      })
  }

  return (
    <div className="bg-white rounded-lg pb-4 shadow">
      <h2 className="text-2xl text-center mt-20">Add Property</h2>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-12">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Title"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Type
          </label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Type"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Location"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Price
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Price"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Description"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
