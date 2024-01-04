import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About class component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is namaste react series</h2>
        <UserClass name={"Tanya Verma(class"} location={"Dehradun class"} />
      </div>
    );
  }
}
export default About;
