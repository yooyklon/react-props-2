import React from "react";

import clipString from "../utils/clipString";

export default function Item({
  url,
  MainImage,
  title,
  currency_code,
  price,
  quantity,
  state,
}) {
  if (state === "removed") {
    return null;
  }

  const newTitle = clipString(title, 50);

  const itemPrice =
    (currency_code === "USD" && `$${price}`) ||
    (currency_code === "EUR" && `€${price}`) ||
    `${price} ${currency_code}`;

  const itemClass =
    (quantity < 10 && "evel-low") ||
    (quantity < 20 && "level-medium") ||
    (quantity > 20 && "level-high");

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage.url_570xN} alt="" />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{newTitle}</p>
        <p className="item-price">{itemPrice}</p>
        <p className={`item-quantity ${itemClass}`}>{quantity} left</p>
      </div>
    </div>
  );
}
