import React, { memo } from "react";

const Form = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <input ref={inputRef} type="text" id="add-form" />
      <label htmlFor="add-form"></label>
      <button type="submit" id="add-btn">
        Add
      </button>
      <label htmlFor="add-btn"></label>
    </form>
  );
});

export default Form;
