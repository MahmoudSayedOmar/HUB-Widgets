import React, { Component } from "react";
import { RecentFiles } from "../Components/RecentFiles/RecentFiles-widget";
import { RecentMedia } from "../Components/RecentMedia/RecentMedia-widget";

export default class Mainwidget extends Component {
  constructor(props) {
    super(props);
  
  }
  props: {
  
  };

  render() {
    return (
      <div style={
          { borderColor:'#a7a9aa',
            borderStyle:'solid',
            width:'300px',
            height:'500px'}}>

      <RecentFiles/>
      <RecentMedia/>
      
      </div>
    );
  }
}
