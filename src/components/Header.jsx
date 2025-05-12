import { Link } from "react-router";
import App from "../App"
 import  '../style.css'
import useShop from "../ShopContext";

const Header = () => {
    const {products} = useShop();
    
    return (

       
        <div className="menu">
            <Link className="logo" to="/"> REACTIFYAPP</Link>

            <div className="menu-items">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart">Cart</Link>
            </div>
            <Link to="/cart" className="cart"><span>{products.length}</span></Link>

           {/* <a href="">logo</a>
           <ul className="menu-item">
             <li>
                <a href="/">Home</a>
             </li>

             <li>
                <a href="/about">About</a>
             </li>

             <li>
                <a href="/contact">Contact</a>
             </li>

             <li>
                <a href="/cart">Cart</a>
            </li>
            
           </ul>
           <a href="">5</a> */}
        </div>
    )
}





export default Header;