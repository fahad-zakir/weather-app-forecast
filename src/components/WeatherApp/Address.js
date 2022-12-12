import React from "react";

function Address({ getForecast, error }) {
  return (
    <form onSubmit={getForecast}>
      <input type="text" name="street" placeholder="Street Address..." />
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="state" placeholder="State..." />
      <input type="text" name="zip" placeholder="Zip Code..." />
      <button>Get Weather</button>
      <div className="weather__error">
      {error}
      </div>
    </form>
  );
}

export default Address;
