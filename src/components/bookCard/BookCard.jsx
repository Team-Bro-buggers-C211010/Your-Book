import rating from '../../assets/images/ratings.png'
const BookCard = () => {
    return (
        <div className="card border border-[#13131326] w-full md:w-96 bg-base-100 shadow-xl">
            <figure className="px-6 pt-6">
                <div className="bg-[#F3F3F3] w-full md:w-[326px] max-h-[230px] rounded-2xl">
                    <img src="https://i.ibb.co/TbS7WG2/Harry-Potter-and-the-Philosopher-s-Stone.png" alt="Shoes" className="rounded-xl w-full md:w-[326px] max-h-[230px] object-contain" />
                </div>
            </figure>
            <div className="p-6">
                <div className="flex gap-x-3 font-medium fontWorkSans">
                    <div className="bg-[#23BE0A0D] text-[#23BE0A] px-4 py-2 rounded-full">Young Adult</div>
                    <div className="bg-[#23BE0A0D] text-[#23BE0A] px-4 py-2 rounded-full">Identity</div>
                </div>
                <h1 className="mt-4 mb-4 fontPlayfairDisplay text-2xl font-bold">The Catcher in the Rye</h1>
                <h3 className="fontWorkSans font-medium">By : Awlad Hossain</h3>
                <hr className="border-dashed mt-5 mb-5" />
                <div className='flex justify-between text-[#131313CC] font-medium fontWorkSans'>
                    <div>Fiction</div>
                    <div className='flex gap-x-2 items-center'><div>5.00 </div><div><img src={rating} alt="" /></div></div>
                </div>
            </div>
        </div>
    )
}

export default BookCard