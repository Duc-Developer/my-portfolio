import React from "react";
import firebase from "firebase";
import { app } from "../../firebase";
import * as firebaseui from "firebaseui";
import "./Login.css";

const ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start("#firebaseui-auth-container", {
  signInFlow: "popup",
  signInSuccessUrl: "http://localhost:3000/form-building",
  callbacks: {
    uiShown: function () {
      document.getElementById("loader").style.display = "none";
    },
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // localStorage.setItem("token", authResult.credential.accessToken);
      return true;
    },
  },
  signInOptions: [
    // List of OAuth providers supported.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      recaptchaParameters: {
        type: "image",
        size: "normal",
        badge: "bottomleft",
      },
      defaultCountry: "VN",
    },
  ],
  // Other config options...
});

export default function Login() {
  return (
    <div className="login-page">
      <div id="firebaseui-auth-container">
        <h1>LOGIN IS ONLY FOR DEVELOPER</h1>
        <div>
        <i>Bạn có thể sử dụng tài khoản thử nghiệm để test:</i>
        </div>
        <div>
          <ul>
            <li>Phone: +84965971469</li>
            <li>Verification: 233199</li>
          </ul>
        </div>
        <div>
          <b>Note: </b>
          <i>Mọi tài khoản đăng ký thành công nhưng Đức không duyệt sẽ ko thể  truy cập vào form khởi tạo</i>
        </div>
      </div>
      <div id="loader">
        <p>loading..</p>
      </div>
    </div>
  );
}
