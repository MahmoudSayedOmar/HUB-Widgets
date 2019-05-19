import React, { Component } from "react";
import { RecentFiles } from "../Components/RecentFiles/RecentFiles-widget";
import { RecentMedia } from "../Components/RecentMedia/RecentMedia-widget";
import { Switchlang } from "../Components/SwitchLang/SwitchLang-widget";
export default class Mainwidget extends Component {
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
    return (
      <div
        style={{
          width: "350px",
          height: "auto"
        }}
      >
        <RecentFiles language={this.state.language} />
        <RecentMedia language={this.state.language} />
        <Switchlang
          switchLanguage={this._switchLanguage.bind(this)}
          language={this.state.language}
        />
      </div>
    );
  }
}
