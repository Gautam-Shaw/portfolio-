import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
const About = () => {
  return (
    <section id="about" className=" px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt- md:mt-24 lg:mt-10">
      <div className='flex flex-col-reverse md:flex-row justify-between items-center '>
        {/* left side */}
        <div className=' md:w-1/2 text-center md:text-left  md:mt-0'>
          {/* greading */}
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white  leading-tight'>
            Hi, I am
          </h1>
          <h2 className='text-4xl sm:text-6xl font-bold text-white mb-4 leading-tight'>
            Gautam Kumar
          </h2>
          {/* skills */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] mb-4 leading-tight'>
            <span className='text-white'>
              I am a &nbsp;
            </span>
            <ReactTypingEffect
              text={[" Full Stack Developer.", " UI Developer", " Backend Developer", "Software Developer"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className='text-[#8245ec]'>{cursor}</span>)}
            ></ReactTypingEffect>
          </h3>
          {/* about me */}
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
            I am a passionate and dedicated developer with expertise in both front-end and back-end technologies. I love creating dynamic and responsive web applications that provide an exceptional user experience. With a strong foundation in programming and a keen eye for design, I strive to build efficient and scalable solutions that meet client needs.
          </p>
          {/* reume button */}
          <a href="/src/assets/Gautam_Kumar_Shaw.pdf"
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block bg-[#8245ec] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#6829e0] transition duration-300'
          style={{background: 'linear-gradient(90deg, #8245ec 0%, #5a31f4 100%)',
          boxShadow: '0 4px 15px rgba(130, 69, 236, 0.3)'

          }}
          >Download Resume</a>
        </div>
        {/* right side */}
        <div className='md:w-1/2 mb-10 md:justify-end flex justify-center'>
          <Tilt
            className='w-46 h-46 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full'
          >
            <img
              src="/src/assets/profile.jpg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About
