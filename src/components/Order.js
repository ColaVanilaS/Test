import React from "react";
import PropTypes from "prop-types";
import Shipment from "./Shipment";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
  static propTypes = {
    burgers: PropTypes.object,
    order: PropTypes.object,
    deleteFromOrder: PropTypes.func,
  };
  renderOrder = (key) => {
    const burger = this.props.burgers[key];
    const count = this.props.order[key];
    const isAvailable = burger && burger.status === "available";

    if (!burger) return null;

    if (!isAvailable) {
      return (
        <li className="unavailable" key={key}>
          Извините, {burger ? burger.name : "бургер"} временно недоступен
        </li>
      );
    }

    return (
      <CSSTransition
        classNames="order"
        key={key}
        timeout={{ enter: 5000, exit: 5000 }}
      >
        <li key={key}>
          <span>
            <span>{count}</span>
            шт. {burger.name}
            <span> {count * burger.price}₽</span>
            <button
              className="cancelItem"
              onClick={() => this.props.deleteFromOrder(key)}
            >
              ×
            </button>
          </span>
        </li>
      </CSSTransition>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const burger = this.props.burgers[key];
      const count = this.props.order[key];

      const isAvailable = burger && burger.status === "available";
      if (isAvailable) {
        return prevTotal + burger.price * count;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Ваш Заказ</h2>

        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>

        {total > 0 ? (
          <Shipment total={total} />
        ) : (
          <div className="nothingSelected">
            Выберите блюдо и добавьте к заказу
          </div>
        )}
      </div>
    );
  }
}

export default Order;
