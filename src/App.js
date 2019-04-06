import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import WrapperImages from "./components/WrapperImages";
import FriendCard from "./components/FriendCard";
import friendList from "./friends.json";

class App extends Component {

  // Setting this.state.friends to the friends json array
  state = {
    friendList,
    selected: [],
    score: 0,
    topScore: 0,
    status: ''
  };

  // When this component mounts, shuffle the FriendList Array
  componentDidMount() {

    this.setState({ friendList: this.shuffle(friendList) })
  }

  // Trigger when friend is selected
  selectedFriend = id => {

    // Add previously selected ids to the selected array and shuffle the friendsList
    this.setState({
      selected: this.state.selected.concat(id),
      friendList: this.shuffle(friendList)
    });

    // Search to see if id has already been selected
    const selected = this.state.selected.find(element => { return element === id });

    // Check if an id was selected
    if (!selected) {

      // Increment Score
      this.setState({ score: this.state.score + 1 });

      // Increment Top Score if Score and TopScore are the same
      this.setState({
        topScore: this.state.score >= this.state.topScore ? this.state.topScore + 1 : this.state.topScore
      });

      // Display correct guess
      this.setState({ status: 'You guessed correctly!' })

      console.log("score", this.state.score);

      // Check to see if all guess were correct
      if (this.state.score === 11) {

        this.setState({ status: 'You win!' })
      }
    }
    else {

      // Reset Score and Selected Ids - Display incorrect guess
      this.setState({
        score: 0,
        selected: [],
        status: 'You guessed incorrectly! Try again...'
      });

      // Make game shake everytime some lose
      var element = document.getElementById("shakerBox");
      element.classList.remove("shakeFriends");
      void element.offsetWidth;
      element.classList.add("shakeFriends");

    }
  };

  // Shuffle the FriendList array
  shuffle = sourceArray => {
    for (var i = 0; i < sourceArray.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (sourceArray.length - i));

      var temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
    }
    return sourceArray;
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header status={this.state.status || "Click an image to begin!"} score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <WrapperImages>
          {this.state.friendList.map(friend => (
            <FriendCard
              selectedFriend={this.selectedFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
          ))}
        </WrapperImages>
      </Wrapper>
    );
  }
}

export default App;
