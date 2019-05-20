import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./RecentFilesStyles.scss";
import languages from "../../Localization/Lang";
import Images from "../../Assets/Files";

export class RecentFiles extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      files: []
    };
  }
  props: {
    language: String
  };

  onChange(e) {
    if (e.target.files[0] !== undefined) {
      let _files = this.state.files;
      let _file = {
        name: e.target.files[0].name,
        type: e.target.files[0].name.split(".")[1],
        file: e.target.files[0]
      };
      _files.push(_file);
      console.log(_file);
      this.setState({ files: _files });
    }
  }

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
          <div className="inlineleft">
            <FontAwesomeIcon icon="file-alt" color="gray" />
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
              {languages.recentFiles["headerLable"][this.props.language]}
            </label>
          </div>

          <div className="inlineright">
            <label for="files" className="addlable">
              <b>{languages.recentFiles["addLable"][this.props.language]}</b>{" "}
            </label>
            <input
              id="files"
              style={{ display: "none" }}
              type="file"
              onChange={this.onChange}
            />
          </div>
        </header>
        <body className="body">
          {
          this.state.files.reverse().slice(0,3).map((file, key)=> {
            return (
              <div className="fileitem" key={key}>
                <img src={Images[file.type]!==undefined?Images[file.type]:Images["otherFile"]} 
                     className="filelogo" alt="logo" />
                <label className="filelable">{file.name}</label>
              </div>
            );
          })}
        </body>
        <footer className="childcomponentfooter">
          <button
            className={
              this.props.language === "ENG"
                ? "customizedbuttonENG"
                : "customizedbuttonAR"
            }
            onClick={()=>{
              debugger;
              this.props.history.push("/seeall",{content:"All Recent Files"});
            }}
           >
            {languages.recentFiles["footerLable"][this.props.language]}
          </button>
        </footer>
      </div>
    );
  }
}
