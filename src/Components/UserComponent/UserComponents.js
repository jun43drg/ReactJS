import { useState } from "react";
const UserComponent = () => {
  const [user, setUser] = useState({
    name: "Leo Messi",
    age: 37,
    club: "NaN",
  });
  const onIncreaseAgeHandler = () => {
    // let clonedUser = { ...user };
    // clonedUser.age += 1;
    // setUser(clonedUser);
    setUser({
      ...user,
      age: user.age + 1,
    });
  };
  return (
    <>
      <h3>Name:{user.name}</h3>
      <h4>
        <strong>Age:</strong>
        {user.age}
      </h4>
      <p>
        <strong>Club</strong>
        {user.club}
      </p>
      <button onClick={onIncreaseAgeHandler}>Click me!</button>
    </>
  );
};
export default UserComponent;
