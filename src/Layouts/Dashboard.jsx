import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart()
  // todo: load data from server to have dynamic admin 
  // const isAdmin = true;
  const [isAdmin] = useAdmin()
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">

        {/* <!-- Page content here --> */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 text-base-content">
          {/* <!-- Sidebar content here --> */}
          
          {
            isAdmin? 
            <>
            <li><NavLink to="/dashboard/home"><FaHome></FaHome>admin Home</NavLink></li>
          <li><NavLink to="/dashboard/reservation"> <FaUtensils></FaUtensils> add item</NavLink></li>
          <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet>manage items</NavLink></li>
          <li><NavLink to="/dashboard/mycart"><FaBook></FaBook> manage bookings </NavLink></li>
          <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> all users</NavLink></li>
            </>
            
            :
            
            <>
            <li><NavLink to="/dashboard/home"><FaHome></FaHome>User Home</NavLink></li>
          <li><NavLink to="/dashboard/reservation"><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>
          <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet>payment history</NavLink></li>
          <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> my cart <div className="badge badge-secondary">${cart?.length || 0}</div></NavLink></li>
            </>
          }
             
          



          <div className="divider"></div>
          <li><NavLink to="/"><FaHome></FaHome>User Home</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/order/Salads">Order Food</NavLink></li>
        </ul>

      </div>
    </div>
  );
};

export default DashBoard;