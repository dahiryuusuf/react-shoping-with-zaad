import Product from "./Product"
const products =  [
    {
        Id: 1,
        Name : "Pizza",
        urlImage: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Price: 0.01,
    },

    {
        Id: 2,
        Name : "Frouts",
        urlImage: "https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Price: 0.01,
    },
    {
        Id: 3,
        Name : "Spanech",
        urlImage: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Price: 0.01,
    },
    {
        Id: 4,
        Name :"Chicken",
        urlImage: "https://plus.unsplash.com/premium_photo-1661419883163-bb4df1c10109?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Price: 0.01,
    },
    {
        Id: 5,
        Name: "Fish",
        urlIMage: "https://images.unsplash.com/photo-1676300185165-3f543c1fcb72?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Price: 0.01,
    },
    {
        Id: 6,
        Name :"pasta",
        urlImage: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Price: 0.01,
    },

];








const Products = () => {
    return (
    <div className="grid">
          {products.map((product)  => (
       
         <Product key={product.Id} product={product}/>
       
        // <><h1>{product.Name}</h1>
        // <img src={product.urlImage} alt=""  style={{width:100,}}/>
        // <span>{product.Price}</span>

        // </>
          
    ))
    }
    </div>)
}

export default Products;