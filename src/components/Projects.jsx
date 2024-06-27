import React,{useEffect} from 'react'
import Proj3 from '../assets/projects/shopeasy.png'
import proj1 from '../assets/projects/proj1.png'
import proj2 from '../assets/projects/proj2.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

const Projects = () => [
  {
    id: 1,
    src: proj1,
    desc: "IntelliDoc is a Diagnostic App made using ReactJS + Tailwind CSS + ExpressJS + ML models...",
    demo: "https://intelli-doc-frontend-sand.vercel.app/",
    code: "https://github.com/ashish04042004/IntelliDocAsh"
  },
  {
    id: 2,
    src: proj2,
    desc: "EHR is a Electronic Health Record App made using ReactJS + ExpressJS + MongoDB...",
    demo: "https://ehr-1-gk0j.onrender.com/",
    code: "https://github.com/ashish04042004/EHR2.0Ashversion"
  },
  {
    id: 3,
    src: Proj3,
    desc: "This Full-Stack ShopEasy e-commerce website is made using ReactJS, ExpressJS, Stripe...",
    demo: "https://product-catalog-ashen.vercel.app/",
    code: "https://github.com/ashish04042004/ShopEasyAsh"
  },
]

  return (
    <div name="projects" className='h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
          {
            Projects().map(({ id, src, desc, demo, code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
                  
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo}>Demo</a>
                  </button>
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code}>Code</a>
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects