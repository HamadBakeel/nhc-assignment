'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // Using usePathname hook for path extraction
import Image from 'next/image';
import Loader from '@/@core/components/loader';

const ProductPage = () => {
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Extract the product ID from the pathname
    const pathname = usePathname();
    const id = pathname?.split('/').pop(); // Assuming URL structure like `/products/[id]`

    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`);
                if (!res.ok) {
                    throw new Error('Product not found');
                }
                const data = await res.json();
                setProduct(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p className='m-auto'>{error}</p>;
    }

    if (!product) {
        return <p className='m-auto'>Product not found</p>;
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Product Title */}
            <h1 className="text-3xl text-nhc text-center mb-6">{product.title}</h1>


            {/* Product Image and Info */}
            <div className="flex flex-col items-center justify-center w-[480px] m-auto">
                {/* Main Image */}
                <div className="flex justify-center">
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        width={400}
                        height={300}
                        className="rounded-nhc w-full h-[250px] object-cover"
                    />
                </div>

                {/* Product Details */}
                <div className="flex justify-between w-full gap-4 mt-6 px-4">
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-600">
                            <span className="">Price :</span>{" "}
                            <span className="text-nhc">${product.price}</span>
                        </p>
                        <p className="text-gray-600">
                            <span className="">Rating :</span>{" "}
                            {Array.from({ length: 5 }, (_, index) => (
                                <span key={index} className={`text-lg ${index < product.rating ? 'text-[#E5C72B]' : 'text-[#A6A6A8]'}`}>
                                ★
                                </span>
                            ))}
                        </p>
                        <p className="text-gray-600">
                            <span className="">Brand :</span>{" "}
                            <span className="text-nhc">{product.brand}</span>
                        </p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-600">
                            <span className="">Discount Percentage :</span>{" "}
                            <span className="text-nhc">{product.discountPercentage.toFixed(2)}</span>
                        </p>
                        <p className="text-gray-600">
                            <span className="">Stock :</span> 
                            <span className='text-nhc'>
                                {product.stock}
                            </span>
                        </p>
                        <p className="text-gray-600">
                            <span className="">Category :</span>{" "}
                            <span className="text-nhc">{product.category}</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Product Description */}
            <div className="mt-9">
                <h3 className="text-xl mb-2">Product Description</h3>
                <p className="text-[#7F7F7F]">
                    {product.description.length > 200
                        ? product.description.substring(0, 200) + "..."
                        : product.description}
                </p>
            </div>

            {/* Product Images */}
            <div className="mt-8 mb-12">
                <h3 className="text-xl mb-4">Product Images</h3>
                <div className="flex gap-4">
                    {product.images.map((image: string, index: number) => (
                        <Image
                            key={index}
                            src={image}
                            alt={product.title}
                            width={227}
                            height={120}
                            className="rounded-nhc h-[120px] w-[227px] object-cover"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
