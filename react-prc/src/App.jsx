import { useEffect, useState } from "react";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Card>
        <div style={{color:"white"}}>
          What do you want to post <br/> <br/>
          <input type={"text"} />
        </div>
      </Card>
      <Card> hi there </Card>
    </div>
  );

  function Card({ children }) {
    return (
      <div
        style={{
          backgroundColor: "black",
          borderRadius: 10,
          color: "white",
          padding: 20,
          margin: 10,
        }}
      >
        {children}
      </div>
    );
  }
}

export default App;
