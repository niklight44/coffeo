import {useState} from "react";

const ShopProducts = () => {
    const data = [
        {
            'product_image': '',
            'product_name': 'Spice Iceland Blend',
            'product_price': 12,
            'product_sale_percent': '',
        }
    ]


    return (
        <>
            {data.map((product, index) => (
                <div key={index} className="product">
                    <img src={product.product_image} alt={product.product_name} />
                    <h3>{product.product_name}</h3>
                    <p>Price: ${product.product_price}</p>
                </div>
                ))}
        </>
    )
}

export default ShopProducts;