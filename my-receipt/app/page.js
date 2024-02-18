import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import graphic from './graphic2.jpg'

export default function Home() {
  return (
    <main>
      <nav>
        <img src="favicon.ico" />
        <h3 className="title">My Receipt</h3>
        <div className="btn">Sign Up</div>
        
        <div className="btn"><Link href="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link></div>
      </nav>
      <div className="section">
        <div className="section-1">
          <h1>Go Paperless.</h1>
          <div className="description">Digitize and simplify your expense tracking with this personalized receipt manager. Track, categorize, and ensure you never lose a receipt again. View detailed insights into your financial habits across various categories, universally compatible with any company or chain!</div>
        </div>
        <div className="section-2">
          <Image className="graphic" src={graphic} />
        </div>
      </div>
    </main>
  );
}

