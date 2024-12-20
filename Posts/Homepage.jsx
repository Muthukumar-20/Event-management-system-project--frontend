import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from '@ant-design/react-slick';
import { UserDetailsContext } from '../src/App';
import App from '../src/App';



const Homepage = ({ isLoggedIn }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const { userData } = useContext(UserDetailsContext);


  //  const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };
  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  // };

  //  useEffect(()=>{
  // handleLogin()
  // handleLogout()

  //  },[])

  // console.log(userData);

  const data = [
    {
      image: '../src/images/eventimag.jpg',
      title: 'New year celebration',
    },
    {
      image: 'https://img.jakpost.net/c/2019/06/12/2019_06_12_74202_1560308728._large.jpg',
      title: 'Music Consert',
    },
    {
      image: '../src/images/event-management.jpg',
      title: 'Wedding aniversary',
    },
    {
      image: 'https://assets.smfgindiacredit.com/sites/default/files/Places-to-visit-in-india-for-navratri-celebration.jpg?VersionId=s2dRRGTirNRgGJoEB18jatHrEgHn4gMl',
      title: 'Navratri',
    },
    {
      image: 'https://media.rnztools.nz/rnz/image/upload/s--wTS3gh8L--/ar_16:10,c_fill,f_auto,g_auto,q_auto,w_1050/v1698873216/4LK6418_DSC07771_jpg?_a=BACCd2AD',
      title: 'Diwali',
    }
  ]

  const hotal = [
    {
      image: 'https://theluxuryeditor.com/wp-content/uploads/2022/08/44650311.jpeg',
      title: 'A luxurious blend of Tamil tradition and modern elegance in the heart of Chennai.',
    },
    {
      image: 'https://media.cnn.com/api/v1/images/stellar/prod/171122165337-ultimate-india-hotels-wildflower-hall-shimla-in-the-himalayas-an-oberoi-resort.jpg?q=w_4500,h_3000,x_0,y_0,c_fill',
      title: 'A regal beachfront hotel offering stunning views and world-class amenities.A regal beachfront hotel offering stunning views and world-class amenities.',
    },
    {
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/5a/17/rambagh-palace-exterior.jpg?w=1200&h=-1&s=1',
      title: 'An eco-conscious heritage retreat showcasing authentic Tamil culture.',
    },
    {
      image: 'https://assets.cntraveller.in/photos/60ba281be1b212c19a818252/master/w_1600%2Cc_limit/The-Leela-Palace-Jaipur-lead.jpg',
      title: 'A sophisticated hotel offering comfort and convenience in Coimbatore.',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhwQO31P892rGkGu7FkHB9vAJm3gTTq8ArQ&s',
      title: 'A beachfront resort with stunning views and proximity to historical landmarks.',
    }
  ]


  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };



  return (
    <>

      <herosection>

        <div className='border border-black h-[605px] flex justify-center items-center relative'>
        <div class="relative bg-[url('https://22034068.fs1.hubspotusercontent-na1.net/hubfs/22034068/raw_assets/public/apex-theme/images/backgrounds/apex-home-hero.png')] bg-cover bg-center h-[660px] w-full bg-no-repeat">
    <div class="absolute inset-0 bg-[#00002C] bg-opacity-30"></div>

    <div class="hero_section text-white relative py-20">
        <div class="wrapper mx-auto max-w-screen-xl px-6">
            <div class="hero_content">
                <div class="hero_text_container max-w-4xl">
                    <h1 class="hero-heading text-white text-6xl md:text-5xl mt-20 lg:text-7xl font-light">Welcome to the professional event management.</h1>

                    <div class="hero-text">
                        <p class="text-white text-4xl mt-12">Join us for a transformative experience.</p>
                    </div>
                </div>
   <Link to={"/register"}>
                <div class="button-box mt-12 flex justify-start">
                    <button class="bg-[#880063] text-white py-3 px-6 rounded-lg text-lg"><a href="https://www.example.com/register">Register Now</a></button>
                </div>
   </Link>

            </div>
        </div>
    </div>
</div>
  
          {/* <span className='absolute'>
            <input className=' px-4 py-3 w-[500px]  backdrop-blur-[1px] text-black rounded-xl border-2 border-orange-400 font-[sans-serif] focus:w-[600px] focus:outline-none focus:border-blue-600 transition-all duration-200 ease-linear' type="email" placeholder="Search events..." />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="z-20 absolute right-4 font-bold size-5 top-4">
              <path
                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
              </path>
            </svg>

          </span> */}


          <header className='flex py-4 px-4 sm:px-1 font-[sans-serif] min-h-[70px] tracking-wide absolute top-0 w-fit right-0'>
            <div className='flex flex-wrap items-center justify-between gap-5 w-full'>


              <div id="collapseMenu"
                className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0'>
                <button id="toggleClose" className='lg:hidden fixed top-2 right-4 rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
                    <path
                      d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                      data-original="#000000"></path>
                    <path
                      d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                      data-original="#000000"></path>
                  </svg>
                </button>

                <ul
                  className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                  <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                    <a href='javascript:void(0)'
                      className='hover:text-red-500 text-white block font-semibold text-[17px]'>Home</a>
                  </li>
                  <Link to={"/team"}>
                  <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><a href='javascript:void(0)'
                    className='hover:text-orange-500 text-white block font-semibold text-[17px]'>Team</a>
                  </li>
                  </Link>
                  <Link to={'/get_post'}>
                  <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><a href='javascript:void(0)'
                    className='hover:text-orange-500 text-white block font-semibold text-[17px]'>Events</a>
                  </li>
                  </Link>
                  <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><a href='javascript:void(0)'
                    className='hover:text-orange-500 text-white block font-semibold text-[17px]'>About</a>
                  </li>
                  <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><a href='javascript:void(0)'
                    className='hover:text-orange-500 text-white block font-semibold text-[17px]'>Contact</a>
                  </li>
                </ul>
              </div>
              {!isLoggedIn ? (
                <div className='flex max-lg:ml-auto space-x-4'>
                  <Link to={"/login"}>
                    <button
                      className='px-5 py-2 text-[15px] rounded-full font-bold text-white w-24 border-2 border-blue-500 bg-transparent hover:bg-blue-300 transition-all ease-in-out duration-300'>Login</button>
                  </Link>
                  <Link to={"/register"}>
                    <button
                      className='px-4 py-2 text-[15px] rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>Sign
                      up</button>
                  </Link>
                </div>
              ) : (
                <div className="dropdown-menu relative flex right-3 shrink-0 group">
                  <img src="https://readymadeui.com/team-1.webp" alt="profile-pic"
                    className="w-9 h-9 max-lg:w-16 max-lg:h-16 rounded-full border-2 border-gray-300 cursor-pointer" />

                  <div
                    className="dropdown-content hidden group-hover:block shadow-md p-2 bg-white rounded-md absolute top-9 right-0 w-56">
                    <div className="w-full">
                      <Link to={"/account"}>
                        <a href="javascript:void(0)"
                          className="text-sm text-gray-800 cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-3 fill-current"
                            viewBox="0 0 512 512">
                            <path
                              d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                              data-original="#000000"></path>
                          </svg>


                          Account</a>
                      </Link>
                      <hr className="my-2 -mx-2" />
                      <Link to={"/desboard"}>
                        <a href="javascript:void(0)"
                          className="text-sm text-gray-800 cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 mr-3 fill-current" viewBox="0 0 24 24">
                            <path d="M19.56 23.253H4.44a4.051 4.051 0 0 1-4.05-4.05v-9.115c0-1.317.648-2.56 1.728-3.315l7.56-5.292a4.062 4.062 0 0 1 4.644 0l7.56 5.292a4.056 4.056 0 0 1 1.728 3.315v9.115a4.051 4.051 0 0 1-4.05 4.05zM12 2.366a2.45 2.45 0 0 0-1.393.443l-7.56 5.292a2.433 2.433 0 0 0-1.037 1.987v9.115c0 1.34 1.09 2.43 2.43 2.43h15.12c1.34 0 2.43-1.09 2.43-2.43v-9.115c0-.788-.389-1.533-1.037-1.987l-7.56-5.292A2.438 2.438 0 0 0 12 2.377z" data-original="#000000"></path>
                            <path d="M16.32 23.253H7.68a.816.816 0 0 1-.81-.81v-5.4c0-2.83 2.3-5.13 5.13-5.13s5.13 2.3 5.13 5.13v5.4c0 .443-.367.81-.81.81zm-7.83-1.62h7.02v-4.59c0-1.933-1.577-3.51-3.51-3.51s-3.51 1.577-3.51 3.51z" data-original="#000000"></path>
                          </svg>
                          Dashboard

                        </a>
                      </Link>
                      <a href="javascript:void(0)"
                        className="text-sm text-gray-800 cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-3 fill-current" viewBox="0 0 24 24">
                          <path
                            d="M18 2c2.206 0 4 1.794 4 4v12c0 2.206-1.794 4-4 4H6c-2.206 0-4-1.794-4-4V6c0-2.206 1.794-4 4-4zm0-2H6a6 6 0 0 0-6 6v12a6 6 0 0 0 6 6h12a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6z"
                            data-original="#000000" />
                          <path d="M12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1z" data-original="#000000" />
                          <path d="M6 12a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1z" data-original="#000000" />
                        </svg>
                        Posts</a>
                      <a href="javascript:void(0)"
                        className="text-sm text-gray-800 cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-3 fill-current"
                          viewBox="0 0 510 510">
                          <g fillOpacity=".9">
                            <path
                              d="M255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm0 459c-112.2 0-204-91.8-204-204S142.8 51 255 51s204 91.8 204 204-91.8 204-204 204z"
                              data-original="#000000" />
                            <path d="M267.75 127.5H229.5v153l132.6 81.6 20.4-33.15-114.75-68.85z" data-original="#000000" />
                          </g>
                        </svg>
                        Schedules</a>
                      <Link to={"/login"}>
                        <a href="javascript:void(0)"
                          className="text-sm text-gray-800 cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-3 fill-current" viewBox="0 0 6 6">
                            <path
                              d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                              data-original="#000000" />
                          </svg>
                          Logout</a>
                      </Link>
                    </div>
                  </div>
                </div>
              )}


            </div>

          </header>




        </div>

      </herosection>
    
      <br />

      <div
        className="animation h-24 sm:h-3 sm:z-0 h-">

      </div>

<br />
<br />
      <section className=''>


        <div className='-10'>
          <div className='flex justify-center pt-4 '>
            <h1 className="text-4xl font-bold mb-6 text-black">Upcoming Events</h1>

          </div>

          <div className='w-3/4 m-auto'>
            <Slider {...settings}>
              {
                data.map((item, index) => {
                  return (
                    <div key={index} className=''>
                      <div>
                        <img src={item.image} className='object-contain block m-auto b-2 h-40 rounded-md pl-4' />
                      </div>

                      <div className='p-6 '>
                        <p className='font-semibold text-black text-center'>{item.title}</p>
                      </div>
                      <div className='flex justify-center'>
                        <Link to={"/get_post"}>
                          <button className='bg-orange-500 text-white rounded-md h-10 w-20'>Book</button>
                        </Link>
                      </div>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </div>
<br />
<br />
        <div className="grid md:grid-cols-2 md:items-center gap-6 md:h-[400px] font-[sans-serif] max-w-4xl mx-auto relative px-4 md:mt-4 md:before:absolute md:before:right-0 md:before:w-[300px] md:before:rounded-md md:before:h-full md:before:bg-orange-100">
      <div className="flex items-center">
        <img
          src="https://readymadeui.com/profile_3.webp"
          alt="John Doe"
          className="object-contain h-[150px] max-sm:h-32 rounded-md"
        />
        <div className="ml-6">
          <div>
            <h4 className="text-base font-semibold text-gray-800">Muthu kumar</h4>
            <p className="text-xs text-gray-500 mt-0.5">Muthu@eventmanagemant.com</p>
          </div>

          <div className="space-x-3 mt-6">
            <a
              href="javascript:void(0)"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                fill="#fff"
                viewBox="0 0 155.139 155.139"
              >
                <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" />
              </svg>
            </a>
            <a
              href="javascript:void(0)"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                fill="#fff"
                viewBox="0 0 512 512"
              >
                <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
              </svg>
            </a>
            <a
              href="javascript:void(0)"
              className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                fill="#fff"
                viewBox="0 0 24 24"
              >
                <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="relative">
        <h2 className="text-gray-800 text-2xl font-semibold">
          Prompt Delivery and Enjoyable Dining Experience.
        </h2>
        <p className="mt-6 text-sm text-gray-500">
          The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.
        </p>
      </div>
    </div>






      </section>

      <section className="p-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="tile bg-white p-4 rounded-lg shadow-lg">
            <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/78/c3/88/caption.jpg?w=1200&h=700&s=1&cx=2736&cy=1824&chk=v1_fa65978ad26491920728' className="tile__top bg-gray-300 h-48 mb-4"/>
            <h3 className="tile__title text-xl font-semibold text-gray-800">Expencive Hotals</h3>
            <p className="tile__content text-gray-600"> Luxury hotels, offer a high level of service, top-notch food, and an exceptional stay.</p>
            <div className="tile__btn-wrapper text-center mt-4">
              <a href="#tile1" className="bg-purple-600 hover:bg-purple-800 text-white py-2 px-4 rounded-md">
                Learn More
              </a>
            </div>
          </div>
          {/* Add more tiles similarly */}
        </div>
      </section>

      {/* Image-Text Section */}
      <section className="p-8 bg-gray-100">
        <div className="flex flex-col md:flex-row items-center justify-center space-x-6">
          <div className="md:w-1/2">
            <img src="https://22034068.fs1.hubspotusercontent-na1.net/hubfs/22034068/raw_assets/public/apex-theme/images/backgrounds/apex-home-hero.png" alt="Placeholder" className="rounded-lg"/>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl text-purple-700 mb-4">Environmentally Secure Event Management</h2>
            <br />
            <p className="text-gray-700 mb-4">
            services are designed to reduce environmental impact while ensuring smooth, secure, and successful events.
            </p>
            <br />
            <a href="#cta2" className="bg-red-600 hover:bg-red-800 text-white py-2 px-6 rounded-md">
              Call to Action
            </a>
          </div>
        </div>
      </section>

      {/* Curve Divider */}
      <div className="relative bg-gray-200 py-12">
        <svg className="absolute top-0 left-0 w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f5f5f5" d="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,245.3C672,224,768,192,864,170.7C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3C1440,96,1488,96,1536,101.3C1584,107,1680,117,1728,128C1776,139,1880,149,1920,160L1920,320L1920,0L0,0Z"></path>
        </svg>
      </div>
      <div className='-10'>
          <div className='flex justify-center pt-4 '>
            <h1 className="text-4xl font-bold mb-6 text-black">Most booking hotals</h1>

          </div>

          <div className='w-3/4 m-auto'>
            <Slider {...settings}>
              {
                hotal.map((item, index) => {
                  return (
                    <div key={index} className=''>
                      <div>
                        <img src={item.image} className='object-contain block m-auto b-2 h-40 rounded-md pl-4' />
                      </div>
                      <br />
                      <div className="flex justify-center space-x-1.5">
      <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
      </svg>
      <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
      </svg>
      <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
      </svg>
      <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
      </svg>
      <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
      </svg>
    </div>
                      <div className='p-6 '>
                        <p className='font-semibold text-black text-center'>{item.title}</p>
                      </div>
                      <div className='flex justify-center'>
                        <Link to={"/get_post"}>
                          <button className='bg-orange-500 text-white rounded-md h-10 w-20'>Book</button>
                        </Link>
                      </div>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </div>




      <section>
        <div className="bg-[#F7F7F7] font-[sans-serif] mt-10">
          <div className="max-w-6xl mx-auto py-16 px-4">
            <h2 className="text-gray-800 text-4xl font-extrabold text-center mb-16">Discover Our Exclusive Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#007bff" className="w-8 mb-6" viewBox="0 0 32 32">
                    <path d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z" data-original="#000000" />
                    <path d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z" data-original="#000000" />
                  </svg>
                  <h3 className="text-gray-800 text-xl font-semibold mb-3">Customization</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Tailor our product to suit your needs Tailor our product to suit your needs.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#007bff" className="w-8 mb-6" viewBox="0 0 682.667 682.667">
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000" />
                      </clipPath>
                    </defs>
                    <g fill="none" stroke="#007bff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="40" clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                      <path d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z" data-original="#000000" />
                      <path d="M178 271.894 233.894 216 334 316.105" data-original="#000000" />
                    </g>
                  </svg>
                  <h3 className="text-gray-800 text-xl font-semibold mb-3">Security</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Your data is protected by the latest security measures.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#007bff" className="w-8 mb-6" viewBox="0 0 24 24">
                    <g fill-rule="evenodd" clip-rule="evenodd">
                      <path d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z" data-original="#000000" />
                      <path d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z" data-original="#000000" />
                      <path d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z" data-original="#000000" />
                    </g>
                  </svg>
                  <h3 className="text-gray-800 text-xl font-semibold mb-3">Performance</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Experience blazing-fast performance with our product.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section>
        <div className="bg-gradient-to-r from-gray-900 vew-gray-800 to-gray-700 font-[sans-serif] p-6">
          <div className="grid lg:grid-cols-2 items-center gap-16 max-w-7xl mx-auto min-h-[350px]">
            <div>
              <h3 className="text-white text-4xl font-bold">Subscribe to Our Newsletter</h3>
              <p className="text-base mt-6 text-gray-300">Subscribe to our newsletter and stay up to date with the latest news,
                updates, and exclusive offers. Get valuable insights. Join our community today!</p>
              <div className="bg-transparent border border-gray-500 flex p-1 rounded-full mt-12">
                <input type='email' placeholder='Enter your email' className="text-gray-300 border-none w-full outline-none bg-transparent text-sm px-4 py-3" />
                <button type='submit'
                  className="bg-blue-700 hover:bg-blue-800 transition-all text-white text-sm rounded-full px-6 py-3">Submit</button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-12 mb-6 inline-block border border-gray-500 p-3 rounded-md" viewBox="0 0 32 32">
                  <path d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z" data-original="#000000" />
                  <path d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z" data-original="#000000" />
                </svg>
                <h3 className="text-white text-xl font-semibold mb-3">Customization</h3>
                <p className="text-gray-300 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 mb-6 inline-block border border-gray-500 p-3 rounded-md" viewBox="0 0 682.667 682.667">
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000" />
                    </clipPath>
                  </defs>
                  <g fill="none" className="stroke-blue-600" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="40" clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z" data-original="#000000" />
                    <path d="M178 271.894 233.894 216 334 316.105" data-original="#000000" />
                  </g>
                </svg>
                <h3 className="text-white text-xl font-semibold mb-3">Security</h3>
                <p className="text-gray-300 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      <footer className="font-sans tracking-wide bg-gray-50 px-10 pt-12 pb-6">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="max-w-md">
            <a href='javascript:void(0)'>
              <img src="https://outranking.s3.amazonaws.com/934231_Monique%20Dahito/60468988/2023-11-17T01%3A00%3A46.305102_6f3f414e-5d15-4d56-a006-05ccb7cd997a" alt="logo" className='w-36' />
            </a>
            <div className="mt-6">
              <p className="text-gray-600 leading-relaxed text-sm">"Transforming your vision into reality, we specialize in creating unforgettable events tailored to perfection. From weddings to corporate gatherings, our dedicated team ensures every detail is flawlessly executed. Let’s make your next event extraordinary. Contact us today!"

Would you like me to include social media links, a call-to-action, or other specific details?.</p>
            </div>
            <ul className="mt-10 flex space-x-5">
      <li>
        <a href="javascript:void(0)">
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-8 h-8" viewBox="0 0 49.652 49.652">
            <path d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z" />
          </svg>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 112.196 112.196">
            <circle cx="56.098" cy="56.097" r="56.098" fill="#007ab9" />
            <path fill="#fff" d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c-.027.045-.065.089-.089.132h.089v-.132c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149zm-54.96-36.642c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zm-6.791 59.77H41.27v-40.33H27.865v40.33z" />
          </svg>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 152 152">
            <linearGradient id="a" x1="22.26" x2="129.74" y1="22.26" y2="129.74" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#fae100" />
              <stop offset=".15" stopColor="#fcb720" />
              <stop offset=".3" stopColor="#ff7950" />
              <stop offset=".5" stopColor="#ff1c74" />
              <stop offset="1" stopColor="#6c1cd1" />
            </linearGradient>
            <g data-name="Layer 2">
              <g data-name="03.Instagram">
                <rect width="152" height="152" fill="url(#a)" rx="76" />
                <g fill="#fff">
                  <path fill="#ffffff10" d="M133.2 26c-11.08 20.34-26.75 41.32-46.33 60.9S46.31 122.12 26 133.2q-1.91-1.66-3.71-3.46A76 76 0 1 1 129.74 22.26q1.8 1.8 3.46 3.74z" />
                  <path d="M94 36H58a22 22 0 0 0-22 22v36a22 22 0 0 0 22 22h36a22 22 0 0 0 22-22V58a22 22 0 0 0-22-22zm15 54.84A18.16 18.16 0 0 1 90.84 109H61.16A18.16 18.16 0 0 1 43 90.84V61.16A18.16 18.16 0 0 1 61.16 43h29.68A18.16 18.16 0 0 1 109 61.16z" />
                  <path d="m90.59 61.56-.19-.19-.16-.16A20.16 20.16 0 0 0 76 55.33 20.52 20.52 0 0 0 55.62 76a20.75 20.75 0 0 0 6 14.61 20.19 20.19 0 0 0 14.42 6 20.73 20.73 0 0 0 14.55-35.05zM76 89.56A13.56 13.56 0 1 1 89.37 76 13.46 13.46 0 0 1 76 89.56zm26.43-35.18a4.88 4.88 0 0 1-4.85 4.92 4.81 4.81 0 0 1-3.42-1.43 4.93 4.93 0 0 1 3.43-8.39 4.82 4.82 0 0 1 3.09 1.12l.1.1a3.05 3.05 0 0 1 .44.44l.11.12a4.92 4.92 0 0 1 1.1 3.12z" />
                </g>
              </g>
            </g>
          </svg>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 1227 1227">
            <path d="M613.5 0C274.685 0 0 274.685 0 613.5S274.685 1227 613.5 1227 1227 952.315 1227 613.5 952.315 0 613.5 0z" />
            <path fill="#fff" d="m680.617 557.98 262.632-305.288h-62.235L652.97 517.77 470.833 252.692H260.759l275.427 400.844-275.427 320.142h62.239l240.82-279.931 192.35 279.931h210.074L680.601 557.98zM345.423 299.545h95.595l440.024 629.411h-95.595z" />
          </svg>
        </a>
      </li>
    </ul>
          </div>

          <div className="max-lg:min-w-[140px]">
            <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">Services</h4>

            <ul className="mt-6 space-y-4">
              <li>
                <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Web Development</a>
              </li>
              <li>
                <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Pricing</a>
              </li>
              <li>
                <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Support</a>
              </li>
              <li>
                <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Client Portal</a>
              </li>
              <li>
                <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Resources</a>
              </li>
            </ul>
          </div>

          <div className="max-lg:min-w-[140px]">
            <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">Platforms</h4>
            <ul className="space-y-4 mt-6">
              <li>
                <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Hubspot</a>
              </li>
              <li>
                <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Integration Services</a>
              </li>
              <li>
                <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Marketing Glossar</a>
              </li>
              <li>
                <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>UIPath</a>
              </li>
            </ul>
          </div>

          <div className="max-lg:min-w-[140px]">
            <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">Company</h4>

            <ul className="space-y-4 mt-6">
              <li>
                <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>About us</a>
              </li>
              <li>
                <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Careers</a>
              </li>
              <li>
                <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Blog</a>
              </li>
              <li>
                <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Portfolio</a>
              </li>
              <li>
                <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Events</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-10 mb-6 border-gray-300" />

        <div className="flex flex-wrap max-md:flex-col gap-4">
          <ul className="md:flex md:space-x-6 max-md:space-y-2">
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Terms of Service</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Privacy Policy</a>
            </li>
            <li>
              <a href='javascript:void(0)' className='hover:text-gray-800 text-gray-600 text-sm'>Security</a>
            </li>
          </ul>

          <p className='text-gray-600 text-sm md:ml-auto'>© Event mangement. All rights reserved.</p>
        </div>
      </footer>

    </>
  );
};

export default Homepage;