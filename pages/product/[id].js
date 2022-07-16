import axios from 'axios';
import React from 'react';


export const getStaticPaths = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products')
    const paths = data.map(product => {
        return {
            params: {
                id: product.id.toString()
            }
        }
    })
    return {
        fallback: false,
        paths
    }
}
export const getStaticProps = async ({ params }) => {
    const {data} = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
    return {
        props: {
            productDetails: data
        }
    }
}


const ProductDetails = ({ productDetails }) => {
    const { image, title, description, rating, price } = productDetails
    return (
        <div>
            <img src={image} alt="" />
            <p>{title}</p>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    );
};

export default ProductDetails;