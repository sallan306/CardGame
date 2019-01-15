import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    points: 0
  };

  removeFriend = (id) => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id === id);
    // Set this.state.friends equal to the new friends array





    var thisFriend
    this.setState({ friends });
    this.state.friends.map((friend, index) => {if(friend.id === id) {thisFriend = index}})
    console.log(thisFriend)
    if (friends[thisFriend].clicked === "false" && this.state.points !== "GAME OVER") {
      friends[thisFriend].clicked = "true";
      this.setState({ points: this.state.points + 1 });
      
      var currentIndex = friends.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = friends[currentIndex];
        friends[currentIndex] = friends[randomIndex];
        friends[randomIndex] = temporaryValue;
        
      }
    }
    else {
      this.setState({ points: "GAME OVER" });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }

  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>{this.state.points}</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            clicked={friend.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
