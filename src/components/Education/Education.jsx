import React from 'react'
import { education } from '../../constants' // Assuming this import provides the data array

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my academic journey, degrees, and acquired skills.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {/* Added safe check for 'education' array */}
        {education && education.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              // This aligns the content section to the right or left of the center line
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle (remains unchanged) */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={item.img}
                alt={item.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section (FIXED: Margins for Alternating Layout) */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] 
                
                // Base margin for mobile (pushes content away from left line)
                ml-8 
                
                // Conditional margins for large screens (sm)
                ${
                  index % 2 === 0 // Right side content
                    ? "sm:ml-[calc(50%+4rem)] sm:mr-0" 
                    : "sm:mr-[calc(50%+4rem)] sm:ml-0" // Left side content
                }
                
                transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* Company Logo/Image */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, Institution, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {item.role} {/* Now representing Degree/Course */}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {item.company} {/* Now representing Institution Name */}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{item.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{item.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills/Subjects:</h5>
                <ul className="flex flex-wrap mt-2">
                  {/* Added safe check for 'skills' array */}
                  {item.skills && item.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex} // Changed key name to avoid conflict
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education