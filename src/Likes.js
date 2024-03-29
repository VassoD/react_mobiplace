import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      dislikes: 0,
      updated: false,
    };
  }

  updateLikes = () => {
    if (!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true,
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false,
        };
      });
    }
  };

  updateDislikes = () => {
    if (!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          dislikes: prevState.dislikes + 1,
          updated: true,
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          dislikes: prevState.dislikes - 1,
          updated: false,
        };
      });
    }
  };

  render() {
    return (
      <div className="icons">
        <div>
          <FontAwesomeIcon
            icon={faThumbsUp}
            size="lg"
            color="green"
            onClick={this.updateLikes}
          />
          <FontAwesomeIcon
            icon={faThumbsDown}
            pull="right"
            size="lg"
            color="red"
            onClick={this.updateDislikes}
          />
        </div>
        <div className="numberLikes">
          <div className="nlikes">{this.state.likes}</div>
          <div className="nlikes"> {this.state.dislikes}</div>
        </div>
      </div>
    );
  }
}

export default Likes;