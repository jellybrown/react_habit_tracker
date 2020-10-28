import React, { Component } from "react";
import Form from "./form";

import Habit from "./habit";

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };
  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };
  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <>
        <Form onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete} //다른아이들은 멤버변수에 함수가 정의되어있어서 props가 없음
            />
          ))}
        </ul>
        <button type="submit" id="reset-btn" onClick={this.props.onReset}>
          Reset All
        </button>
        <label htmlFor="reset-btn"></label>
      </>
    );
  }
}
//this.props.onReset: onreset을 받아올거라서 props
export default Habits;
