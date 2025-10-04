import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate=useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
       
        <header className=" p-4 w-full fixed z-50 bg-[#14131345] backdrop-blur-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div onClick={()=>{navigate('/')}} className="text-white font-Enriqueta w-9 text-center text-xl border-2 border-dotted rounded-full">NS</div>

        {/* Hamburger Icon */}
        <div className="lg:hidden" onClick={toggleMenu}>
          <button  className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <nav className="hidden lg:flex space-x-6">
          <a href="#home" className="text-white font-Enriqueta hover:underline hover:text-gray-200">Home</a>
          <a href="#about" className="text-white font-Enriqueta hover:underline hover:text-gray-200">About</a>
          <a href="#features" className="text-white font-Enriqueta hover:underline hover:text-gray-200">Services</a>
          <a href="#gallery" className="text-white font-Enriqueta hover:underline hover:text-gray-200">Gallery</a>
          <a href="#contact-us" className="text-white font-Enriqueta hover:underline hover:text-gray-200">Contact</a>
          <Link to="/login" title='admin' className="text-white font-Enriqueta hover:text-gray-200">
             <AccountCircleIcon/>
          </Link>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden z-50 absolute top-16 left-0 w-full bg-black/40 p-4 transition-all duration-300  ease-in-out ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <nav>
            <a href="#home" className="block font-Enriqueta hover:underline text-white py-2">Home</a>
            <a href="#about" className="block font-Enriqueta hover:underline text-white py-2">About</a>
            <a href="#features" className="block font-Enriqueta hover:underline text-white py-2">Services</a>
            <a href="#gallery" className="block font-Enriqueta hover:underline text-white py-2">Gallery</a>
            <a href="#contact-us" className="block font-Enriqueta hover:underline text-white py-2">Contact</a>
            {/* <Link to="/admin" className="block font-Enriqueta  text-white py-2">Admin</Link> */}
          </nav>
        </div>
      </div>
        </header>
    )
}

export default Navbar
