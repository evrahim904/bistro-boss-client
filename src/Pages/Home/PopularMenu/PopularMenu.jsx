
import SectionTitle from "../../../Components/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const PopularMenu = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')
   
    return (
        <div className="mb-12">
            <SectionTitle
                subHeading={'Popular Items'}
                heading={'from our menu'}
            >
            </SectionTitle>
            <div  className="grid md:grid-cols-2 gap-12">
            {
                popular.map(item => <MenuItems
                key={item._id}
                item={item}
                ></MenuItems>)
            }
            </div>
           <div className="text-center">
           <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
           </div>
        </div>
    );
};

export default PopularMenu;