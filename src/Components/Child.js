import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/actionCreator";
import { removeTodo } from "../actions/actionCreator";

class Child extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      id: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete = (i) => {
    this.props.removeTodo(i);
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = () => {
    const obj = {
      id: Math.random(),
      name: this.state.name,
    };
    this.props.addTodo(obj);
  };

  render() {
    return (
      <div>
        <div className="container">
          <div class="container">
            <label for="formGroupExampleInput">
              <h4>Enter a Todo: </h4>
            </label>
            <input
              type="text"
              id="name"
              onChange={this.handleChange}
              size="100"
              placeholder="Write a Todo"
            />
            <button type="Submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>

          <div class="form-group"></div>
        </div>
        <div className="container mt-5">
          <table class="table">
            <tbody>
              {this.props.item.map((data, index) => (
                <tr className="container">
                  <th scope="row" key={index}></th>
                  <td>
                    <h3>{data.name}</h3>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={this.handleDelete.bind(this, data.id)}
                    >
                      Delete
                      <span class="glyphicon glyphicon-trash"></span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { item: state.array };
};

export default connect(mapStateToProps, { addTodo, removeTodo })(Child);
