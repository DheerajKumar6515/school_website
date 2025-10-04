
import 'font-awesome/css/font-awesome.min.css';

export default function Features() {
  
  return (
  
    <section className="py-12 bg-white relative" id="features">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className='absolute  '><img className='w-48' src="./src/images/png1.png" alt="png img" /></div>
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 font-Enriqueta">Why Choose Us?</h2>
        <p className="mt-4 text-base md:text-base text-gray-600 max-w-3xl mx-auto font-Roboto">
          Discover the unique features that make our school stand out and help your child succeed in a rapidly
          changing world. Here at NS Smart School, we provide an environment that promotes holistic growth and development.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="text-center bg-blue-50 p-6 rounded-lg shadow-lg">
          <div className="text-blue-500 text-4xl mb-4">
          <i className="fas fa-users"></i> {/* Icon (replace with actual icon) */}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 font-Enriqueta">Qualified Teachers</h3>
          <p className="mt-4 text-gray-600 font-Roboto">
            Our teachers are highly trained and passionate about guiding students toward academic excellence.
          </p>
        </div>

        <div className="text-center bg-green-50 p-6 rounded-lg shadow-lg">
          <div className="text-green-500 text-4xl mb-4">
            <i className="fas fa-building"></i> {/* Icon (replace with actual icon) */}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 font-Enriqueta">Modern Facilities</h3>
          <p className="mt-4 text-gray-600 font-Opensans">
            We provide a state-of-the-art learning environment with modern classrooms, labs, and recreational areas.
          </p>
        </div>

        <div className="text-center bg-yellow-50 p-6 rounded-lg shadow-lg">
          <div className="text-yellow-500 text-4xl mb-4">
            <i className="fas fa-users"></i> {/* Icon (replace with actual icon) */}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 font-Enriqueta">Strong Community</h3>
          <p className="mt-4 text-gray-600 font-Opensans">
            We foster a strong sense of community among students, parents, and teachers, creating a supportive network.
          </p>
        </div>

        <div className="text-center bg-purple-50 p-6 rounded-lg shadow-lg">
          <div className="text-purple-500 text-4xl mb-4">
            <i className="fas fa-flask"></i> {/* Icon (replace with actual icon) */}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 font-Enriqueta">Innovative Learning</h3>
          <p className="mt-4 text-gray-600 font-Opensans">
            We embrace innovative teaching methods, incorporating technology and creative activities into our curriculum.
          </p>
        </div>

        <div className="text-center bg-teal-50 p-6 rounded-lg shadow-lg">
          <div className="text-teal-500 text-4xl mb-4">
            <i className="fas fa-heart"></i> {/* Icon (replace with actual icon) */}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 font-Enriqueta">Holistic Education</h3>
          <p className="mt-4 text-gray-600 font-Opensans">
            We believe in developing the whole child, focusing not just on academics but also on emotional and social growth.
          </p>
        </div>

        <div className="text-center bg-red-50 p-6 rounded-lg shadow-lg">
          <div className="text-red-500 text-4xl mb-4">
          <i className="fas fa-users"></i>{/* Icon (replace with actual icon) */}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 font-Enriqueta">Personalized Approach</h3>
          <p className="mt-4 text-gray-600 font-Opensans">
            We understand that every child learns differently, so we offer personalized learning experiences tailored to each student.
          </p>
        </div>
      </div>
    </div>
  </section>

  );
}
