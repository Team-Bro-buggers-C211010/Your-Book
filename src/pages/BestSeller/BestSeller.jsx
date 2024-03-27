import { useLoaderData } from "react-router-dom"
import location from '../../assets/images/locations.png';
import publisher from '../../assets/images/pubisher.png';
import page from '../../assets/images/page.png';
import { useEffect, useState } from "react";
const BestSeller = () => {
const reads = useLoaderData();
const [sortData,setSortData] = useState([]);
const sortedData = [...reads];
useEffect(()=>{
    sortedData.sort((a, b) => b.rating - a.rating);
console.log(sortedData);
setSortData(sortedData);
},[])
  return (
    <div>
        <div className="w-full fontWorkSans font-bold text-[28px] rounded-2xl flex items-center justify-center h-24 bg-[#1313130D]">Best Selling Book</div>
        {
                sortData.map(read => <div className="card lg:card-side bg-base-100 shadow-xl border border-[#1313130D] p-6 gap-x-6 mb-6">
                <div className="rounded-2xl flex bg-[#1313130D] justify-center items-center"><img src={read.image} className="w-40 h-40 md:w-[230px] md:h-[229px] object-contain" alt="Movie" /></div>
                <div className="w-full">
                    <h2 className="fontPlayfairDisplay mb-4 text-xl md:text-2xl font-bold">{read.bookName}</h2>
                    <p className='fontWorkSans mb-4 font-medium'>By : {read.author}</p>
                    <div className='flex flex-col md:flex-row fontWorkSans text-sm md:text-base'>
                        <div className='flex gap-x-3'>
                            <p className='text-[#131313] font-bold'>Tag</p>
                            {
                                read.tags.map(tag => <div className='bg-[#23BE0A0D] text-[#23BE0A] text-sm md:text-base px-4 py-2 mb-4 rounded-full flex fontWorkSans font-medium'>#{tag}</div>)
                            }
                        </div>
                        <div className='flex md:ml-4 md:gap-x-2'>
                            <img src={location} className='w-6 h-6' alt="location image" />
                            <p>Year of Publishing: {read.yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row md:mt-4 fontWorkSans mb-4 text-sm md:text-base'>
                        <div className='flex md:gap-x-2'>
                            <img src={publisher} alt="" />
                            <p>Publisher: {read.publisher}</p>
                        </div>
                        <div className='flex md:ml-4 md:gap-x-2'>
                            <img className='' src={page} alt="" />
                            <p>Page {read.totalPages}</p>
                        </div>
                    </div>
                    <hr className='w-full mb-4' />
                    <div className='flex flex-col md:flex-row md:gap-x-3 gap-y-2 md:gap-y-0 text-center text-sm md:text-base'>
                        <div className='bg-[#328EFF26] text-[#328EFF] rounded-full px-5 py-3'>Category: {read.category}</div>
                        <div className='bg-[#FFAC3326] text-[#FFAC33] rounded-full px-5 py-3'>Rating: {read.rating}</div>
                        <div className='bg-[#cecc41] text-white rounded-full px-5 py-3 hover:cursor-pointer'>Online View</div>
                        <div className='bg-[#23BE0A] text-white rounded-full px-5 py-3 hover:cursor-pointer'>Order Now</div>
                    </div>
                </div>
            </div>)
            }
    </div>
  )
}
export default BestSeller
