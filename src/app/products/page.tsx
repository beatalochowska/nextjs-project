import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
    {
        id: '1',
        category: 'Accessories',
        name: 'Pokemon 1',
        price: 2137,
        coverImage: {
            alt: '',
            src: '/product_1.png'
        }
    },
    {
        id: '2',
        category: 'Accessories',
        name: 'Pokemon 2',
        price: 2137,
        coverImage: {
            alt: '',
            src: '/product_2.png'
        }
    },
    {
        id: '3',
        category: 'Accessories',
        name: 'Pokemon 3',
        price: 2137,
        coverImage: {
            alt: '',
            src: '/product_3.png'
        }
    },
    {
        id: '4',
        category: 'Accessories',
        name: 'Pokemon 4',
        price: 2137,
        coverImage: {
            alt: '',
            src: '/product_4.png'
        }
    }
];

export default function Products() {
    return (
        <section className='mx-auto, max-w-md p-12 sm:max-w-2xl sm: py-16 md:max-w-4xl lg:max-w-7xl'>
            <div>XDDDD</div>
            <ProductList products={products} />
        </section>
    )
}
