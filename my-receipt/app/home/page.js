import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import receipt from './receipt.png'
import icon from './favicon.ico'

export default function Home() {
  return (
    <main>
      <nav className="home-nav">
        <div className="home-display-1">
          <Image className="home-img" src={icon} />
          <div className="home-title">Welcome, User123456</div>
        </div>
        <div className="logout-btn">Log Out</div>
      </nav>
      <div className="home-section">
        <div className="home-section-1">
          <div className="home-section-title">
            <div className="home-receipt-title">Your Receipts</div>
            <div class="dropdown">
              <button class="dropbtn">Filter</button>
              <div class="dropdown-content">
                <a href="#">Year - 2024</a>
                <a href="#">Month - January</a>
                <a href="#">Type - Shopping</a>
              </div>
            </div>
          </div>
          <div className="home-section-content">
            <div className="content-shop">
              <div className="shop-title">Shopping</div>
              <div className="home-item">Walmart</div>
              <div className="home-item">TJMaxx</div>
              <div className="home-item">Five Below</div>
            </div>
            <div className="content-food">
            <div className="food-title">Food</div>
              <div className="home-item">Chipotle</div>
              <div className="home-item">Starbucks</div>
              <div className="home-item">Panera Bread</div>
            </div>
          </div>
          <div className="home-section-total">Total - $70.00</div>
        </div>
        <div className="home-section-2">
          <div className="home-receipt-title-2">View Receipts</div>
          {/* most recent img of receipt digitized */}
        </div>
      </div>
    </main>
  );
}