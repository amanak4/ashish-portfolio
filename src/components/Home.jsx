import React, { useEffect } from 'react'
import Dp from "../assets/cvphoto.jpg"
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll'
import '../App.css'
import { HiOutlineMail } from 'react-icons/hi'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Home = () => {
    useEffect(()=> {
        AOS.init({duration: 1000})
    })
    return (
        <div name="home" className='h-auto w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center
                            justify-center  px-4 md:flex-row text-white'>
                <div className='flex flex-col justify-center'>
                    <div>
                        <img src={Dp} alt="my profile" data-aos="fade-in" data-aos-duration="500" className='mt-20 rounded-2xl w-1/3 md:w-1/3 lg:w-1/5 my-5 hover:scale-105 duration-300 sm:ease-in' />
                    </div>
                            <h2 data-aos="fade-in" data-aos-duration="1000" className='text-4xl sm:text-6xl font-bold text-white'>Ashish Singh
                             | <span data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="1000" className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black'>Full-Stack Developer</span></h2>
                            <p data-aos="fade-in" data-aos-delay="400" data-aos-duration="2000" className='text-gray-400 py-4 max-w-md w-full'>
                            Hello! I'm Ashish Singh,3rd year CSE Undergraduate at IIT(ISM) Dhanbad, a dedicated competitive programmer, full stack web developer, and student internship representative.

As a Competitive Programmer, I excel in solving complex problems and have secured top positions in various coding competitions.

In Full Stack Web Development, I build robust, user-friendly applications using technologies like HTML, CSS, JavaScript, React, Node.js, and more. 



 I am eager to contribute to innovative projects and collaborate with like-minded individuals. Let's connect and create something amazing together!.
                            </p>
                            {/* <p data-aos="fade-in" data-aos-delay="800" data-aos-duration="2000" className='text-gray-400 py-4 max-w-md'>
                                Co-Lead GDSC RKMGEC, Creator @codewithbiki, Google Cloud Facilitator, In-Charge E-Cell RKMGEC...
                            </p> */}

                    <div className='flex flex-row gap-2'>
                        <Link to="projects" smooth duration={500} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000" className='group rounded bg-gradient-to-r from-blue-600 to-cyan-600 w-1/3 h-8 flex items-center justify-center cursor-pointer mt-5 mb-28' >Portfolio

                            <span className='px-2 group-hover:rotate-90 duration-300'>
                                <MdOutlineArrowRightAlt size={25} />
                            </span>
                        </Link>
                        <a target='_blank' rel="noreferrer"  href="mailto:ashishsingh28979@gmail.com" smooth duration={500} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2500" className='group hover:scale-105 rounded w-auto h-8 p-3 flex items-center bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-600 justify-center cursor-pointer mt-5 mb-28' >

                            <span className='pr-2'>
                                <HiOutlineMail size={25} />
                            </span>
                            Hire Me
                        </a>
                        <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/ashish-singh-681b84253/" smooth duration={550} data-aos="fade-up" data-aos-delay="2000" data-aos-duration="3000" className='group hover:scale-105 rounded w-auto h-8 px-1 flex items-center bg-none justify-center cursor-pointer mt-5 mb-28' >

                            <span >
                            <BsLinkedin size={25}></BsLinkedin>
                            </span>
                        </a>
                        <a target='_blank' rel="noreferrer" href="https://github.com/ashish04042004" smooth duration={600} data-aos="fade-up" data-aos-delay="3000" data-aos-duration="3500" className='group hover:scale-105 rounded w-auto h-8 px-1 flex items-center bg-none justify-center cursor-pointer mt-5 mb-28' >

                            <span >
                            <BsGithub size={25}></BsGithub>
                            </span>
                        </a>
                        <a target='_blank' rel="noreferrer" href="https://www.instagram.com/.ashishsingh.?igsh=azc0bjQ1bW1vcWg1" smooth duration={650} data-aos="fade-up" data-aos-delay="2500" data-aos-duration="2000" className='group hover:scale-105 rounded w-auto h-8 px-1 flex items-center bg-none justify-center cursor-pointer mt-5 mb-28' >

                            <span >
                            <BsInstagram size={25}></BsInstagram>
                            </span>
                        </a>
                    </div>

                </div>


            </div>
                
        </div>
    )
}

export default Home