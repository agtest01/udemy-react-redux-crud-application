import React from 'react';

function App() {
  // const greeting ="Hi! Tom!";
  // const dom = <h1 className="foo">{greeting}</h1>;
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="test" onChange={() =>{ console.log("test") }} />
    </React.Fragment>
  )
}

export default App;
