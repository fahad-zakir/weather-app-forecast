import React from "react";

function Address({ getCoordinates }) {
  return (
    <form onSubmit={getCoordinates}>
      <input type="text" name="street" placeholder="Street Address..." />
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="state" placeholder="State..." />
      <input type="text" name="zip" placeholder="Zip Code..." />
      <button>Get Weather</button>
    </form>
  );
}

export default Address;