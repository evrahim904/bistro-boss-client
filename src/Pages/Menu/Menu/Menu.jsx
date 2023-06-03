import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import coverImg from '../../../assets/menu/banner3.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const[menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover
                img ={coverImg}
                title={"Our Menu"}
            ></Cover>
            {/* offered menu items */}
            <SectionTitle subHeading="don't miss" heading="today's offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={dessert} title="dessert" img={dessertImg}></MenuCategory>
             {/* pizza menu items */}
            <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory>
             {/* salads menu items */}
            <MenuCategory items={salad} title="Salads" img={saladImg}></MenuCategory>
             {/* soups menu items */}
            <MenuCategory items={soup} title="Soups" img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;