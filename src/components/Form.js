// import React from "react";

const Form = props => {
  const { value, change, submit } = props;
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={value}
        onChange={change}
        placeholder="Enter the name of city"
      />
      <button>Search city</button>
    </form>
  );
};

export default Form;
