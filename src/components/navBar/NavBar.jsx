import { Link, NavLink } from "react-router-dom"
import cart from "../../assets/images/cart.png"
import { useContext } from "react"
import { AuthContext } from "../../Providers/AuthProviders"
const navBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => {
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className="navbar bg-base-100 fontWorkSans">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#131313CC] font-normal">
                        <li><NavLink to="/" className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A] border border-[#23BE0A] bg-white' : ''}>Home</NavLink></li>
                        {
                            user ? <>
                                <li><NavLink to="/list-books" className={({ isActive }) =>
                                    isActive ? 'text-[#23BE0A] border border-[#23BE0A] bg-white' : ''}>Listed Books</NavLink></li>
                                <li><NavLink to="/read-books-chart" className={({ isActive }) =>
                                    isActive ? 'text-[#23BE0A] border border-[#23BE0A] bg-white' : ''}>Pages to Read</NavLink></li>
                                <li><NavLink to="/best-sellers" className={({ isActive }) =>
                                    isActive ? 'text-[#23BE0A] border border-[#23BE0A] bg-white' : ''}>Best Sellers</NavLink></li>
                                <li><NavLink to="/book-carts" className={({ isActive }) =>
                                    isActive ? 'text-[#23BE0A] border border-[#23BE0A] bg-white' : ''}>Carts</NavLink></li>
                                <a onClick={handleSignOut} className="btn bg-[#59C6D2] text-white">Sign Out</a>
                            </> :
                                <>
                                    <NavLink to="/signin"><button className="btn bg-[#23BE0A] text-white">Sign In</button></NavLink>
                                    <NavLink to="/signup"><button className="btn bg-[#59C6D2] text-white">Sign Up</button></NavLink>
                                </>
                        }
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl text-[#131313] font-bold">Your Book</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-x-4 font-semibold text-[#131313CC]">
                    <li><NavLink to="/" className={({ isActive }) =>
                        isActive ? 'text-[#23BE0A] border border-[#23BE0A] bg-white' : ''}>Home</NavLink></li>
                    {
                        user && <>
                            <li><NavLink to="/list-books" className={({ isActive }) =>
                                isActive ? 'text-[#23BE0A] border border-[#23BE0A] bg-white' : ''}>Listed Books</NavLink></li>
                            <li><NavLink to="/read-books-chart" className={({ isActive }) =>
                                isActive ? 'text-[#23BE0A] border border-[#23BE0A] bg-white' : ''}>Pages to Read</NavLink></li>
                            <li><NavLink to="/best-sellers" className={({ isActive }) =>
                                isActive ? 'text-[#23BE0A] border border-[#23BE0A] bg-white' : ''}>Best Sellers</NavLink></li>
                            <li><NavLink to="/book-carts" className={({ isActive }) =>
                                isActive ? 'text-[#23BE0A] border border-[#23BE0A] bg-white' : ''}>Carts</NavLink></li>
                        </>
                    }
                </ul>
            </div>
            <div className="flex md:hidden  navbar-end gap-x-4">
                {
                    user && <>
                        <img className="w-8 rounded-full object-cover" src={user.photoURL}></img>
                    </>
                }
            </div>
            <div className="hidden md:flex  navbar-end gap-x-4">
                {
                    user ? <>
                        <img className="w-8 rounded-full object-cover" src={user.photoURL}></img>
                        <span className="text-xs font-bold">{user.displayName}</span>
                        <a onClick={handleSignOut} className="btn bg-[#59C6D2] text-white">Sign Out</a>
                    </> : <>
                        <NavLink to="/signin"><button className="btn bg-[#23BE0A] text-white">Sign In</button></NavLink>
                        <NavLink to="/signup"><button className="btn bg-[#59C6D2] text-white">Sign Up</button></NavLink>
                    </>

                }
            </div>
        </div>
    )
}

export default navBar