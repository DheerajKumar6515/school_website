
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loginform = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    //console.log("Email:", email, "Password:", password);
    if(email == 'admin123@gmail.com' && password == 'admin123'){
       navigate('/admin')
       setEmail(''),
       setPassword('')
    }else{
      navigate('/login')
      setEmail(''),
       setPassword('')
    }
          
  };

  return (
    <div className="min-h-screen bg-[url(/png4.png)] bg-[#faebd7] bg-no-repeat bg-left  flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6 font-Opensans">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="w-full py-2 cursor-pointer bg-[#f8b248] text-white rounded-lg text-lg font-semibold hover:opacity-80 transition-all">Login</button>

          <div className="mt-4 text-center">
            <p className="text-sm  text-gray-600 font-Opensans">Don't have an account? <a onClick={()=>{navigate('/signup')}} className="text-blue-500 cursor-pointer">Sign up</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Loginform;
