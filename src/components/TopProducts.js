import React from 'react';
import './TopProducts.css';

const TopProducts = () => {
  const products = [
    {
      rank: '01',
      name: 'Home Decor Range',
      popularity: 45,
      sales: '45%'
    },
    {
      rank: '02',
      name: 'Disney Princess Pink Bag 18',
      popularity: 29,
      sales: '29%'
    },
    {
      rank: '03',
      name: 'Bathroom Essentials',
      popularity: 18,
      sales: '18%'
    },
    {
      rank: '04',
      name: 'Apple Smartwatches',
      popularity: 25,
      sales: '25%'
    }
  ];

  return (
    <div className="top-products">
      <h3 className="products-title">Top Products</h3>
      <div className="products-table">
        <div className="table-header">
          <span className="header-rank">#</span>
          <span className="header-name">Name</span>
          <span className="header-popularity">Popularity</span>
          <span className="header-sales">Sales</span>
        </div>
        {products.map((product) => (
          <div key={product.rank} className="table-row">
            <span className="product-rank">{product.rank}</span>
            <span className="product-name">{product.name}</span>
            <div className="popularity-bar">
              <div className="popularity-fill" style={{ width: `${product.popularity}%` }}></div>
            </div>
            <span className="product-sales">{product.sales}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
