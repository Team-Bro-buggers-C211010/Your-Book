import Banners from "../../components/Banner/Banners.jsx";
import Books from './../../components/Books/Books';

const Home = () => {
  return (
    <div>
      <Banners></Banners>
      <div className="mt-12 md:mt-24">
        <Books></Books>
      </div>
    </div>
  )
}

export default Home