import React, { Component } from "react";
import { withRouter } from "react-router";

class SeeAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  props: {
      content:String,
  };

  render() {
    return (
      <div >
       <p style={{float:"left"}}>{this.props.location.state.content}</p>
      </div>
    );
  }
}
export default withRouter(SeeAll);