import React, { Component } from "react";
import { RecentFiles } from "../Components/RecentFiles/RecentFiles-widget";
import { RecentMedia } from "../Components/RecentMedia/RecentMedia-widget";
import { Switchlang } from "../Components/SwitchLang/SwitchLang-widget";
import { withRouter } from "react-router";

 class Mainwidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "ENG"
    };
  }
  props: {};

  _switchLanguage(newLang) {
    this.setState({ language: newLang });
  }

  render() {
    debugger;
    console.log(this.props);
    return (
      <div
      className="App"
        style={{
          width: "350px",
          height: "auto"
        }}
      >
        <RecentFiles {...this.props} language={this.state.language} />
        <RecentMedia {...this.props} language={this.state.language} />
        <Switchlang
          switchLanguage={this._switchLanguage.bind(this)}
          language={this.state.language}
        />
      </div>
    );
  }
}

export default withRouter(Mainwidget);