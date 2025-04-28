import React from "react";
import { useState } from "react"

const EditModal = ({ showModal, setShowModal, property, handleEditSubmit }) => {
  const [title, setTitle] = useState(property.title)
  const [type, setType] = useState(property.type)
  const [location, setLocation] = useState(property.location)
  const [price, setPrice] = useState(property.price)
  const [description, setDescription] = useState(property.description)
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const updatedProperty = {
      ...property,
      title,
      type,
      location,
      price: Number(price),
      description,
    };

    handleEditSubmit(updatedProperty)
  }

  return (
    <div
      className={`fixed inset-0 bg-gray-500 bg-opacity-50 z-50 flex justify-center items-center ${
        showModal ? "block" : "hidden"
      }`}
    >
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl text-center mb-4">Edit Property</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">Type</label>
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>

          <div className="container mx-auto flex justify-center space-x-4">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-gray-700 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditModal;
