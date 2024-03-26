import { useLoaderData } from "react-router-dom";
import Banners from "../../components/Banner/Banners.jsx";
import Books from './../../components/Books/Books';

const Home = () => {
  const booksData = useLoaderData();
  return (
    <div>
      <Banners></Banners>
      <div className="mt-12 md:mt-24">
        <Books booksData={booksData}></Books>
      </div>
    </div>
  )
}

export default Home