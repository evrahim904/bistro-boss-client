import SectionTitle from "../../../Components/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg'
import './Featured.css'

const Fetuared = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-12 ">
            <SectionTitle
            subHeading={'Check it out'}
            heading={'Featured Items'}
            ></SectionTitle>
            <div  className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40">
              <div>
              <img src={featuredImage} alt="" />
              </div>
           
            <div className="md:ml-10">
                <p>20 may, 2030</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur repellat facilis, rem dignissimos odit fuga cupiditate explicabo hic temporibus sapiente minima et, in velit ipsam est. Nisi error similique consequatur. Animi, nobis quae laborum ad earum quos optio rerum consequuntur iste a ipsa eaque veritatis enim debitis recusandae natus dolorum!</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </div>
        </div>
        </div>
    );
};

export default Fetuared;