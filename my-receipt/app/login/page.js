import Image from 'next/image'
import Link from 'next/link'
import graphic from './landscape2.png'

export default function Login() {
  return (
    <main className="main">
      <div className="back-btn"></div>
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <div className="login-input">User123456</div>
        <div className="login-input">********</div>
        <div className="login-extras">
          <input type="checkbox" />
          <div className="login-remember">Remember Me</div>
        </div>
        <Link className="login-btn" href="/home" style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
      </div>
      <Image src={graphic} fill={true} className="img"/>
    </main>
  );
}


