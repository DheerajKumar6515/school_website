import React from 'react'

function Aboutus() {
  return (
    // <section className="py-12 bg-gray-100" id="about">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="text-center">
    //       <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">About Us</h2>
    //       <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
    //         At NS Smart School, we believe in providing a nurturing, engaging, and inspiring learning environment
    //         that helps every child reach their full potential. Our school is designed to foster creativity, critical
    //         thinking, and curiosity, ensuring that each child has the tools to succeed in the world of tomorrow.
    //       </p>
    //     </div>



    //     <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
    //       <div className="text-center md:text-left">
    //         <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
    //         <p className="mt-4 text-gray-600">
    //           Our mission is to deliver high-quality education in a safe, inclusive, and motivating environment.
    //           We strive to empower students to become lifelong learners who are capable of thriving in a rapidly
    //           changing world.
    //         </p>
    //       </div>

    //       <div className="text-center md:text-left">
    //         <h3 className="text-2xl font-semibold text-gray-800">Our Values</h3>
    //         <ul className="mt-4 text-gray-600 list-disc list-inside">
    //           <li>Excellence in Education</li>
    //           <li>Integrity and Respect</li>
    //           <li>Innovation and Creativity</li>
    //           <li>Community and Collaboration</li>
    //           <li>Growth and Development</li>
    //         </ul>
    //       </div>
    //     </div>

    //     {/* Image Section */}
    //     <div className="mt-12 flex justify-center md:justify-start">
    //       <img
    //         src="/src/images/classroom.jpg" 
    //         alt="School Image"
    //         className="w-full md:w-2/3 lg:w-1/2 rounded-xl shadow-lg"
    //       />
    //     </div>


    //   </div>
    // </section>

    <section className="py-12 bg-gray-100 bg-[url('./src/images/png3.png')] bg-no-repeat bg-right bg-contain" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 font-Enriqueta">About Us</h2>
          <p className="mt-2 text-lg text-gray-600 font-Roboto max-w-3xl mx-auto">
            At NS Smart School, we believe in providing a nurturing, engaging, and inspiring learning environment
            that helps every child reach their full potential. Our school is designed to foster creativity, critical
            thinking, and curiosity, ensuring that each child has the tools to succeed in the world of tomorrow.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 font-Enriqueta">Our Mission</h3>
            <p className="mt-2 text-gray-600 font-Roboto">
              Our mission is to deliver high-quality education in a safe, inclusive, and motivating environment.
              We strive to empower students to become lifelong learners who are capable of thriving in a rapidly
              changing world.
            </p>
          </div>

          <div className="text-center md:text-left font-Roboto">
            <h3 className="text-2xl font-semibold text-gray-800 font-Enriqueta">Our Values</h3>
            <ul className="mt-2 text-gray-600 list-disc list-inside">
              <li>Excellence in Education</li>
              <li>Integrity and Respect</li>
              <li>Innovation and Creativity</li>
              <li>Community and Collaboration</li>
              <li>Growth and Development</li>
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-12 flex flex-col-reverse md:flex-row justify-center md:justify-start">
          <div className="md:w-1/2">
            <img
              src="/src/images/classroom.jpg"
              alt="School Image"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h1 className='text-2xl font-bold text-gray-800 pb-2 font-Enriqueta'>Welcome to NS Smart School, where every child’s potential is nurtured and celebrated!</h1>
            <p className=" text-gray-700 font-Roboto ">
              At NS Smart School, we believe that learning is a lifelong journey, and we are dedicated to making it an inspiring, exciting, and enriching experience. Our school is a place where students are empowered to become confident, creative, and critical thinkers, equipped with the skills they need to thrive in an ever-changing world.

              We offer a forward-thinking curriculum that combines innovative teaching methods with cutting-edge technology, ensuring our students are not only prepared for the future but also passionate about it. From our interactive classrooms to hands-on learning experiences, every lesson is designed to spark curiosity and a love of discovery.

              Our vision goes beyond academics. We foster an inclusive, supportive, and collaborative environment that encourages teamwork, leadership, and personal growth. Whether it's through extracurricular activities, community service, or global initiatives, our students develop a sense of responsibility and a deep understanding of their impact on the world.

              At NS Smart School, we don't just teach; we inspire, challenge, and guide each child to become the best version of themselves. Join us on this exciting journey of learning, exploration, and achievement!
            </p>
          </div>
        </div>

      </div>
    </section>

  )
}

export default Aboutus
