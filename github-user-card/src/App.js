import React from 'react';
import Axios from 'axios';
import './App.css';
import FollowerList from './components/followerList';
import UserCard from './components/userCard';

class App extends React.Component {
  
  state = {
    myGithub: [],
    myFollowers: []
  }

  componentDidMount(){
    Axios
      .get('https://api.github.com/users/Dazmen')
      .then(res => {
        console.log('My Github API', res);
        this.setState({myGithub: res.data})
      })
      .catch(err => {
        console.log('User data was not recieved', err)
      })
      Axios
      .get('https://api.github.com/users/Dazmen/followers')
      .then(res => {
        console.log('Followers Array', res);
        this.setState({myFollowers: res.data})
      })
      .catch(err => {
        console.log('Follower data was note recieved', err)
      })
  }

  render(){
    console.log(this.state.myFollowers)
    return (
      <div>
        <header>
          <h1>Github-User-Card</h1>
          <h2>This time, with React!</h2>
        </header>
        <div>
          <UserCard myGithub={this.state.myGithub}/>
          <FollowerList myFollowers={this.state.myFollowers}/>
        </div>
      </div>
    );
  }
}

export default App;
