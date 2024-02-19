import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();

    // Fetch product details using productId

    return (
        <div>
            <h2>Product Details</h2>
            <p>Product ID: {productId}</p>
            {/* Render other product details */}
        </div>
    );
};

export default ProductDetails;
