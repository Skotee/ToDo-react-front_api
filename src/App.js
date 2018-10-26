import React, { Component } from 'react';
import './App.css';
import Todos from "./component/Todos.js";
import Users from "./component/Users.js";
import Categories from "./component/Categories.js";
import Labels from "./component/Labels.js";

import axios from 'axios';

class App extends Component {

// constructor(props){
//   super(props);
//   this.state={
//     todo:[],
//     data:null,
//   }
//   // this.getData();
// }

  componentDidMount() {
    axios.get(
      'http://localhost:3001/categories',
      {
        headers: {
          "Authorization": "0cPYKT8RClpeRNYp"
        }
      }
    )
    .then((response) => {
        var response = response.data;
        console.log(response);
      },
        (error) => {
          var status = error.response.status;
        }
      );
  }


  render() {
    return (
      <div className="bgimg">
        <Todos/>
        <Categories/>
        <Labels />
        <Users />
      </div>
    )
  
}
}

export default App;

//   .then(parsedJSON => console.log(parsedJSON.results.map(user => (
//     {
//       id: '${todos.id}',
//       name: '${todos.name}',
//       description: '${todos.description}',
//       todos:
//     }
//   )))
//   .catch(error => console.log('parsing failed', error));

