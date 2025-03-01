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
import { useState, createContext, useContext } from "react"
//ideally context stored in seprate file
const bulbContext = createContext(); //context created always outside the component 

function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);
  return <bulbContext.Provider value={{
    bulbOn: bulbOn,
    setBulbOn: setBulbOn,
  }}>
    {children}
  </bulbContext.Provider>

}

function App() {

  return <div>
    <BulbProvider>
      <Light />
    </BulbProvider>

  </div>
}

function Light() {

  return <div>
    <LightBulb />
    <LightSwitch />
  </div>
}

function LightBulb() {
  const { bulbOn } = useContext(bulbContext);
  return <div>
    {bulbOn ?
      (<img src="https://toppng.com/uploads/preview/light-bulb-on-off-png-11553944387r25q4wkfyw.png"></img>) :

      (<img src="https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940319kdxsp3rf0i.png"></img>)}
  </div>

}

function LightSwitch() {
  const { bulbOn, setBulbOn } = useContext(bulbContext);
  function toggle() {
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
  const [count, setCount] = useState(() => {
    const localCount = localStorage.getItem("count");
    return localCount ? parseInt(localCount, 10) : 1;
  });
  useEffect(() => {
    localStorage.setItem("count", count)
  }, [count])

  function incrementC() {
    setCount(prevC => prevC + 1);
  }
  function decreC() {
    setCount(prevC => prevC - 1);
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
# Custom Hooks (useFetch and usePostTitle eg)
## useFetch.jsx
```javascript
import { useState, useEffect } from "react";

//custom hook
export function usePostTitle() {
  const [post, setPost] = useState({});

  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    setPost(data);
  }

  useEffect(() => {
    getPosts();
  }, [])

  return <div>
    {post.title}
  </div>

}

export function useFetch(url) {
  const [finalData, setFinalData] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(url);

  async function getDetails() {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setFinalData(data)
    setLoading(false);
  }

  useEffect(() => {
    getDetails();
  }, [url]) // should mount everytime url changes orelse stuck in 1 url

  useEffect(() => {
    setInterval(getDetails, 10 * 1000) //every 10s re-fetching backend for any updates mostly used for mobile
  }, []); //cleanup

  //if only getting data frm setIntv ..the data will load after 10s n updates evry 10s
  // the flash of evry 10s can be fixed by adding loading 

  return {
    finalData,
    loading
  }
}
```
## App.jsx
```javascript
import { useState, useEffect } from "react";
import { useFetch, usePostTitle } from "./hooks/useFetch";

function App() {
  const postTitle = usePostTitle();
  const [currentPost, setCurrentPost] = useState(1);
  const { loading, finalData } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

  if (loading) {
    return <div>
      Loading...
    </div>
  }

  return (
    <div>
      {postTitle}
      <br />
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
      {JSON.stringify(finalData)}
    </div>
  )
}
export default App
```
# useDebounced hook
## application like search in amazon
```javascript
import { useState, useEffect, useRef } from "react";

function useDebounce(orgFn) {
  const currentClock = useRef();

  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(orgFn, 200);
  }
  return fn

}

function App() {
  function sendDataToBackend() {
    fetch("api.amazon.com/search/");
  }
  const debouncedFn = useDebounce(sendDataToBackend)

  return <div>
    <input type="text" onChange={debouncedFn}></input>
  </div>

}
export default App
```
## nodeJS implementation for reference
```javascript
let currentClock;
function searchBackend() {
  console.log("request sent to backend");
}

function debounceSearch() {
  clearTimeout(currentClock);
  currentClock = setTimeout(searchBackend, 30);
}

debounceSearch();
debounceSearch();
```
# RECOIL
```javascript
import { useState } from 'react'
import './App.css'
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from './store/atoms/counter';

function App() {

  return (
    <RecoilRoot>
     <Counter />
    </RecoilRoot>
  )
}

function Counter() {

  return <div>
    <CurrentCount />
    <Increase />
    <Decrease />
  </div>
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom);
  return <div>
    {count}
  </div>
}

function Decrease() {

  const setCount = useSetRecoilState(counterAtom);

  function decrease() {
    setCount(c => c - 1);
  }

  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}


function Increase() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount(c => c + 1);
  }

  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}

export default App




// counter.js
import { atom } from "recoil";

export const counterAtom = atom({
    default: 0,
    key: "counter"
})
```
# Memo
```javascript

import { useState, useEffect, memo } from "react";

// Create a App component that renders in the root element
function App() {
    return (
        <div>
            {/* Render the Counter component */}
            <Counter />
        </div>
    );
}

// Counter component that manages the count state
function Counter() {
    const [count, setCount] = useState(0);

    // useEffect to set up an interval that increments the count every 3 seconds
    useEffect(() => {
        // Set up an interval to increment the count
        const interval = setInterval(() => {
            setCount((c) => c + 1); // Increment count by 1
        }, 3000);

        // Cleanup function to clear the interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures this runs only once after the initial render

    return (
        <div>
            {/* Display the current count */}
            <CurrentCount count={count} />

            {/* Render the Increase component and pass setCount as prop */}
            <Increase setCount={setCount} />

            {/* Render the Decrease component and pass setCount as prop */}
            <Decrease setCount={setCount} />
        </div>
    );
}

// Memoized CurrentCount component to prevent unnecessary re-renders
const CurrentCount = memo(function({ count }) {

    // Return the current count value
    return (
        // Display the current count value
        <h1>{count}</h1> 
    );
});

// Memoized Decrease component that renders a button to decrease the count
const Decrease = memo(function({ setCount }) {
    // Function to handle the decrease action
    function decrease() {
        setCount((c) => c - 1); // Decrement count by 1
    }

    // Return the button to trigger the decrease function
    return (
        // Button to trigger the decrease function 
        <button onClick={decrease}>Decrease</button>
    ); 
});

// Memoized Increase component that renders a button to increase the count
const Increase = memo(function({ setCount }) {
    // Function to handle the increase action 
    function increase() {
        // Increment the count by 1
        setCount((c) => c + 1); 
    }

    // Return the button to trigger the increase function
    return (
        // Button to trigger the increase function
        <button onClick={increase}>Increase</button>
    ); 
});

// Export the App component as the default export to make it available in other parts of the application
export default App;
```
# Selectors
```javascript
// Importing counterAtom and evenSelector from the store module
import { counterAtom, evenSelector } from "./store/counter";

// Importing necessary functions from Recoil for state management
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

// Main App component that serves as the entry point for the application
function App() {
    return (
        <div>
            {/* Wrapping the application in RecoilRoot to provide Recoil state management */}
            <RecoilRoot>
                {/* Rendering the Buttons, Counter, and IsEven components */}
                <Buttons /> 
                <Counter /> 
                <IsEven /> 
            </RecoilRoot>
        </div>
    );
}

// Buttons component that provides controls to increase and decrease the count
function Buttons() {
    // useSetRecoilState hook to get the setter function for counterAtom
    const setCount = useSetRecoilState(counterAtom);

    // Function to increase the count by 2
    function increase() {
        setCount((c) => c + 2); // Updating state by adding 2 to the current count
    }

    // Function to decrease the count by 1
    function decrease() {
        setCount((c) => c - 1); // Updating state by subtracting 1 from the current count
    }

    return (
        <div>
            {/* Button to trigger the increase function when clicked */}
            <button onClick={increase}>Increase</button>
           
            {/* Button to trigger the decrease function when clicked */}
            <button onClick={decrease}>Decrease</button>
        </div>
    );
}

// Counter component that displays the current count
function Counter() {
    // useRecoilValue hook to get the current value of counterAtom
    const count = useRecoilValue(counterAtom);

    return (
        <div>
            <h2>Count: {count}</h2> {/* Displaying the current count value */}
        </div>
    );
}

// IsEven component that checks if the count is even and displays the result
function IsEven() {
    // useRecoilValue hook to get the computed value from evenSelector
    const isEven = useRecoilValue(evenSelector);

    return (
        <div>
            {/* Displaying whether the count is even or not */}
            <h3>Is Even: {isEven ? "Yes" : "No"}</h3>
        </div>
    );
}

// Exporting the App component as the default export to make it available in other parts of the application
export default App;

//counter.js
import { atom, selector } from "recoil";

export const counterAtom = atom({
  default: 0,
  key: "counter"
})

export const evenSelector = selector({
  key: "isEvenSelector", //to uniquely idetify it
  get: function ({ get }) {
    const currentCount = get(counterAtom); //selector depends on CounterAtom by using get
    const isEven = (currentCount % 2 == 0);
    return isEven;
  }
})
// selectors mainly eg like toggle button for premium users in admin
```
# Recoil eg linkdn topBar
```javascript
import { jobsAtom, messageAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./store/atom/counter";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { use } from "react";

function App() {
    return <RecoilRoot>
        <MainApp />
    </RecoilRoot>
}

function MainApp() {
    const networkNotificatonCount = useRecoilValue(networkAtom)
    const jobsCount = useRecoilValue(jobsAtom)
    const notificationCount = useRecoilValue(notificationAtom)
    const [messageCount, setMessageCount] = useRecoilState(messageAtom);
    //whenever u want to update value use useRecoilState hook 
    const totalNotificationCount = useRecoilValue(totalNotificationSelector);


    return (
        <>
            <button>Home</button>
            <button>My Network ({networkNotificatonCount >= 100 ? "99+" : networkNotificatonCount})</button>
            <button>Jobs ({jobsCount >= 100 ? "99+" : jobsCount})</button>
            <button>Messaging ({messageCount >= 100 ? "99+" : messageCount})</button>
            <button>Notifications ({notificationAtom >= 100 ? "99+" : notificationCount})</button>


            <button onClick={() => {
                setMessageCount(c => c + 1)
            }}>Me ({totalNotificationCount >= 100 ? "99+" : totalNotificationCount})</button>

        </>
    )
}
export default App

//counter.js
import { atom, selector } from "recoil"

export const networkAtom = atom({
  key: "networkAtom",
  default: 102
})

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0
})
export const messageAtom = atom({
  key: "messageAtom",
  default: 0
})
export const notificationAtom = atom({
  key: "notificationAtom",
  default: 20
})

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom);
    const notificationAtomCount = get(notificationAtom);
    const messageAtomCount = get(messageAtom);
    return networkAtomCount + jobsAtomCount + notificationAtomCount + messageAtomCount

  }
})
```
## Better code to fetch from backedn
```javascript
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './store/atom/counter'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

//   useEffect(() => {
//     // fetch
//     axios.get("https://sum-server.100xdevs.com/notifications")
//       .then(res => {
//         setNetworkCount(res.data)
//       })
//   }, [])

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}
export default App

// atom/counter.js
import { atom, selector } from "recoil";

export const notifications = atom({
    key: "networkAtom",
    default: selector({   // default cant be asynchrounous
      key: "networkAtom",
      get: async()=>{ 
        const res= await axios.get("https://sum-server.100xdevs.com/notifications")
        return res.data
      }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})
```
