import React from "react";
import "./TopProducts.css";

const products = [
  { id: "01", name: "Home Decor Range", popularity: 45, color: "#3B82F6" },
  { id: "02", name: "Disney Princess Pink Bag 18'", popularity: 29, color: "#10B981" },
  { id: "03", name: "Bathroom Essentials", popularity: 18, color: "#8B5CF6" },
  { id: "04", name: "Apple Smartwatches", popularity: 25, color: "#F59E0B" },
];

export default function TopProducts() {
  return (
    <div className="top-products card">
      <h2>Top Products</h2>

      <div className="table">
        <div className="table-header">
          <span>#</span>
          <span>Name</span>
          <span>Popularity</span>
          <span>Sales</span>
        </div>

        {products.map((product) => (
          <div className="table-row" key={product.id}>
            <span className="id">{product.id}</span>
            <span className="name">{product.name}</span>

            <div className="progress-cell">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${product.popularity}%`,
                    backgroundColor: product.color,
                  }}
                ></div>
              </div>
            </div>

            <span
              className="sales"
              style={{ color: product.color, borderColor: product.color }}
            >
              {product.popularity}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
