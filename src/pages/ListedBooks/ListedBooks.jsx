import { NavLink } from "react-router-dom"
import ReadBooks from './../../components/ReadBooks/ReadBooks';
import WishlistBooks from './../../components/WishlistBooks/WishlistBooks';

const ListedBooks = () => {
  return (
    <div>
      <div className="w-full fontWorkSans font-bold text-[28px] rounded-2xl flex items-center justify-center h-24 bg-[#1313130D]">Books</div>
      <div className="flex justify-center items-center mt-8">
      <select className="select text-white fontWorkSans text-lg font-semibold bg-[#23BE0A] px-5 w-60">
        <option disabled selected>Sort By</option>
        <option className="bg-[#1313130D]">Rating</option>
        <option className="bg-[#1313130D]">Number of pages</option>
        <option className="bg-[#1313130D]">Publisher year</option>
      </select>
      </div>
      <div role="tablist" className="tabs tabs-lifted mt-14 fontWorkSans text-[#131313CC] text-lg">
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
  <div role="tabpanel" className="tab-content bg-base-100 border-t-base-300 pt-8"><ReadBooks></ReadBooks></div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="WishList" checked />
  <div role="tabpanel" className="tab-content bg-base-100 border-t-base-300 pt-8"><WishlistBooks></WishlistBooks></div>
</div>

{/* <div role="tablist" className="tabs  tabs-lifted tabs-lg mt-14">

  <NavLink  className={({ isActive }) =>
                        isActive ? 'tab tab-active' : 'tab'}>Read Books</NavLink>
  <NavLink  className={({ isActive }) =>
                        isActive ? 'tab tab-active' : 'tab'}>Wishlist Books</NavLink>
</div> */}
    </div>
  )
}

export default ListedBooks