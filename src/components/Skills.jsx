import React from 'react';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
              <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>Angular</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>TypeScript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>React</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>Git</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>Node.js</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>MongoDB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>Azure</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>Python</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>SQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>C#</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>React Native</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>AWS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>Docker</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>FastAPI</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>Flask</p>
              </div>
          </div>
      </div>
    </div>
  );
};
export default Skills;
