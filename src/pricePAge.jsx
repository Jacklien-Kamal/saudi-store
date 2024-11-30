import React from "react";

const items = [
  { name: "Product 1", price: 10 },
  { name: "Product 2", price: 20 },
  // Add more items...
];

const PricePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Price List</h1>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricePage;
