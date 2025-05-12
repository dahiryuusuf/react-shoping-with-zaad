import CartProducts from "../components/CartProducts";
import Payment from "../components/Payment";

const Cart = () => {
   
    return (
        <div className="cart-contaner">
            <CartProducts/>
            <Payment/>
        </div>
    )
}
export default Cart;