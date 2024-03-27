import { useEffect, useState } from 'react';
import SingleBookCard from './../SingleBookCard/SingleBookCard';
import { useParams } from 'react-router-dom';

const SingleBookDetails = () => {
    const { bookId } = useParams();
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        fetch("/API_Data/BookDataApi.json")
            .then(res => res.json())
            .then(bookData => setBooks(bookData))
            .catch(error => console.error('Error fetching book data:', error));
    }, []);

    const filteredBooks = books.filter(book => book.bookId == bookId);
    return (
        <div>
            {
                filteredBooks.map(book => (
                    <SingleBookCard key={book.bookId} book={book} />
                ))
            }
        </div>
    )
}


export default SingleBookDetails;
