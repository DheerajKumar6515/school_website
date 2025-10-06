import React from 'react'

function Gallery() {

  return (
   
    <section className="py-12 relative bg-gray-100" id="gallery">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className='absolute'><img className='w-32' src="/png2.png" alt="png img" /></div>
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-Enriqueta font-semibold text-gray-800">Gallery</h2>
      </div>

      {/* Features Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img src="/img1.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img src="/img3.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img src="/img4.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img src="/img6.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img src="/img5.webp" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img src="/classroom.jpg" alt="" className="w-full h-full object-cover" />
        </div>     

      </div>
    </div>
  </section>
    
  )
}

export default Gallery
