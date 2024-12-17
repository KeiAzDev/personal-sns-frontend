import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Personal SNS</h3>
          <p className="loginDesc"> SNSを作って理解しよう</p>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <p className="loginMsg">ログインはこちら</p>
            <input type="text" className="loginInput" placeholder="Eメール" />
            <input type="text" className="loginInput" placeholder="パスワード" />
            <button className="loginButton">ログイン</button>
            <span className="loginForgot">パスワードを忘れた方へ</span>
            <button className="loginRegisterButton">アカウントを作成</button>
          </div>
        </div>
      </div>
    </div>
  )
}
