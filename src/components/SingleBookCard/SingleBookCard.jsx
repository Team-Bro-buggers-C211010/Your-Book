const SingleBookCard = ({ book }) => {
    const tag = book.tags;
    return (
        <div className="w-full flex flex-col md:flex-row gap-x-12 items-center mb-16">
            <div className="w-full md:w-1/2 bg-[#1313130D] rounded-2xl flex md:items-center justify-center">
                <img src={book.image} alt="book" className=" w-52 h-72 md:w-[573px] md:h-[711px] object-contain" />
            </div>
            <div className="flex-auto w-full md:w-1/2">
                <h1 className="text-[#131313] text-2xl md:text-[40px] fontPlayfairDisplay font-bold">{book.bookName}</h1>
                <h5 className="mt-4 fontWorkSans text-lg md:text-xl font-medium">By : {book.author}</h5>
                <hr className="mt-5 mb-4 color-[#13131326]" />
                <p className="text-lg md:text-xl fontWorkSans font-medium">{book.category}</p>
                <hr className="mt-4 mb-6 color-[#13131326]" />
                <p className="fontWorkSans">
                    <span className="text-[#131313] font-bold">Review : </span>{book.review}</p>
                <div className="flex gap-4 items-center mt-7 mb-6">
                    <h3 className="text-[#131313] font-bold ">Tag</h3>
                    {
                        tag.map(tagInfo => <div className="bg-[#23BE0A0D] text-[#23BE0A] text-sm md:text-base px-4 py-2 rounded-full flex fontWorkSans font-medium">#{tagInfo}</div> )
                    }
                </div>
                <hr className="mb-6" />
                <div className="flex mb-3 text-sm md:text-base text-[#131313B2] w-full md:w-[358px] justify-between fontWorkSans">
                    <p>Number of Pages:</p>
                    <p className="text-[#131313] font-semibold">{book.totalPages}</p>
                </div>
                <div className="flex mb-3 text-sm md:text-base text-[#131313B2] w-full md:w-[358px] justify-between fontWorkSans">
                    <p>Publisher:</p>
                    <p className="text-[#131313] font-semibold">{book.publisher}</p>
                </div>
                <div className="flex mb-3 text-sm md:text-base text-[#131313B2] w-full md:w-[358px] justify-between fontWorkSans">
                    <p>Year of Publishing:</p>
                    <p className="text-[#131313] font-semibold">{book.yearOfPublishing}</p>
                </div>
                <div className="flex mb-3 text-sm md:text-base text-[#131313B2] w-full md:w-[358px] justify-between fontWorkSans">
                    <p>Rating:</p>
                    <p className="text-[#131313] font-semibold">{book.rating}</p>
                </div>
                <div className="flex mt-8 text-sm md:text-base gap-x-4">
                    <button className="btn bg-white border border-[#1313134D] w-[101px] h-[57px] fontWorkSans font-semibold">Read</button>
                    <button className="btn w-[128px] h-[57px] bg-[#50B1C9] text-white fontWorkSans font-semibold">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default SingleBookCard;
