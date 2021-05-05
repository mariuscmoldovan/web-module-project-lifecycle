import React from 'react';
import axios from 'axios';
import './App.css';
import User from './components/User'

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      user:[],
      followers:[],
    }
  }



  componentDidMount(){
    axios
    .all([
     axios.get(`https://api.github.com/users/marius-moldovan`),
     axios.get(`https://api.github.com/users/marius-moldovan/followers`),
    ])
    .then(
      axios.spread((response1,response2) => {
      console.log(response1, response2)
      this.setState({user: response1.data, followers: response2.data});
      }
    ))
    .catch(err => {
      console.log(err)
    })
  }



  render(){
    return (
      <div className="App">
        <User user={this.state.user} followers={this.state.followers}/>
    </div>
    );
  }
}

export default App;