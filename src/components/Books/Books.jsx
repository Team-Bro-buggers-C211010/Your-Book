import BookCard from "../bookCard/BookCard"

const Books = () => {
    return (
        <div>
            <h1 className="text-center fontPlayfairDisplay text-[2.5rem] font-bold">Books</h1>
            <div className="mt-5 md:mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <BookCard></BookCard>
            </div>
        </div>
    )
}

export default Books