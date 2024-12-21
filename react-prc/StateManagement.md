# React - State Management

## What is State?
State represents data that changes over time in a component.

## Key Concepts
- `useState` Hook
- Lifting State Up
- Controlled Components

## Example
```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default Counter;
