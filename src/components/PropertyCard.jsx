import React from "react";
import { FaLocationDot, FaBed, FaRuler, FaBath } from "react-icons/fa6";

const PropertyCard = ({ property }) => {
  console.log(property.image)
  return (
    <div className="bg-white rounded-2xl drop-shadow-lg overflow-hidden hover:drop-shadow-xl hover:scale-105 transition-all duration-300 relative group cursor-pointer">
      <div className="relative">
        <img
          src={property.image}
          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-ceter gap-2 text-gray-500 text-sm mb-3">
          <FaLocationDot className="text-blue-600" />
          <span>{property.location}</span>
        </div>

        <div className="text-2xl font-bold text-blue-600 mb-2">Kes. {property.price.toLocaleString()}</div>

        <h3 className="text-xl font-semibold text-gray-600 mb-3">{property.title}</h3>

        <div className="flex justify-between items-center p-2 rounded-lg bg-blue-50">
          <div className="flex items-center gap-2">
            <FaBed className="text-blue-600" />
            <span className="text-gray-600">4 Beds</span>
          </div>

          <div className="flex items-center gap-2">
            <FaBath className="text-blue-600" />
            <span className="text-gray-600">4 Baths</span>
          </div>

          <div className="flex items-center gap-2">
            <FaRuler className="text-blue-600" />
            <span className="text-gray-600">2500 sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
