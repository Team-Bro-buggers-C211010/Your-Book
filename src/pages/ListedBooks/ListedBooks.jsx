import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReadBooks from './../../components/ReadBooks/ReadBooks';
import WishlistBooks from './../../components/WishlistBooks/WishlistBooks';

const ListedBooks = () => {
  const [books, setBooks] = useState([]);
  const [ReadBook, setReadBook] = useState([]);
  const [SortBy, setSortBy] = useState('');
  const data = useLoaderData();

  const handleSort = (e) => {
    const sortBy = e.target.value;
    setSortBy(sortBy);
  };

  return (
    <div>
      <div className="w-full fontWorkSans font-bold text-[28px] rounded-2xl flex items-center justify-center h-24 bg-[#1313130D]">Books</div>
      <div className="flex justify-center items-center mt-8">
        <select onChange={handleSort} className="select text-white fontWorkSans text-lg font-semibold bg-[#23BE0A] px-5 w-60">
          <option value="Sort By" disabled selected>Sort By</option>
          <option value="Rating" className="bg-[#1313130D]">Rating</option>
          <option value="Number of pages" className="bg-[#1313130D]">Number of pages</option>
          <option value="Publisher year" className="bg-[#1313130D]">Publisher year</option>
        </select>
      </div>
      <div role="tablist" className="tabs tabs-lifted mt-14 fontWorkSans text-[#131313CC] text-lg">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
        <div role="tabpanel" className="tab-content bg-base-100 border-t-base-300 pt-8"><ReadBooks SortBy={SortBy} ReadBook={ReadBook}></ReadBooks></div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="WishList" checked />
        <div role="tabpanel" className="tab-content bg-base-100 border-t-base-300 pt-8"><WishlistBooks books={books}></WishlistBooks></div>
      </div>
    </div>
  );
}

export default ListedBooks;
