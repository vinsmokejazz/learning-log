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
# Routes in React with example
```javascript
import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="neet/online-coaching-class-11" element={<Class11Program />} />
            <Route path="neet/online-coaching-class-12" element={<Class12Program />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div style={{ height: "100vh", background: "yellow" }}>
      <Header />
      <div style={{ height: "90vh", background: "red" }}>
        <Outlet />
      </div>
      <footer style={{ background: "black", color: "white", textAlign: "center", padding: "10px" }}>
        Footer Content
      </footer>
    </div>
  );
}

function Header() {
  return (
    <div style={{ background: "blue", color: "white", padding: "10px" }}>
      <Link to="/" style={{ color: "white", textDecoration: "none", margin: "0 10px" }}>
        Allen
      </Link>
      |
      <Link
        to="/neet/online-coaching-class-11"
        style={{ color: "white", textDecoration: "none", margin: "0 10px" }}
      >
        Class 11
      </Link>
      |
      <Link
        to="/neet/online-coaching-class-12"
        style={{ color: "white", textDecoration: "none", margin: "0 10px" }}
      >
        Class 12
      </Link>
    </div>
  );
}

function Landing() {
  return <div>Welcome to ALLEN</div>;
}

function Class11Program() {
  return <div>Class 11</div>;
}

function Class12Program() {
  return <div>Class 12</div>;
}

export default App;
```
# STOP AND START CLOCK EXAMPLE
```javascript
import React, { useRef, useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const timer = useRef(null);

  function startClock() {
    if (!timer.current) {
      setCount(0);  // Reset the count before starting
      timer.current = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
  }

  function stopClock() {
    clearInterval(timer.current);
    timer.current = null;  // Reset the timer ref
  }

  function reStart() {
    setCount(0);  // Reset the count
    stopClock();  // Stop the clock
  }

  useEffect(() => {
    return () => clearInterval(timer.current);  // Cleanup on unmount
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={startClock}>START</button>
      <button onClick={stopClock}>STOP</button>
      <button onClick={reStart}>CLEAR</button>
    </div>
  );

export default App;
```
# Scroll to bottom ex

```javascript
import React, { useEffect, useRef, useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState(["Hello!", "How are you?","everything fine"]);
  const chatBoxRef = useRef(null);

  // Function to simulate adding new messages
  const addMessage = () => {
    setMessages((prevMessages) => [...prevMessages, "New message!"]);
  };

  // Scroll to the bottom whenever a new message is added
  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  return (
    <div>
      <div 
        ref={chatBoxRef} 
        style={{ height: "200px", overflowY: "scroll", border: "1px solid black" }}
      >
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <button onClick={addMessage}>Add Message</button>
    </div>
  );
}

export default Chat;
``` 
# Rolling up state and Prop drilling eg
```javascript
import { useState } from "react"

function App(){
  return <div>
    <LightBulb/>
  </div>
}

function LightBulb(){
  const [bulbOn,setBulbOn]=useState(false);
  return <div>
    <BulbState bulbOn={bulbOn}/>
    <ToggleBulbState setBulbOn={setBulbOn} 
    bulbOn={bulbOn} />

  </div>
}

function BulbState({bulbOn}){
  return <div>
    {bulbOn ? "bulb on": "bulb off"}
  </div>

}

function ToggleBulbState({bulbOn,setBulbOn}){
  function toggle(){
    //setBulbOn(currentState=> !currentState);
    setBulbOn(!bulbOn);
  }
  return <div>
    <button onClick={toggle}>Toggle Bulb</button>
  </div>

}

export default App
```
# Avoid Prop Drilling by using Context API
## UseContext and provider frm react...components should be wrapped under Provider
```javascript
import { useState, createContext , useContext } from "react"
//ideally context stored in seprate file
const bulbContext=createContext(); //context created always outside the component 

function App(){
  const [bulbOn,setBulbOn]=useState(true);

  return <div>
    <bulbContext.Provider value={{
      bulbOn: bulbOn,
      setBulbOn: setBulbOn,
    }}>
      <Light/>   
    </bulbContext.Provider> 
  </div>
}

function Light(){
  
  return <div>
    <LightBulb/>
    <LightSwitch/>
  </div>
}

function LightBulb(){
  const {bulbOn}=useContext(bulbContext);
  return <div>
    {bulbOn ? "bulb on": "bulb off"} //images can added!!
  </div>

}

function LightSwitch(){
  const {bulbOn,setBulbOn}=useContext(bulbContext);
  function toggle(){
    //setBulbOn(currentState=> !currentState);
    setBulbOn(!bulbOn);
  }
  return <div>
    <button onClick={toggle}>Toggle Bulb</button>
  </div>

}
export default App 
```
## Removing ugly code and making bulbprovider as own componet
```javascript
import { useState, createContext , useContext } from "react"
//ideally context stored in seprate file
const bulbContext=createContext(); //context created always outside the component 

function BulbProvider({children}){
  const [bulbOn,setBulbOn]=useState(true);
  return <bulbContext.Provider value={{
    bulbOn: bulbOn,
    setBulbOn: setBulbOn,
  }}>
    {children}
  </bulbContext.Provider> 

}

function App(){

  return <div>
    <BulbProvider>
      <Light/>
    </BulbProvider>
    
  </div>
}

function Light(){
  
  return <div>
    <LightBulb/>
    <LightSwitch/>
  </div>
}

function LightBulb(){
  const { bulbOn }=useContext(bulbContext);
  return <div>
    {bulbOn ? 
    (<img src="https://toppng.com/uploads/preview/light-bulb-on-off-png-11553944387r25q4wkfyw.png"></img> ) :

    (<img src="https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940319kdxsp3rf0i.png"></img> )}
  </div> 

}

function LightSwitch(){
  const { bulbOn , setBulbOn }=useContext(bulbContext);
  function toggle(){
    //setBulbOn(currentState=> !currentState); best use
    setBulbOn(!bulbOn);
  }
  return <div>
    <button onClick={toggle}>Toggle Bulb</button>
  </div>
}
export default App
```
# LocalStorage counter eg
```javascript
import { useEffect, useState } from "react";

function App() {
const [count,setCount]=useState(()=>{
const localCount=localStorage.getItem("count");
return localCount ? parseInt(localCount,10) : 1;
});
useEffect(()=>{
  localStorage.setItem("count",count)
},[count])

function incrementC(){
  setCount(prevC=>prevC+1);
}
function decreC(){
  setCount(prevC=>prevC-1);
}

return <div>
  <p>{count}</p>
  <button onClick={incrementC}>++</button>
  <button onClick={decreC}>--</button>
</div>
}
export default App
```
# Fetching User Data
```javascript
import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]); // Store user data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Runs only once when the component mounts

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;
```
## better code
```javascript
// Import useState and useEffect hooks from React
import { useState, useEffect } from "react";

// Define the UserData component
const UserData = () => {
    // State to store fetched data, loading status, and error messages
    const [users, setUsers] = useState([]); // Array to store users data
    const [loading, setLoading] = useState(true); // Boolean to track loading state
    const [error, setError] = useState(null); // State to store error messages if any

    // useEffect to fetch data when the component mounts
    useEffect(() => {
        // Function to fetch user data from an API endpoint
        const fetchUsers = async () => {
            try {
                // Fetch data from an API endpoint using the fetch function
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                // Check if the response is OK (status code 200)
                if (!response.ok) {
                    // Throw an error if the response is not OK
                    throw new Error("Failed to fetch data");
                }

                // Parse the response into JSON format
                const data = await response.json();

                // Update the users state with the fetched data
                setUsers(data);
            } catch (error) {
                // Catch any error that occurs during fetching
                // Set the error state with the error message
                setError(error.message);
            } finally {
                // Finally block to execute after fetching or error
                // Set loading to false once data is fetched or an error occurs
                setLoading(false);
            }
        };

        // Call the fetchUsers function to fetch data when the component mounts
        fetchUsers();
    }, []); // Empty dependency array ensures the effect runs only once on component mount

    // Render loading message, error message, or the list of users
    return (
        <div>
            {/* Display the title of the page */}
            <h1>User Data</h1>

            {/* Display loading message if data is still being fetched */}
            {loading && <p>Loading...</p>}

            {/* Display error message if any error occurs during fetching */}
            {error && <p>Error: {error}</p>}

            {/* If data is loaded and no errors occurred, display the list of users */}
            {!loading && !error && (
                <ul>
                    {/* Map over the users array and display user details */}
                    {users.map((user) => (
                        // Display user details in a list item
                        <li key={user.id}>
                            {/* Key for each user, as React requires a unique key for lists */}
                            <p>Name: {user.name}</p> {/* Display user's name */}
                            <p>Email: {user.email}</p> {/* Display user's email */}
                            <p>City: {user.address.city}</p> {/* Display user's city */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

// Export the UserData component as the default export to be used in other components
export default UserData;
```

# Profile and Post Component eg : linkdn
```javascript
import { useState, useEffect } from "react";

function App() {
  return (
    <div style={{ backgroundColor: "#dfe6e9", height: "100vh", padding: "20px" }}>
      {/* Main Container */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "20px" }}>
        {/* Profile Section (Left Side) */}
        <div>
          <ProfileCard />
        </div>

        {/* Posts Section (Center) */}
        <div>
          <PostComponent />
          <PostComponent />
          <PostComponent />
        </div>
      </div>
    </div>
  );
}

// PostComponent
const postStyle = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  border: "1px solid gray",
  padding: 16,
  marginTop: 10,
};

function PostComponent() {
  return (
    <div style={postStyle}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://picsum.photos/200/300"
          alt="User avatar"
          style={{ width: 40, height: 40, borderRadius: "50%", marginRight: 10 }}
        />
        <div style={{ fontSize: 14 }}>
          <b>VIKING</b>
          <div>23,888 followers</div>
          <div>12m</div>
        </div>
      </div>

      {/* Post Content */}
      <div style={{ fontSize: 14, marginTop: 10 }}>
        Want to know how to win big? Check out how these folks won $6000 in bounties.
      </div>
    </div>
  );
}

// ProfileCard
const profileCardStyle = {
  backgroundColor: "white",
  width: 200,
  borderRadius: 10,
  overflow: "hidden",
};

function ProfileCard() {
  return (
    <div style={profileCardStyle}>
      {/* Banner */}
      <div style={{ backgroundColor: "#74b9ff", height: 80, position: "relative" }}>
        {/* Profile Image */}
        <div
          style={{
            position: "absolute",
            top: 50,
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src="https://png.pngtree.com/png-vector/20190116/ourmid/pngtree-vector-clock-icon-png-image_322077.jpg"
            alt="Profile"
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              border: "3px solid white",
            }}
          />
        </div>
      </div>

      {/* Profile Info */}
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <b>VIKING</b>
        <div>Working at WebRTC</div>
      </div>

      {/* Stats */}
      <div style={{ borderTop: "1px solid gray", paddingTop: 10, marginTop: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <div>Profile views</div>
          <div>20,000</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Post impressions</div>
          <div>11,000</div>
        </div>
      </div>
    </div>
  );
}

export default App;
```