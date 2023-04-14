import React, { Component } from "react";
import { render } from "react-dom";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  // componentDidMount() {
  //   fetch("events/api")
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log(data); // <-- Add this line to log the data
  //       this.setState(() => {
  //         return {
  //           data,
  //           loaded: true
  //         };
  //       });
  //     });
  // }
  componentDidMount() {
    fetch("events/api")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }
  

  render() {
    return (
     <div>
        {this.state.data.map(events => {
          return (
            <div>
                Event: {events.title}
                Details {events.details}
            </div>
          );
        })}
      </div>
    );
  }
}

export default New;

const container = document.getElementById("api");
render(<New />, container);