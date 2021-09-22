import { Component } from "react";
import userDb from "../../users";
import AlohaList from "../AlohaList";

class UserList extends Component{
  constructor(props){
    super(props);

    this.state = {
      users: userDb.map((user) => ({ ...user })),
    };
  }
 
  render(){
    const { users } = this.state;
    
    return(
      <ul>
        <li><AlohaList users={users} /></li>
      </ul>
     
    
    )
  }
}

export default UserList;


