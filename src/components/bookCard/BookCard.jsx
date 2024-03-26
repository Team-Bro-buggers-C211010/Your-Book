
import rating from '../../assets/images/ratings.png'
const BookCard = ({book}) => {
    const tags = book.tags;
    return (
        <div className="card border border-[#13131326] w-full md:w-96 h-full bg-base-100 shadow-xl mx-auto">
            <figure className="px-6 pt-6">
                <div className="bg-[#F3F3F3] w-full  max-h-[230px] rounded-2xl flex justify-center">
                    <img src={book.image} alt="Shoes" className="rounded-xl w-full md:w-[326px] max-h-[230px] object-contain" />
                </div>
            </figure>
            <div className="p-6">
            <div className="flex gap-x-3 font-medium fontWorkSans">
    {tags.map(tag => (
        <div key={tag} className="bg-[#23BE0A0D] text-[#23BE0A] px-4 py-2 rounded-full">{tag}</div>
    ))}
</div>

                <h1 className="mt-4 mb-4 fontPlayfairDisplay text-2xl font-bold">{book.bookName}</h1>
                <h3 className="fontWorkSans font-medium">By : {book.author}</h3>
                <hr className="border-dashed mt-5 mb-5" />
                <div className='flex justify-between text-[#131313CC] font-medium fontWorkSans'>
                    <div>{book.category}</div>
                    <div className='flex gap-x-2 items-center'><div>{book.rating} </div><div><img src={rating} alt="" /></div></div>
                </div>
            </div>
        </div>
    )
}

export default BookCard