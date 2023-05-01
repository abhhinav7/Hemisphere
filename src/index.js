import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';

class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state={latitude:null, errorMessage:""}
  // }
  state={latitude:null, errorMessage:""}
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position)=>{
        this.setState({latitude:position.coords.latitude});
      },
      (error)=>{
        this.setState({errorMessage:error.message});
      },
    );
  }
  render(){
    if(this.state.errorMessage && !this.state.latitude){
      return(<h1>{this.state.errorMessage}</h1>)
    }
    if(!this.state.errorMessage && this.state.latitude){
      return(<><HemisphereDisplay latitude={this.state.latitude}/></>)
    }
    else{
      return(<h1>Loading.... </h1>)
    }
  }
}

ReactDOM.render(  
  <App />,
  document.querySelector('#root')
)