import Navbar from '../Components/Navbar';
import DashboardTop from '../Components/Dashboard_Top';
import Subjects from '../Components/Subjects';
import Questions from '../Components/Questions';

export default function Home() {
  return (
    <div className='flex flex-col md:flex-row h-screen bg-slate-200'>
        {/* Side Bar */}
        <div className='relative'>
            <Navbar/>
        </div>
        {/* Main Dashboard */}
        <div className='base-3/4 bg-slate-200 md:mt-10'>
            <div className="mt-0 mx-10 md:flex  lg:flex lg:justify-between">
                <div>
                </div>
                <div className='md:w-[calc(200vh-12rem)] screen pb-1 relative bg-slate-200'>
                    < DashboardTop/>
                    <Subjects/> 
                </div>
            </div>
            <div className='w-full mb-0 pb-0 bg-slate-200'>
                < Questions/>
            </div>
        </div>
    </div>
  )
}
