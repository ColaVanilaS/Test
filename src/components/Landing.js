import React, { useState } from "react";
import PropTypes from "prop-types";
import restaurants from "../sample-restaurants";

const Landing = (props) => {
  // state = {
  //   display: false,
  //   title: "",
  //   url: "",
  // };

  const [display, toggleDisplay] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const displayList = () => {
    toggleDisplay(!display);
  };

  const getTitle = (restaurant) => {
    const { title, url } = restaurant;
    //this.setState({ title, url, display: false });
    setTitle(title);
    setUrl(url);
    toggleDisplay(false);
  };

  const goToRestaurant = () => {
    props.history.push(`/restaurant/${url}`);
  };
  return (
    <div className="restaurant_select">
      <div className="restaurant_select_top">
        <div
          onClick={displayList}
          className="restaurant_select_top-header font-effect-outline"
        >
          {title ? title : "Выбери ресторан "}
        </div>
        <div>
          <div onClick={displayList} className="arrow_picker-up"></div>
          <div onClick={displayList} className="arrow_picker-down"></div>
        </div>
      </div>

      {display ? (
        <div className="restaurant_select_bottom">
          <ul>
            {restaurants.map((restaurant) => {
              return (
                <li onClick={() => getTitle(restaurant)} key={restaurant.id}>
                  {restaurant.title}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
      {title && !display ? (
        <button onClick={goToRestaurant}>Перейти в ресторан!</button>
      ) : null}
    </div>
  );
};

Landing.propTypes = {
  history: PropTypes.object,
};

export default Landing;
