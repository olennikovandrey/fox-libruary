import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__items">
        <ul className="footer__item">
          <li className="footer__title">About Fox Library</li>
          <li>About us</li>
          <li>Privacy&Security</li>
          <li>Contact us</li>
        </ul>
        <ul className="footer__item">
          <li className="footer__title">Help</li>
          <li>Help center</li>
          <li>FAQsy</li>
        </ul>
        <ul className="footer__item">
          <li className="footer__title">My account</li>
          <li>Edit profile</li>
          <li>My orders</li>
        </ul>
      </div>
      <div className="footer__connect">
        <li className="footer__title">Stay connected</li>
      </div>
    </footer>
  );
}
