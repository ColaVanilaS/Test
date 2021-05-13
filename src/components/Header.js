import React from "react";
import PropTypes from "prop-types";

const Header = (props) => (
  <header className="top">
    <div className="wrap">
      <div className="header-content">
        <div className="header-raiting">
          <div className="header-rating_tag">Рейтинг:</div>
          <div className="header-rating_icon">★★★★★</div>
        </div>

        <div className="header-divider"></div>
        <h1 className="font-effect-fire-animation">{props.title}</h1>
        <h3>
          <span>
            Быстрая доставка горячих
            <span className="sub-header">#Бургеров</span>
          </span>
        </h3>
      </div>
    </div>
  </header>
);

// class Header extends React.Component { можно использовать если есть логика.
//   render() {
//     return (
//       <header className="top">
//         <div className="wrap">
//           <div className="header-content">
//             <div className="header-raiting">
//               <div className="header-rating_tag">Рейтинг:</div>
//               <div className="header-rating_icon">★★★★★</div>
//             </div>

//             <div className="header-divider"></div>
//             <h1 className="font-effect-fire-animation">{this.props.title}</h1>
//             <h3>
//               <span>
//                 Быстрая доставка горячих
//                 <span calssName="sub-header">#Бургеров</span>
//               </span>
//             </h3>
//           </div>
//         </div>
//       </header>
//     );
//   }
// }

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
