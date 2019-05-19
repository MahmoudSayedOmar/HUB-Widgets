import React, { Component } from "react";
import './RecentMediaStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class RecentMedia extends Component {
  constructor(props) {
    super(props);
    this.onChange=this.onChange.bind(this);
    this.state={
        images:[],
    }
  }

 
  onChange(e) { 
    let reader = new FileReader();
    if(e.target.files[0]!==undefined)
{     
  debugger;
      let _images=this.state.images;
      let _image={name:e.target.files[0].name,
                image: reader.readAsDataURL(e.target.files[0])};
      _images.push(_image);
      console.log(e.target.files[0])
        this.setState({images:_images});
      }
      debugger;
  }
  render() {
    return (
      <div>
     <header className="recentmedia">

<div style={{float:"left"}} className="oneline" >
    <FontAwesomeIcon
    icon="camera"
    color="gray"/>
</div>

<div style={{float:"left"}}  className="oneline" >
    <label className="recentmedialable">Recent Media</label>
</div>

<div style={{float:"right"}}  className="oneline" >
    <label for="photos" className="addlable" ><b>+Add</b> </label>
    <input id="photos" style={{display:'none'}} type="file" accept="image/*" onChange={this.onChange}/>
</div>


</header>
<div>
{this.state.images.map((image,key)=>{
        return <div className="imageitem" key={key}>
      
      style={{backgroundImage: `${image.name}`}}

        </div>
    })}
    </div>
<footer className="recentMediafooter" ><a href="#" className="seeall"><b>See All</b></a></footer>
      </div>
    );
  }
}
