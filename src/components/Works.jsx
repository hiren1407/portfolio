import React from 'react';
import currency from '../assets/currency.png';
import ecommerce from '../assets/ecommerce.jpeg'
import facial from '../assets/facial.jpeg'
import weather from '../assets/weather.jpeg'
import netflix from '../assets/netflix.png'
import youtube from '../assets/youtube.png'
import upskilled from '../assets/upskilled.jpeg'
import dev from '../assets/dev.png'
import travelagent from '../assets/travelagent.png'

const Works = () => {
  return (
    <div name='work' className='w-full h-auto text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Works
          </p>
          <p className='py-6 text-2xl'>Check out my projects.</p>
        </div>
{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid Item */}
            <div
            style={{ backgroundImage: `url(${travelagent})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                TravelBuddy
              </span>
              <p className='text-center'>Developed a smart travel app using React, FastAPI, and Gemini AI, offering AI-based trip planning and real-time chatbot support. Integrated third-party APIs to provide live data on flights, hotels, restaurants, and attractions, ensuring a seamless travel experience.



</p>
              <div className='pt-8 text-center'>
                <a href='https://travel-buddy-aiagent.vercel.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live Demo
                  </button>
                </a>
                <a href='https://github.com/hiren1407/TravelBuddy-Frontend'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            <div
            style={{ backgroundImage: `url(${upskilled})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                UpSkilled
              </span>
              <p className='text-center'>An ELMS platform made with React, Tailwind, Redux, Java Spring backend, and MySQL. Includes role-based access for admin, instructor, and employee roles.

</p>
              <div className='pt-8 text-center'>
                <a href='https://upskilled.vercel.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live Demo
                  </button>
                </a>
                <a href='https://github.com/hiren1407/UpSkilled-Frontend'>
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
                FaceMark
              </span>
              <p className='text-center'>Created a web and desktop application for automated attendance using facial recognition. Built with React, Node.js, and Python (Tkinter, OpenCV), the system streamlines leave management and attendance tracking with high accuracy and scalability.
</p>
              <div className='pt-8 text-center'>
              <a href='https://smartcam.vercel.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live Demo
                  </button>
                </a>
                <a href='https://github.com/hiren1407/smartcam-desktop'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${dev})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                DevTinder
              </span>
              <p className='text-center'>Developed a full-stack networking app for developers using React, Tailwind CSS, Node.js, and MongoDB, allowing developers to connect through connection requests.

</p>
              <div className='pt-8 text-center'>
                <a href='http://43.204.112.221'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live Demo
                  </button>
                </a>
                <a href='https://github.com/hiren1407/devTinder-ui'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

            <div
            style={{ backgroundImage: `url(${youtube})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                ReactTube
              </span>
              <p className='text-center'>A dynamic YouTube frontend application using React, Tailwind, and Redux. Integrated features include live chat, YouTube API calls, and debouncing for performance optimization.

</p>
              <div className='pt-8 text-center'>
                <a href='https://hiren-youtube.vercel.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live Demo
                  </button>
                </a>
                <a href='https://github.com/hiren1407/My-Youtube'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

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
