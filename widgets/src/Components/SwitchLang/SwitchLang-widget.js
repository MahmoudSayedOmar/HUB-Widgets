import React, { Component } from "react";
import "./SwitchLangStyles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gray } from "ansi-colors";
import languages from "../../Localization/Lang";

export class Switchlang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }
  props: {
    language: String,
    switchLanguage: () => {}
  };

  render() {
    return (
      <div style={{ margin: "6px" }}>
        <header
          className={
            this.props.language === "ENG"
              ? "childcomponentheaderENG"
              : "childcomponentheaderAR"
          }
        >
          {" "}
          <div className="inlineleft">
            <FontAwesomeIcon icon="globe-africa" color="gray" />
          </div>
          <div className="inlineleft">
            <label
              className={
                this.props.language === "ENG"
                  ? "headerlableENG"
                  : "headerlableAR"
              }
            >
              {" "}
              {languages.switchLanguage["headerLable"][this.props.language]}
            </label>
          </div>
        </header>
        <div className="body">
          <button
            className={
              this.props.language === "ENG"
                ? "customizedbuttonENG"
                : "customizedbuttonAR"
            }
            onClick={() => {
              this.props.switchLanguage("ENG");
            }}
          >
            English
          </button>
          <b
            style={{
              float: this.props.language === "ENG" ? "left" : "right",
              color: gray
            }}
          >
            {" "}
            .{" "}
          </b>
          <button
            className={
              this.props.language === "ENG"
                ? "customizedbuttonENG"
                : "customizedbuttonAR"
            }
            onClick={() => {
              this.props.switchLanguage("AR");
            }}
          >
            العربية
          </button>
        </div>
      </div>
    );
  }
}
