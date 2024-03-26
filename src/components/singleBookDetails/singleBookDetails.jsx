import { useLoaderData, useParams } from "react-router-dom"

const singleBookDetails = () => {
    const { bookId } = useParams();
    const books = useLoaderData();
    const currentBook = books.filter(book => book.bookId == bookId);
    console.log(currentBook);
    return (
        <div>
            {
                currentBook.map( listBook => (
                    <p>Book Name : {listBook.bookName}</p>
                ))
            }
        </div>
    )
}

export default singleBookDetails