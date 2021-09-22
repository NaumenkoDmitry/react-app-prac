import { Component } from "react";

class Clicker extends Component{
  constructor(props){
    super(props);
    this.state={
            value:0
          }
  }
  getClick = ()=>{
    const {value} = this.state;
    this.setState({
      value: value+1
    })
  }
  render(){
    const {text} = this.props;
    const {value} = this.state;
    const butt = <button onClick={this.getClick} > Click</button>;
    return(
      <div>
        <p>{text}: {value}</p>
        {/* {butt} */}
        {value <10?butt:false}
      </div>
    )
  }
}

export default Clicker;
