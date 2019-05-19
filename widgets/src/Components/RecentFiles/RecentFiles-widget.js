import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../App.css'
import { from } from "rxjs";
import  Images  from '../../Assets/Files'


export class RecentFiles extends Component {
  constructor(props) {
    super(props);
    this.onChange=this.onChange.bind(this);
    this.state={
        files:[],
    }
  }
  onChange(e) { 
    if(e.target.files[0]!==undefined)
{
      let _files=this.state.files;
      let _file={name:e.target.files[0].name,
                type:e.target.files[0].name.split('.')[1],file:e.target.files[0]};
      _files.push(_file);
      console.log(_file)
         this.setState({files:_files});
      }
  }

  render() {
    return (
        <div>
         
            
    <header className="recentfiles">

    <div style={{float:"left"}} className="oneline" >
        <FontAwesomeIcon
        icon="file-alt"
        color="gray"/>
    </div>
    
    <div style={{float:"left"}}  className="oneline" >
        <label className="recentfileslable">Recent Files</label>
    </div>

    <div style={{float:"right"}}  className="oneline" >
        <label for="files" className="addlable" ><b>+Add</b> </label>
        <input id="files" style={{display:'none'}} type="file" onChange={this.onChange}/>
    </div>
    

    </header>
    <div className="body">
       
    {this.state.files.map((file,key)=>{
        return <div className="fileitem" key={key}>
        <img src={Images[file.type]}
        className="filelogo" alt="logo" />
        <label className="filelable" >{file.name}</label></div>
    })}

 </div>
 <footer className="recentfilesfooter" ><a href="#" className="seeall"><b>See All</b></a></footer>
 </div>
    );
  }
}
