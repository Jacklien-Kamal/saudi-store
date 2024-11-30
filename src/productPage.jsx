import React, { useState } from "react";

const collections = {
  "Special Offer": [
    { id: 1, name: "Golden Dates", price: 25, category: "Food", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BS7nRsUI30n3oxyjcgvIh_JRFv5JO2m6KA&s" },
    { id: 2, name: "Saffron Tea", price: 30, category: "Beverages", image: "https://www.teabox.com/cdn/shop/files/KashmiriKahwaSaffron_Kesar_GreenTea_CarouselImage_03_1.jpg?v=1710252264&width=600" },
    { id: 3, name: "Premium Coffee", price: 45, category: "Beverages", image: "https://img.ananinja.com/media/bra-public-files/services-admin/files/7eb4625c-39e9-41f0-9ab8-641398b63970?w=256&q=75" },
  ],
  "Weekly Offer": [
    { id: 4, name: "Honey Jar", price: 20, category: "Food", image: "https://m.media-amazon.com/images/I/61BuVQcg8GL.jpg" },
    { id: 5, name: "Rosewater", price: 15, category: "Essentials", image: "https://cdn2.stylecraze.com/wp-content/uploads/2012/12/Rose-Water-History-How-To-Use-And-Benefits-2.jpg" },
  ],
  "Eid Offer": [
    { id: 7, name: "Luxury Perfume", price: 120, category: "Fragrance", image: "https://imaraperfumes.com/cdn/shop/files/silver-wood-luxury-perfume-for-men-50-ml-50ml-imara-perfumes-722528.jpg?v=1715418002&width=1946" },
    { id: 8, name: "Prayer Mat", price: 50, category: "Essentials", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsgCmu3PEGFtWeByce5My8sjde-yh-Db51Kg&s" },
    { id: 3, name: "Premium Coffee", price: 45, category: "Beverages", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOnY8Ex_3LyZGEbFmPnwAdQ2HkBj7eiQqcQg&s" },

  ],
  "New Arrivals": [
    { id: 10, name: "Spiced Nuts", price: 25, category: "Food", image: "https://elanaspantry.com/wp-content/uploads/2011/09/paleo-spiced-nuts1-1.jpg" },
    { id: 11, name: "Traditional Coffee Set", price: 150, category: "Home", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45KSb0HYjynxiKAg5z_7eIzeZa5T8EMlYrg&s" },
  ],
};

const ProductsPage = () => {
  const [activeCollection, setActiveCollection] = useState("Special Offer");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Price");

  const products = collections[activeCollection]
    .filter((product) =>
      filter === "All" ? true : product.category === filter
    )
    .sort((a, b) =>
      sort === "Price" ? a.price - b.price : a.name.localeCompare(b.name)
    );

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-6">
        {Object.keys(collections).map((collection) => (
          <button
            key={collection}
            className={`px-4 py-2 ${
              activeCollection === collection ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setActiveCollection(collection)}
          >
            {collection}
          </button>
        ))}
      </div>
      <div className="mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="All">All Categories</option>
          <option value="Food">Food</option>
          <option value="Beverages">Beverages</option>
          <option value="Essentials">Essentials</option>
          <option value="Fragrance">Fragrance</option>
          <option value="Decor">Decor</option>
          <option value="Home">Home</option>
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="p-2 border rounded ml-4"
        >
          <option value="Price">Sort by Price</option>
          <option value="Name">Sort by Name</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
            <p className="text-gray-500 mb-2">${product.price}</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
