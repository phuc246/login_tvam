/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './LoginForm.css';
import logoBanner from './asset/bg-logo-banner.jpg';
function LoginForm() {
  return (
    <div className="wrapper">
      <div className="Logo-banner-login">
        <img src={logoBanner} alt="bg-login" />
      </div>
      <form action="" method="post">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" name="userName" id="" placeholder="Username" required />
        </div>
        <div className="input-box">
          {' '}
          <input type="password" name="password" id="" placeholder="password" required />
        </div>
        <div className="remember-forgot">
          <label htmlFor="remember">
            <input type="checkbox" name="" id="" />
            Rememberme
          </label>
          <a href="#">Forgot password</a>
        </div>
        <button type="submit">Login</button>
        <div className="label-hoac">hoặc</div>
      </form>
    </div>
  );
}

export default LoginForm;
