import React, { Component } from "react";
import "./RecentMediaStyles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import languages from "../../Localization/Lang";

export class RecentMedia extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      images: []
    };
  }
  props: {
    language: String
  };

  onChange(e) {
    if (e.target.files[0] !== undefined) {
      debugger;
      let _images = this.state.images;
      let _image = {
        image: URL.createObjectURL(e.target.files[0])
      };
      _images.push(_image);
      //console.log(e.target.files[0]);
      this.setState({ images: _images });
    }
    debugger;
  }
  render() {
    return (
      <div style={{ margin: "6px" }}>
        {" "}
        <header
          className={
            this.props.language === "ENG"
              ? "childcomponentheaderENG"
              : "childcomponentheaderAR"
          }
        >
          <div className="inlineleft">
            <FontAwesomeIcon icon="camera" color="gray" />
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
              {languages.recentMedia["headerLable"][this.props.language]}
            </label>
          </div>

          <div className="inlineright">
            <label for="photos" className="addlable">
              {languages.recentMedia["addLable"][this.props.language]}
            </label>
            <input
              id="photos"
              style={{ display: "none" }}
              type="file"
              accept="image/*"
              onChange={this.onChange}
            />
          </div>
        </header>
        <body className="body">
          {this.state.images.reverse().slice(0,5).map((image, key) => {
            return (
              <div
                className="imageitem"
                key={key}
                style={{
                  backgroundImage: `url(${image.image})`,
                  backgroundSize: "cover"
                }}
              />
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
              this.props.history.push("/seeall",{content:"All Recent Media"});}}
          >
            {languages.recentMedia["footerLable"][this.props.language]}
          </button>
        </footer>
      </div>
    );
  }
}
