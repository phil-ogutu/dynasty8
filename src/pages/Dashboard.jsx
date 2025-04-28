import React from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import EditModal from "../components/EditModal";

const Dashboard = () => {
  const { properties, setProperties } = useOutletContext()

  const [showModal, setShowModal] = useState(false)
  const [propertyToEdit, setPropertyToEdit] = useState(null)

  const handleDelete = (propertyId) => {
    fetch(`http://localhost:3000/properties/${propertyId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setProperties(
          properties.filter((property) => property.id !== propertyId)
        )
      })
  }

  const handleEditSubmit = (updatedProperty) => {
    fetch(`http://localhost:3000/properties/${updatedProperty.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProperty),
    })
      .then((res) => res.json())
      .then((data) => {
        setProperties((prevProperties) =>
          prevProperties.map((property) =>
            property.id === updatedProperty.id ? data : property
          )
        )
        setShowModal(false)
      })
  }

  const handleEditClick = (property) => {
    setPropertyToEdit(property)
    setShowModal(true)
  };

  return (
    <div className="bg-white rounded-lg pb-4 shadow">
      <div className="overflow-x-auto sm:rounded-t">
        <table className="w-full text-black">
          <thead className="text-sm text-white text-left bg-gray-900">
            <tr>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Location</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Description</th>
              <th className="px-6 py-3">Controls</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr
                key={property.id}
                className="odd:bg-white even:bg-gray-200 border-b"
              >
                <td className="px-6 py-2">{property.title}</td>
                <td className="px-6 py-2">{property.type}</td>
                <td className="px-6 py-2">{property.location}</td>
                <td className="px-6 py-2">{property.price.toLocaleString()}</td>
                <td className="px-6 py-2">{property.description}</td>
                <td className="px-6 py-2">
                  <button
                    type="button"
                    onClick={() => handleEditClick(property)}
                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(property.id)}
                    className="text-white bg-red-700 hover:bg-red-800 ml-5 font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <EditModal
          showModal={showModal}
          setShowModal={setShowModal}
          property={propertyToEdit}
          handleEditSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
};

export default Dashboard;
