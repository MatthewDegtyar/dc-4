import RootLayout from '@/styles/RootLayout'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { RxCaretRight } from 'react-icons/rx';
import Link from 'next/link';

const EmbedVideo = (props) => {
    const videoRef = useRef(null);
  
    useEffect(() => {
      const video = videoRef.current;
  
      const playVideoOnLoad = () => {
        if (video) {
          video.play().catch((error) => {
            // Autoplay was prevented, handle the error if needed
            console.error('Autoplay prevented:', error);
          });
        }
      };
  
      playVideoOnLoad();
  
      return () => {
        // Clean up any event listeners or resources if needed
      };
    }, []);
  
    return (
      <video
        ref={videoRef}
        className={props.className}
        playsInline
        loop
        muted
      >
  
        <source src={props.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  };

const Home = () => {
  return (
    <RootLayout pageTitle='Home'>
        <div className='flex flex-row bg-black'>

            <div className='w-[50vw] h-[80vh] overflow-hidden rounded-[1px] flex flex-col'>
                <div className='w-[50vw] bg--800 h-[40vh]'>
                <EmbedVideo src='/video/hero.mp4' className="h-[80vh] z-0 object-cover w-fit" />

                </div>
                <div className='w-[50vw] bg--800 h-[40vh]'>

                </div>
            </div>
            <div className='text-black w-[50vw] h-[80vh] bg- flex flex-col itmes-center  justify-center place-items-center'>
                <div className='w-96 flex flex-col p-8 bg-black/50 rounded-[1px] gap-2'>
                    <h1 className='text-title text-white'>Make An Impact</h1>
                    <h2 className='text-white'>We’re a creative digital agency strengthening causes, growing businesses, and empowering organizations online.</h2>
                </div>
            </div>
        </div>
        <div className='mt-2 h-[60vh] gap-0 flex flex-row '>
            <div className='w-[30vw] bg-hero-pattern bg-center bg-cover p-8 bg-no-repeat bg-orange-500 h-[60vh] rounded-l-[1px]'>
                <div className='bg-black/60 rounded-[1px] flex flex-col gap-2 p-6 items-start justify-center text-white w-full h-full'>
                    <h3 className='text-h3'>White Label Templates</h3>
                    <p>Become your own one-stop-shop for your clients' needs.</p>
                </div>
                
            </div>

            <div className='w-[70vw] bg-black flex flex-col p-16 rounded-r-[1px]'>
                
                <div className='bg-black/0 flex flex-col gap-2 px-6 items-center  text-white w-full h-full'>
                    <h4 className='text-h3'>How It Works</h4>
                    <p>We design and build a multifunctional template, you deliver it to your clients.</p>
                </div>
                <div className='flex flex-row gap-4'>
                    <div className='flex text-sub text-white flex-col items-center' alt='item'>
                            <div className='overflow-hidden '>
                            <div className='mb-2'>
                                    <ul className=' text-center top-0'>Build 2</ul>
                                </div>
                                <Link onClick={()=>handleCloseAll()} href='/featured/'>
                                    <Image
                                        className='hover:sm:scale-125 hover:scale-150  transition-transform duration-300'
                                        src='/img/20.png'
                                        width={300}
                                        height={720}
                                        alt='car'
                                    />
                                </Link>
                            </div>
                            <div className='self-center hidden lg:shown lg:flex'>
                                <p className='text-center mt-3 font-medium  underline-animation-white'><Link href='/featured/'>Learn More</Link></p>
                            </div>
                    </div>
                    <div className='flex text-sub text-white flex-col items-center' alt='item'>
                            <div className='overflow-hidden '>
                            <div className='mb-2'>
                                    <ul className=' text-center top-0'>Build 2</ul>
                                </div>
                                <Link onClick={()=>handleCloseAll()} href='/featured/'>
                                    <Image
                                        className='hover:sm:scale-125 hover:scale-150  transition-transform duration-300'
                                        src='/img/20.png'
                                        width={300}
                                        height={720}
                                        alt='car'
                                    />
                                </Link>
                            </div>
                            <div className='self-center hidden lg:shown lg:flex'>
                                <p className='text-center mt-3 font-medium  underline-animation-white'><Link href='/featured/'>Learn More</Link></p>
                            </div>
                    </div>
                    <div className='flex text-sub text-white flex-col items-center' alt='item'>
                            <div className='overflow-hidden '>
                            <div className='mb-2'>
                                    <ul className=' text-center top-0'>Build 2</ul>
                                </div>
                                <Link onClick={()=>handleCloseAll()} href='/featured/'>
                                    <Image
                                        className='hover:sm:scale-125 hover:scale-150  transition-transform duration-300'
                                        src='/img/20.png'
                                        width={300}
                                        height={720}
                                        alt='car'
                                    />
                                </Link>
                            </div>
                            <div className='self-center hidden lg:shown lg:flex'>
                                <p className='text-center mt-3 font-medium  underline-animation-white'><Link href='/featured/'>Learn More</Link></p>
                            </div>
                    </div>
                    <div className='flex text-sub text-white flex-col items-center' alt='item'>
                            <div className='overflow-hidden '>
                            <div className='mb-2'>
                                    <ul className=' text-center top-0'>Build 2</ul>
                                </div>
                                <Link onClick={()=>handleCloseAll()} href='/featured/'>
                                    <Image
                                        className='hover:sm:scale-125 hover:scale-150  transition-transform duration-300'
                                        src='/img/20.png'
                                        width={300}
                                        height={720}
                                        alt='car'
                                    />
                                </Link>
                            </div>
                            <div className='self-center hidden lg:shown lg:flex'>
                                <p className='text-center mt-3 font-medium  underline-animation-white'><Link href='/featured/'>Learn More</Link></p>
                            </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='mt-2 h-[40vh] gap-0 flex flex-row '>
            <div className='w-[70vw] bg-black flex flex-row gap-2 justify-center items-center p-8 rounded-[1px]'>

                <div className="h-fit w-fit group text-white overflow-hidden " alt='item'>               
                    <div className="relative transition-all duration-300 overflow-hidden">
                        <div className='flex flex-col items-start'>
                            <div className="bg-blue-500 filter-none w-72 h-72 object-center xl:hover:opacity-0 xl:transition-all xl:duration-75 object-cover" src='/img/car33.webp'></div>
                            <div className='text-start text-white justify-between flex flex-row gap-2 absolute bottom-4 p-4 text-3xl xl:transition-all xl:duration-300 xl:group-hover:-translate-y-48 font-bold bg-transparent'>
                                <h5>SEO</h5>
                                <RxCaretRight color='white' className='xl:group-hover:rotate-90 transition-all duration-300' size={45}/>
                            </div>
                            <ul className='text-sub flex flex-col font-normal absolute bottom-4 p-4 opacity-0 xl:group-hover:opacity-100 xl:group-hover:-translate-y-20 transition-all duration-50'>
                                <p>Competitive Analysis</p>
                                <p>Keyword Tracking</p>
                                <p>More Stuff</p>
                                <p>Policy 4</p>
                            </ul>

                        </div>

                        <Link href='/about#policies' alt='' className="absolute text-end transition-all duration-900 h-full w-full flex-col  bg- -bottom-0 flex justify-end items-center xl:group-hover:bottom-0 opacity-0 xl:group-hover:opacity-100">
                            <p className='font-medium hover:underline mb-4'>Learn More</p>
                        </Link>
                    </div>
                </div>
                <div className="h-fit w-fit group text-white overflow-hidden " alt='item'>               
                    <div className="relative transition-all duration-300 overflow-hidden">
                        <div className='flex flex-col items-start'>
                            <div className="bg-sky-500 filter-none w-72 h-72 object-center xl:hover:opacity-0 xl:transition-all xl:duration-75 object-cover" src='/img/car33.webp'></div>
                            <div className='text-start text-white justify-between flex flex-row gap-2 absolute bottom-4 p-4 text-3xl xl:transition-all xl:duration-300 xl:group-hover:-translate-y-48 font-bold bg-transparent'>
                                <h5>Google Ads</h5>
                                <RxCaretRight color='white' className='xl:group-hover:rotate-90 transition-all duration-300' size={45}/>
                            </div>
                            <ul className='text-sub flex flex-col font-normal absolute bottom-4 p-4 opacity-0 xl:group-hover:opacity-100 xl:group-hover:-translate-y-20 transition-all duration-50'>
                                <p>Policy 1</p>
                                <p>Policy 2</p>
                                <p>Policy 3</p>
                                <p>Policy 4</p>
                            </ul>

                        </div>

                        <Link href='/about#policies' alt='' className="absolute text-end transition-all duration-900 h-full w-full flex-col  bg- -bottom-0 flex justify-end items-center xl:group-hover:bottom-0 opacity-0 xl:group-hover:opacity-100">
                            <p className='font-medium hover:underline mb-4'>Learn More</p>
                        </Link>
                    </div>
                </div>
                <div className="h-fit w-fit group text-white overflow-hidden " alt='item'>               
                    <div className="relative transition-all duration-300 overflow-hidden">
                        <div className='flex flex-col items-start'>
                            <div className="bg-cyan-500 filter-none w-72 h-72 object-center xl:hover:opacity-0 xl:transition-all xl:duration-75 object-cover" src='/img/car33.webp'></div>
                            <div className='text-start text-white justify-between flex flex-row gap-2 absolute bottom-4 p-4 text-3xl xl:transition-all xl:duration-300 xl:group-hover:-translate-y-48 font-bold bg-transparent'>
                                <h5>Social Media</h5>
                                <RxCaretRight color='white' className='xl:group-hover:rotate-90 transition-all duration-300' size={45}/>
                            </div>
                            <ul className='text-sub flex flex-col font-normal absolute bottom-4 p-4 opacity-0 xl:group-hover:opacity-100 xl:group-hover:-translate-y-20 transition-all duration-50'>
                                <p>Policy 1</p>
                                <p>Policy 2</p>
                                <p>Policy 3</p>
                                <p>Policy 4</p>
                            </ul>

                        </div>

                        <Link href='/about#policies' alt='' className="absolute text-end transition-all duration-900 h-full w-full flex-col  bg- -bottom-0 flex justify-end items-center xl:group-hover:bottom-0 opacity-0 xl:group-hover:opacity-100">
                            <p className='font-medium hover:underline mb-4'>Learn More</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-[30vw] bg-hero-pattern2 bg-center bg-cover p-8 bg-red-500 h-[40vh] rounded-[1px]'>
                <div className='bg-black/60 rounded-[1px] flex flex-col gap-2 p-6 items-start justify-center text-white w-full h-full'>
                    <h3 className='text-h3'>Digital Marketing</h3>
                    <p>Become your own one-stop-shop for your clients' needs.</p>
                </div>
            </div>
        </div>
    </RootLayout>
  )
}

export default Home
