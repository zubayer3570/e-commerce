import axios from 'axios';
import { useRouter } from 'next/router'
import Head from 'next/head'
import Card from '../components/Home/Products/Card';

export const getStaticProps = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products')
    return {
        props: {
            allProducts: data
        }
    }
}
const searchResult = ({ allProducts }) => {
    const { query } = useRouter()
    const searchText = query.searchText?.toLowerCase()
    let searchedProducts = [];
    allProducts.forEach(product => {
        product.title.toLowerCase().includes(searchText)
            &&
            searchedProducts.push(product)
    })
    return (
        <>
            <Head>
                <title>Search Result</title>
            </Head>
            <div className='grid grid-cols-1 lg:grid-cols-5 p-12 gap-4'>
                {
                    searchedProducts.map(product => <Card key={product.id} data={product} />)
                }
            </div>
        </>
    );
};

export default searchResult;