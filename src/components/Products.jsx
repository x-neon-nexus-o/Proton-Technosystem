import React, { useState } from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'projectors', name: 'Projectors' },
    { id: 'cameras', name: 'Cameras' },
    { id: 'security', name: 'Security Systems' },
    { id: 'audio', name: 'Audio Equipment' },
];

const products = [
    {
        id: 1,
        name: 'BenQ 4K Projector',
        category: 'projectors',
        price: '₹1,25,000',
        image: 'https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
        id: 2,
        name: 'Canon EOS R5',
        category: 'cameras',
        price: '₹3,39,000',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
        id: 3,
        name: 'Hikvision 8CH DVR',
        category: 'security',
        price: '₹8,500',
        image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
        id: 4,
        name: 'Sony Home Theater',
        category: 'audio',
        price: '₹45,000',
        image: 'https://images.unsplash.com/photo-1593784991095-a20506948430?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
        id: 5,
        name: 'Epson EB-E01',
        category: 'projectors',
        price: '₹32,000',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
        id: 6,
        name: 'Nikon Z6 II',
        category: 'cameras',
        price: '₹1,64,000',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
];

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(product => product.category === activeCategory);

    return (
        <section id="products" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-textPrimary dark:text-white">
                            Featured Products
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-xl">
                            Discover our range of high-quality electronics and accessories.
                        </p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                        View Catalog <ArrowRight size={20} />
                    </button>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap gap-4 mb-10 border-b border-gray-200 dark:border-gray-700 pb-4">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === category.id
                                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <button className="px-6 py-3 bg-white text-textPrimary rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                                        <ShoppingBag size={18} />
                                        Inquire Now
                                    </button>
                                </div>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-textPrimary shadow-sm">
                                    In Stock
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                                    {categories.find(c => c.id === product.category)?.name}
                                </div>
                                <h3 className="text-xl font-bold text-textPrimary dark:text-white mb-2 group-hover:text-secondary transition-colors">
                                    {product.name}
                                </h3>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">{product.price}</span>
                                    <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:bg-secondary group-hover:text-white transition-colors">
                                        <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="px-8 py-3 bg-gray-100 dark:bg-gray-800 text-textPrimary dark:text-white rounded-full font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                        View Catalog
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Products;
