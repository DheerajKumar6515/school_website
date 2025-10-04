

export default function TestimonialsCarousel() {

  const testimonials = [
    {
      name: 'John Doe',
      role: 'Parent',
      message: 'The school has truly transformed my child\'s learning experience. The teachers are amazing and the environment is nurturing.',
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: 'Jane Smith',
      role: 'Student',
      message: 'I love the school because of the creative and hands-on approach to learning. I feel excited to go to school every day.',
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: 'Mark Johnson',
      role: 'Teacher',
      message: 'Working at this school has been a rewarding experience. The staff is supportive, and the students are motivated and curious.',
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  
  return (
   
  <section className="py-12 bg-gray-50" id="testimonials">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 font-Enriqueta">What Our Community Says</h2>
        <p className="mt-4 text-lg font-Roboto text-gray-600 max-w-3xl mx-auto">
          Hear from our students, parents, and teachers about their experiences at NS Smart School.
        </p>
      </div>

      {/* Testimonials Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center justify-center md:justify-start mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-600 text-base italic">{`"${testimonial.message}"`}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}