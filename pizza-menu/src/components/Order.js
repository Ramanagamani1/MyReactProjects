function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're happy to welcome you between {openHour}:00 and {closeHour}:00.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default Order;
