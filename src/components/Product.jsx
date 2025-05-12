import { useEffect, useState } from "react";
import useShop from "../ShopContext";

const Product = ({product}) => {


    const {addToCart,removeFromCart, products,}=useShop();

    const [isCart, setIsCart] = useState(true)


    useEffect(() => {
        const inCart = products.filter((pro) => pro.id == product.id);
        console.log(inCart);
        if (inCart.length > 0 ){
            setIsCart(true);
        } else{
            setIsCart(false)
        }
    },[products])

    

    const handleAddToCart = () =>{
        if (isCart){
            removeFromCart(product);
        }else{
            addToCart(product);
        }
        
    }
    return (
       <div className="card " style={{
        minHeight:"100%",
         width: "100%",
        backgroundRepeat:"no-repeat",
        backgroundPosition: "center",
        background: `linear-gradient(rgba(0, 0, 0,0.1 ), rgba(0, 0, 0,0.1)),
        url(${product.urlImage}) `
        
        }}>
        <div className="info">
            <span>{product.Name}</span>
            <span>{product.Price}</span>
        </div>
        <button className={`btn ${isCart ? "btn-secondary":"btn-primary"}`}  onClick={handleAddToCart}>
            {isCart ? "-": "+"}</button>
       </div> 
    )
}

export default Product;