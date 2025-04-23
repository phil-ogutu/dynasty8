import React from 'react'
import PropertyCard from './PropertyCard'

const FeaturedProperties = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8">Featured</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
        </div>
    </section>
  )
}

export default FeaturedProperties