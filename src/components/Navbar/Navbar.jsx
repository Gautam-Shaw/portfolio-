import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
// Note: Social media icons (FaGithub, FaLinkedin) are omitted as they're not visible in the expected output image.

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Assuming 'home' is the default/initial section
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll-based background change
  useEffect(() => {
    const handleScroll = () => {
      // Change background after scrolling down a small distance
      setIsScrolled(window.scrollY > 20); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle link clicks and update active section
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false); // Close mobile menu after selection
    // Add logic here to scroll to the section (e.g., using window.scrollTo or a library)
    const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (sectionId === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  };
 

  // Menu items list (matching the image: About, Skills, Experience, Projects, Education)
  const menuItems = 
  [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    // { id: "experience", label: "Experience" }, // Added 'Experience'
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }, 
  ];

  return (
    // Fixed navbar with subtle scroll effect and padding
    <nav 
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw]
      ${isScrolled ? 'bg-black bg-opacity-50 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className='text-white py-6 flex justify-between items-center'>
        
        {/* Logo: <Tarun Kaushik> (with purple/accent color) */}
        <div 
          className='text-lg font-semibold cursor-pointer'
          onClick={() => handleMenuItemClick("home")} // Go to home/top on logo click
        >
          {/* Using a shade of purple/indigo for the accent color, e.g., #8c60ff or text-indigo-400 */}
          <span className='text-[#8c60ff]'>&lt;</span>
          <span className='text-white'>Gautam</span>
          <span className='text-[#8c60ff]'> /</span> {/* Added space for 'Tarun Kaushik' */}
          <span className='text-white'>Kumar</span>
          <span className='text-[#8c60ff]'>&gt;</span>
        </div>
        
        {/* Desktop Menu Items */}
        <ul className='hidden md:flex space-x-10 text-gray-300'> {/* Increased spacing to match the image */}
          {menuItems.map((item) => (
            <li 
              key={item.id} 
              className={`cursor-pointer hover:text-[#8c60ff] transition duration-200 
                ${activeSection === item.id ? 'text-[#8c60ff] font-medium' : ''}`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu Icon (Hamburger) - Not visible in the image's desktop view, but necessary for a complete component */}
        <div className='md:hidden'>
          {isOpen ? (
            <FiX size={24} className='text-[#8c60ff] cursor-pointer' onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu size={24} className='text-[#8c60ff] cursor-pointer' onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-[#040125b5] backdrop-blur-lg shadow-lg'>
          <ul className='flex flex-col items-center space-y-4 py-4 text-gray-300'>
            {menuItems.map((item) => (
              <li key={item.id} className={`cursor-pointer hover:text-white ${activeSection === item.id ? 'text-[#8c60ff]' : ''}`}>
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;