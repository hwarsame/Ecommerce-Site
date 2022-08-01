import React from "react";

const Home = () => {
  return (
    <>
      Hero Banner
      <div>
        <h2>Best Selling Products</h2>
        <p>Luxury Watches</p>
      </div>
      <div>{["Product 1", "Product 2"].map((p) => p)}</div>
      Footer
    </>
  );
};

export default Home;
