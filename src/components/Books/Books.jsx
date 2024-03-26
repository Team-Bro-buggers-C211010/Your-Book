import BookCard from "../bookCard/BookCard"
import { useLoaderData } from 'react-router-dom'
const Books = () => {
    const booksData = useLoaderData();
    return (
        <div>
            <h1 className="text-center fontPlayfairDisplay text-[2.5rem] font-bold">Books</h1>
            <div className="mt-5 md:mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                {
                    booksData.map(book => <BookCard key={book.bookId} book={book} />)
                }
            </div>
        </div>
    )
}

export default Books