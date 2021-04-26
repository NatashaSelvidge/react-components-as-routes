import React, { Component } from "react";

export class Signup extends Component {
  render() {
    return (
      <div>
        <h3>Sign Up!</h3>
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Username" />
            <br></br>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" placeholder="password" />
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
