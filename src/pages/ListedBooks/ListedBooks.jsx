import { useState } from 'react';
import ReadBooks from './../../components/ReadBooks/ReadBooks';
import WishlistBooks from './../../components/WishlistBooks/WishlistBooks';

const ListedBooks = () => {
  const [sortBy, setSortBy] = useState('');
  const [activeTab, setActiveTab] = useState('Read Books');

  const handleSort = (e) => {
    const sortByValue = e.target.value;
    setSortBy(sortByValue);
  };

  const handleTabChange = (tabLabel) => {
    setActiveTab(tabLabel);
  };

  return (
    <div>
      <div className="w-full fontWorkSans font-bold text-[28px] rounded-2xl flex items-center justify-center h-24 bg-[#1313130D]">Books</div>
      <div className="flex justify-center items-center mt-8">
        <select onChange={handleSort} className="select text-white fontWorkSans text-lg font-semibold bg-[#23BE0A] px-5 w-60">
          <option value="" disabled selected>Sort By</option>
          <option value="Rating" className="bg-[#1313130D]">Rating</option>
          <option value="Number of pages" className="bg-[#1313130D]">Number of pages</option>
          <option value="Publisher year" className="bg-[#1313130D]">Publisher year</option>
        </select>
      </div>
      <div role="tablist" className="tabs tabs-lifted mt-14 fontWorkSans text-[#131313CC] text-lg">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked={activeTab === 'Read Books'} onChange={() => handleTabChange('Read Books')} />
        <div role="tabpanel" className="tab-content bg-base-100 border-t-base-300 pt-8" style={{ display: activeTab === 'Read Books' ? 'block' : 'none' }}>
          <ReadBooks sortBy={sortBy} />
        </div>
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="WishList" checked={activeTab === 'WishList'} onChange={() => handleTabChange('WishList')} />
        <div role="tabpanel" className="tab-content bg-base-100 border-t-base-300 pt-8" style={{ display: activeTab === 'WishList' ? 'block' : 'none' }}>
          <WishlistBooks sortBy={sortBy} />
        </div>
      </div>
    </div>
  );
}

export default ListedBooks;
