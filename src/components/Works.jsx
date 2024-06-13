import React from 'react';
import currency from '../assets/currency.png';
import ecommerce from '../assets/ecommerce.jpeg'
import facial from '../assets/facial.jpeg'
import weather from '../assets/weather.jpeg'
import netflix from '../assets/netflix.png'

const Works = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Work
          </p>
          <p className='py-6 text-2xl'>Check out my projects.</p>
        </div>
{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid Item */}

            <div
            style={{ backgroundImage: `url(${netflix})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                NetflixGemini
              </span>
              <p className='text-center'>A Netflix-like movie recommendation app using React.js, Redux, and Tailwind CSS. Integrated Firebase for user authentication and Gemini APIs for personalized movie suggestions.</p>
              <div className='pt-8 text-center'>
                <a href='https://hiren-netflix-gemini.vercel.app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live Demo
                  </button>
                </a>
                <a href='https://github.com/hiren1407/netflix-gemini'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          <div
            style={{ backgroundImage: `url(${ecommerce})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                PostKarde.com
              </span>
              <p className='text-center'>An e-commerce website using Angular, Node.js and MongoDB on which users can buy and sell anything like properties, vehicles, electronic devices etc.</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/hiren1407/postkarde.com'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${facial})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Smart Cam
              </span>
              <p className='text-center'>A facial recognition-based faculty attendance system using Python, OpenCV and MongoDB in which faculties in the institutional organization can mark their attendance by looking into the camera.
</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/hiren1407/smartcam'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${weather})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Weather App
              </span>
              <p className='text-center'>A cross-platform app incorporating React Native through which a user can get weather updates around the globe.</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/hiren1407/weather-app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${currency})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Currency Converter App
              </span>
              <p className='text-center'>A cross-platform app using React Native on which a user can convert one currency into another to check its corresponding value and get the exchange rates of different currencies.</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/hiren1407/currency-converter'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};
export default Works;
