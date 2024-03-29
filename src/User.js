import React from "react";
const User = (props) => {
  //   console.log(props.data.name);
  const { data } = props;
  return (
    <div>
      <h1>This is the User Component</h1>
      <h3>{data.name}</h3>
      <h3>{data.age}</h3>
      <h3>{data.email}</h3>
    </div>
  );
};

export default User;
