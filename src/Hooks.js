import React from 'react';
import{usestate}from 'react';
import App from './App';

jsx
import { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}


// - Explanation: The useState hook is used to add state to functional components. It returns a state variable and an update function.

// 2. useEffect Hook



import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}


// - Explanation: The useEffect hook is used to handle side effects in functional components. It takes a function and an array of dependencies.

// 3. useContext Hook



import { createContext, useContext } from 'react';

const ThemeContext = createContext();

function Example() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <h1>Example</h1>
    </div>
  );
}


// - Explanation: The useContext hook is used to access context (shared state) in functional components.

// 4. useReducer Hook



import { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Example() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}


// - Explanation: The useReducer hook is used to manage state with a reducer function.

// 5. useCallback Hook



import { useState, useCallback } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  const memoizedCallback = useCallback(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={memoizedCallback}>Log count</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}


// - Explanation: The useCallback hook is used to memoize functions to prevent unnecessary re-renders.

// 6. useMemo Hook



import { useState, useMemo } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  const memoizedValue = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double count: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}


// - Explanation: The useMemo hook is used to memoize values to prevent unnecessary re-computations.

// 7. useRef Hook



import { useRef } from 'react';

function Example() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus input</button>
    </div>
  );
}


// - Explanation: The useRef hook is used to create mutable references that persist between re-renders.

// 8. useLayoutEffect Hook


