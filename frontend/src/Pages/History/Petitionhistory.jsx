import React from 'react'
import Timeline from "./Timeline";
 import "./timeline.css";
import "./history.css";

const Petitionhistory = () => {
  return (
    <>
      <div>
            <div className="histo">
            <div className='p-5'>
               <div className=' w-full lg:max-w-full lg:flex'>
                  <div className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden' style={{ backgroundImage: `url(/images/image1.jpg)` }} title='Mountain'></div>
                  <div style={{ width: "25vw" }} className='back border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-900 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
                     <div className='mb-8'>
                        <div className='text-white font-bold text-xl mb-2'>Campaign</div>
                        <p className='text-white '>Without Rs 26.5 Lakhs, I Might Lose My 2-Year-Old Child</p>
                     </div>
                  </div>
                  <div className=' back border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-900  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
                     <div className='mb-8'>
                        <div className='flex items-center space-x p-4'>
                           <button className='flex space-x-2 items-center px-3 py-2 bg-rose-500 hover:bg-rose-800 rounded-md drop-shadow-md'>
                              <svg className='fill-white' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='20' height='20' viewBox='0 0 24 24'>
                                 <path d='M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z'></path>
                              </svg>
                              <span className='text-white'>Delete</span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='p-5'>
               <div className=' w-full lg:max-w-full lg:flex'>
                  <div className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden' style={{ backgroundImage: `url(/images/image2.jpg)` }} title='Mountain'></div>
                  <div style={{ width: "25vw" }} className=' back border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-900  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
                     <div className='mb-8'>
                        <div className='text-white font-bold text-xl mb-2'>Campaign</div>
                        <p className='text-white'>I lost my husband,don’t let me lose my daughter too.</p>
                     </div>
                  </div>
                  <div className='back border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-900  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
                     <div className='mb-8'>
                        <div className='flex items-center space-x p-4'>
                           <button className='flex space-x-2 items-center px-3 py-2 bg-rose-500 hover:bg-rose-800 rounded-md drop-shadow-md'>
                              <svg className='fill-white' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='20' height='20' viewBox='0 0 24 24'>
                                 <path d='M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z'></path>
                              </svg>
                              <span className='text-white'>Delete</span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            </div>
        <div className="histo2">
      <div className="white-bk dashboard-timeline-row">
      <div className="">
        <h4 className=" dashboard-heading text-white">Timeline</h4>
      </div>
      <hr />
      <ul className="dashboard-timeline">
        <li className="dashboard-timeline-item">
          <div className="dashboard-timeline-info">
            <span>2nd September 2021</span>
          </div>
          <div className="dashboard-timeline-marker"></div>
          <div className="dashboard-timeline-content">
            <h3 className="dashboard-timeline-title">IBeTo Launch</h3>
          </div>
        </li>

        <li className="dashboard-timeline-item">
          <div className="dashboard-timeline-info">
            <span>19th September 2021</span>
          </div>
          <div className="dashboard-timeline-marker"></div>
          <div className="dashboard-timeline-content">
            <h3 className="dashboard-timeline-title">Registration Closes</h3>
          </div>
        </li>

        <li className="dashboard-timeline-item">
          <div className="dashboard-timeline-info">
            <span>23rd September 2021</span>
          </div>
          <div className="dashboard-timeline-marker"></div>
          <div className="dashboard-timeline-content">
            <h3 className="dashboard-timeline-title">Idea submission</h3>
          </div>
        </li>

        <li className="dashboard-timeline-item">
          <div className="dashboard-timeline-info">
            <span>27th September 2021</span>
          </div>
          <div className="dashboard-timeline-marker"></div>
          <div className="dashboard-timeline-content">
            <h3 className="dashboard-timeline-title">
              Announcement of shortlisted teams
            </h3>
          </div>
        </li>
        <li className="dashboard-timeline-item">
          <div className="dashboard-timeline-info">
            <span>7th October 2021</span>
          </div>
          <div className="dashboard-timeline-marker"></div>
          <div className="dashboard-timeline-content">
            <h3 className="dashboard-timeline-title">
              Round 1: Detailed Abstract Submission
            </h3>
          </div>
        </li>
        <li className="dashboard-timeline-item">
          <div className="dashboard-timeline-info">
            <span>14th October 2021</span>
          </div>
          <div className="dashboard-timeline-marker"></div>
          <div className="dashboard-timeline-content">
            <h3 className="dashboard-timeline-title">
              Announcement of shortlisted teams
            </h3>
          </div>
        </li>
        <li className="dashboard-timeline-item">
          <div className="dashboard-timeline-info">
            {/* <span>14th October 2021</span> */}
          </div>
          <div className="dashboard-timeline-marker"></div>
          <div className="dashboard-timeline-content">
            <h3 className="dashboard-timeline-title">
              End of phase 1 : Ideate
            </h3>
          </div>
        </li>
      </ul>
      </div>
    </div>
    </div>
    </>
  )
}

export default Petitionhistory
