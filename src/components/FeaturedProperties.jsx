import React from "react";
import PropertyCard from "./PropertyCard";
import { useState } from "react";

const FeaturedProperties = ({ properties }) => {
  const [search, setSearch] = useState("")
  return (
    <section className="max-w-7xl mx-auto py-16 px-4" id="properties">
      <h2 className="text-3xl font-semibold mb-8 text-gray-900">Explore Homes Near You</h2>
      <form className="max-w-4xl mx-auto mb-10">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            className="h-10 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Location"
          />
        </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.filter((property) => {
          return search.toLowerCase() === "" ? property : property.location.toLowerCase().includes(search)
        }).map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;
