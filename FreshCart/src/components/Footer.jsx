import React from 'react';
import { footerData } from '../assets/data';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        {footerData.map((column, index) => (
          <div key={index} className="footer__column">
            {column.heading && <h4 className="footer__column-heading">{column.heading}</h4>}
            <ul className="footer__column-list">
              {column.items.map((item, idx) => (
                <li key={idx} className="footer__column-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer__bottom">
        <div className="footer__payment-partners">
          <span className="footer__payment-partners-text">Payment Partners</span>
          <img className="footer__payment-partner-logo" src="https://upload.wikimedia.org/wikipedia/commons/6/69/Amazon_Pay_logo.png" alt="Amazon Pay" />
          <img className="footer__payment-partner-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" />
          <img className="footer__payment-partner-logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
          <img className="footer__payment-partner-logo" src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
        </div>
        <div className="footer__app-links">
          <span className="footer__app-links-text">Get deliveries with FreshCart</span>
          <img className="footer__app-link-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Available_on_the_App_Store_%28black%29_SVG.svg/640px-Available_on_the_App_Store_%28black%29_SVG.svg.png" alt="App Store" />
          <img className="footer__app-link-logo" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
        </div>
      </div>
      <div className="footer__last">
        <p className="footer__last-text">© 2022 - 2025 FreshCart eCommerce HTML Template. All rights reserved. Powered by <span className="footer__highlight">Codescandy.</span></p>
        <div className="footer__social-media">
          Follow us on <i className="footer__social-icon fa-brands fa-facebook"></i> <i className="footer__social-icon fa-brands fa-twitter"></i> <i className="footer__social-icon fa-brands fa-instagram"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// import React from 'react'
// import { footerData } from '../assets/data'
// import "../styles/Footer.css"
// const Footer = () => {
//   return (
// <footer className="footer">
// <div className="footer-content">
//         {footerData.map((column, index) => (
//           <div key={index} className="footer-column">
//             {column.heading && <h4>{column.heading}</h4>}
//             <ul>
//               {column.items.map((item, idx) => (
//                 <li key={idx}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//       <div className="footer-bottom">
//         <div className="payment-partners">
//           <span>Payment Partners</span>
//           <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Amazon_Pay_logo.png" alt="Amazon Pay" />
//           <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" />
//           <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
//           <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
//         </div>
//         <div className="app-links">
//           <span>Get deliveries with FreshCart</span>
//           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Available_on_the_App_Store_%28black%29_SVG.svg/640px-Available_on_the_App_Store_%28black%29_SVG.svg.png" alt="App Store" />
//           <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
//         </div>
//       </div>
//       <div className='footer-last'>
//       <p>© 2022 - 2025 FreshCart eCommerce HTML Template. All rights reserved. Powered by <span className="highlight">Codescandy.</span></p>
//       <div>Follow us on <i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-instagram"></i></div>
//       </div>

//     </footer>
//   )
// }

// export default Footer
