import { AcademicCapIcon, ArrowLeftIcon, ArrowRightIcon, BuildingOffice2Icon, Square3Stack3DIcon } from '@heroicons/react/20/solid'
import { Card, Typography } from '@material-tailwind/react'
import React from 'react'

function SlideRight(){
    let activeSlide = document.querySelector('.slide');
    let rightarrow = document.querySelector('.RightArrow');
    let leftarrow = document.querySelector('.LefttArrow');
    rightarrow.classList.add('hidden');
    leftarrow.classList.remove('hidden');
    activeSlide.classList.remove('-translate-x-full');
    activeSlide.classList.add('translate-x-0');
}

function SlideLeft(){
    let activeSlide = document.querySelector('.slide.translate-x-0');
    let rightarrow = document.querySelector('.RightArrow');
    let leftarrow = document.querySelector('.LefttArrow');
    rightarrow.classList.remove('hidden');
    leftarrow.classList.add('hidden');
    activeSlide.classList.remove('translate-x-0');
    activeSlide.classList.add('-translate-x-full');
}


export default function Navbar() {
  return (
    <>
    <div className='transition-all ease-in-out duration-1000 transform -translate-x-full slide mx-2 my-2 absolute z-50 backdrop-blur-sm md:relative md:transition-none md:translate-x-0'>
        <div className='translate-x-40 absolute my-16 md:hidden'>
            <button className='RightArrow' onClick={SlideRight}>
                <ArrowRightIcon className='h-8 w-8'/>
            </button>
            <button className='LefttArrow hidden' onClick={SlideLeft}>
                <ArrowLeftIcon className='h-8 w-8'/>
            </button>
        </div>
        <div className='basis-1/4'>
            <div className='mx-2 my-6 '>
                <Card className="h-[calc(100vh-4rem)] w-full max-w-[20rem] bg-transparent p-4">
                    <div className="mb-0 p-4">
                        <Typography variant="h5" color="blue-gray">
                            Sidebar
                        </Typography>
                    </div>
                    <div className='flex flex-col justify-around my-2 h-full '>
                        <div className='bg-white my-2 px-2 py-1 rounded-lg drop-shadow-xl'>
                            <div className="flex flex-col items-center in-rev py-2 px-2">
                                <Square3Stack3DIcon className='h-8 w-8'/>
                                <dt className="text-sm py-2">Dashboard</dt>
                            </div>
                        </div>
                        <div className='bg-white my-2 px-2 py-1 rounded-lg drop-shadow-xl'>
                            <div className="flex flex-col items-center in-rev py-2 px-2">
                                <AcademicCapIcon className='h-8 w-8'/>
                                <dt className="text-sm py-2">Study Courses</dt>
                            </div>
                        </div>
                        <div className='bg-white my-2 px-2 py-1 rounded-lg drop-shadow-xl'>
                            <div className="flex flex-col items-center in-rev py-2 px-2">
                                <BuildingOffice2Icon className='h-8 w-8'/>
                                <dt className="text-sm py-2">Admin Panel</dt>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </div>
    <div className='transition-all ease-in-out duration-1000 transform translate-x-0 slide mx-2 my-2 absolute z-50 backdrop-blur-sm md:relative'>
    </div>
    </>
  )
}
