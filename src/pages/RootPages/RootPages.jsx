import NavBar from "../../components/navBar/NavBar.jsx";
import { Outlet } from "react-router-dom"
const RootPages = () => {
    return (
        <>
            <section className="container mx-auto mt-5 md:mt-14">
                <NavBar></NavBar>
                <div className="px-2 md:px-0 mt-5 md:mt-12">
                    <Outlet></Outlet>
                </div>
            </section>
        </>
    )
}

export default RootPages