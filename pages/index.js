import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';
import Products from '../components/Home/Products/Products';
import axios from 'axios'

export const getStaticProps = async () => {
    const {data} = await axios.get('https://fakestoreapi.com/products')
    return {
        props: {
            products: data
        }
    }
}
const index = ({products}) => {
    return (
        <>
            <Products products={products}/>
        </>
    );
};

export default index;