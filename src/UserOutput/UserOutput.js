import React from "react";
import './UserOutput.css';

const UserOutput = props => {
  return (
    <div className="UserOutput">
      <p>Username : {props.userName}</p>
      <p>another textxxxxx</p>
    </div>
  );
};

export default UserOutput;
