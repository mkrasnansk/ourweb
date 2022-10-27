import React from "react";

const SubscribeForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onClick={handleSubmit}>
      <input type="email" placeholder="ibthemes21@gmail.com" />
      <button>Notify Me</button>
    </form>
  );
};

export default SubscribeForm;
