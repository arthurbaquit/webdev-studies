import React from "react";

function Greeting() {
  const [testClickButton, setTestClickButton] = React.useState(false);
  const changeTestClickButton = () => {
    setTestClickButton((state) => !state);
  };
  return (
    <div>
      <h1>Hello, world!</h1>
      {!testClickButton ? (
        <p>This is the original text.</p>
      ) : (
        <p>Button clicked!</p>
      )}
      <button onClick={changeTestClickButton}> Change text! </button>
    </div>
  );
}

export default Greeting;
