// In React, Hooks are methods or functions that are provided by ReactJS library. 
// They are called "hooks" because they let you hook into React's state and lifecycle features from functional components.


// There are several type of hooks. But mainly, we will use those hooks

// useState: This hook lets you add state to functional components.
//EX
const [count, setCount] = useState(0);
// we can you this in a countdown clock.


// useEffect: This hook lets you perform side effects in functional components.
//EX
useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
// Base on the dependency we pass in, every time the count change, the title of our website will also be altered.  



// useContext: This hook lets you use the context value.
// EX:
const theme = useContext(ThemeContext);


// useMemo: This hook returns a memoized value.
//EX
const expensiveCalculation = useMemo(() => {
    return computeExpensiveValue(a, b);
  }, [a, b]);


// useRef: This hook returns a mutable ref object.
// EX: 
const inputRef = useRef(null);



//useCallback: This hook returns a memoized callback function.
//EX
const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  