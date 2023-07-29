import React, { useState} from "react";

import "./loginform.css"

const LoginForm = () => {

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    return (
        <div className="cover">
            <h1>Giriş Yap</h1>
            <input type="text" placeholder="Kullanıcı Adı" />
            <input type="password" placeholder="Şifre" />

            <div className="login-btn" onClick={popup}>Giriş Yap</div>

            <p className="text">Ya Da</p>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google">
                </div>
            </div>

            <div className={popupStyle}>
                <h3>Giriş Başarısız</h3>
                <p>Kullanıcı Adı Ya Da Şifre Hatalı</p>
            </div>
            
        </div>
    )
}

export default LoginForm