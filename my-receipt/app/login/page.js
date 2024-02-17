export default function Login() {
  return (
    <main>
      <div className="login-box">
        <h3 className="login-title">Login</h3>
        <input className="login-username" type="text" placeholder="Username" class="email" />
        <input className="login-password" type="password" placeholder="Password" class="pass" />
        <div className="login-extras">
          <input type="checkbox"/>
          <div className="login-remember">Remember Me</div>
        </div>
        <div className="login-btn">Login!</div>
      </div>
    </main>
  );
}


