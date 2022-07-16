import Card from "./Card";

const Products = ({ products }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 p-12 gap-4">
            {
                products.map(product => <Card data={product} />)
            }
        </div>
    );
};

export default Products;