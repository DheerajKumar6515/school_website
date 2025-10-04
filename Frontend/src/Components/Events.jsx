import React from 'react';

const Events = () => {
  const eventsAndNews = [
    {
      title: 'Back-to-School Night',
      date: 'March 10, 2025',
      description: 'Join us for an evening of fun, meet your child\'s teachers, and learn about the upcoming school year!',
      image: '/path/to/event-image1.jpg',
    },
    {
      title: 'Annual Science Fair',
      date: 'April 15, 2025',
      description: 'Our students will showcase their science projects. A great opportunity to see young minds in action!',
      image: '/path/to/event-image2.jpg',
    },
    {
      title: 'Graduation Ceremony',
      date: 'June 5, 2025',
      description: 'Let\'s celebrate our graduating students as they step into the next phase of their lives!',
      image: '/path/to/event-image3.jpg',
    },
  ];

  return (
    <section className="py-12 bg-gray-50" id="events-news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">Upcoming Events & News</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Stay up to date with the latest events, news, and updates from our school community.
          </p>
        </div>

        {/* Events & News Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {eventsAndNews.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.date}</p>
                <p className="text-gray-600 mt-4">{item.description}</p>
                <button className="mt-6 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
