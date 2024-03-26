import bannerImg from "../../assets/images/Harry Potter and the Philosopher's Stone.png"
const Banners = () => {
    return (
        <div className="hero mx-h-screen md:mx-h-[554px] bg-base-200 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-x-48">
                <img src="https://i.ibb.co/TbS7WG2/Harry-Potter-and-the-Philosopher-s-Stone.png" className="bg-transparent max-w-full md:max-w-sm rounded-lg" />
                <div>
                    <h1 className="text-2xl md:text-6xl font-bold fontPlayfairDisplay md:leading-[84px] mb-6 md:mb-12">Books to freshen up <br /> your bookshelf!</h1>
                    <button className="btn bg-[#23BE0A] text-white fontWorkSans text-lg md:text-xl h-10 md:h-16 px-7 font-bold">View The List</button>
                </div>
            </div>
        </div>
    )
}

export default Banners