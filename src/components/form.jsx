import React, { Component } from "react";

class Form extends Component {
  inputRef = React.createRef();
  onSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = "";
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type="text" id="add-form" />
        <label htmlFor="add-form"></label>
        <button type="submit" id="add-btn">
          Add
        </button>
        <label htmlFor="add-btn"></label>
      </form>
    );
  }
}

export default Form;
