# Notification counter 
 ## example
```javascript
import { useEffect, useState } from "react";

function App() {
  const[count, setCount]=useState(1);

  function increaseCount(){
    setCount(currentValue=> currentValue+1)
  }
  
  useEffect(function(){
    console.log("above setInterval")
    setInterval(increaseCount,1000);
  },[])



  return <div>
    <div style={{display:"flex"}}>
    <div style={{backgroundColor:"red", borderRadius:50,padding:7,
    width:15, height:15, textAlign:"center"
    }}>
      {count}
    </div></div>
    <img style={{cursor:"pointer"}} src={"image"}
    width={30}/>
    <button onClick={increaseCount}>Increase</button>
  </div>
}

export default App
```

# Useeffect and fetch 
## example using linkdn top-bar

```javascript
import { useEffect, useState } from "react";
import { PostComponent } from "./post";

function App() {
const [currentTab,setCurrentTab] = useState("feed")
const [tabData,setData]=useState({});
const [loading, setLoading]=useState(true);

useEffect(function(){
  setLoading(true);
  fetch('https://jsonplaceholder.typicode.com/todos/1'+ currentTab)
      .then(async res=>{
        const json=await res.json();
        setData(json);
        setLoading(false);
      });
},[currentTab])



  return <div>
    <button onClick={function(){
      setCurrentTab("feed")
    }} style={{color: currentTab=="feed"? "red" : "black"}}>Feed</button>
    <button onClick={function(){
      setCurrentTab("Notifications")
    }} style={{color: currentTab=="Notifications"? "red" : "black"}}>Notifications</button>
    <button onClick={function(){
      setCurrentTab("messages")
    }} style={{color: currentTab=="messages"? "red" : "black"}}>messages</button>
    <button onClick={function(){
      setCurrentTab("Jobs")
    }} style={{color: currentTab=="Jobs"? "red" : "black"}}>Jobs</button>
    <br/>
    {loading ? "loading..." : tabData.title}
  </div>

}

export default App
```
# Children
## example 

```javascript
import React from 'react';

const Card = ({ children }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding : 20,
            margin: '10px',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
        }}>
            {children}
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Card>
                <h2>Card Title</h2>
                <p>This is some content inside the card.</p>
                <input type="text" />
            </Card>
            <Card>
                <h2>Another Card</h2>
                <p>This card has different content!</p>
            </Card>
        </div>
    );
};

export default App;
```
## Error Boundary
```javascript
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}

const BuggyComponent = () => {
    throw new Error("I crashed!");
};

const App = () => {
    return (
        <ErrorBoundary>
            <BuggyComponent />
        </ErrorBoundary>
    );
};
export default App;
```

