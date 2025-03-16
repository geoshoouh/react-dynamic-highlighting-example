import { useState, useEffect } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {

  const [componentKeys, setComponentKeys] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.key === 'q') {
        if (componentKeys.length > 0) {
          setHighlightedIndex((prev) => (prev === componentKeys.length - 1 ? null : componentKeys.length - 1));
        }
      }
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [componentKeys]);

  return (
    <>
      <button
        onClick={
          () => {
            setComponentKeys(Array.from({ length: componentKeys.length + 1 }, (_, i) => i + 1));
          }
        }
      >
        UP
      </button>
      <button
        onClick={
          () => {
            if (componentKeys.length > 0) {
              setComponentKeys(Array.from({ length: componentKeys.length - 1 }, (_, i) => i + 1));
            }
          }
        }
      >
        DOWN
      </button>

      <div>
        {
          componentKeys.map((_, index) => (
            <MyComponent 
              key={ index } 
              componentId={ index + 1 } 
              isHighlighted={highlightedIndex === index}
            />
          ))
        }
      </div>
    </>
  )
}

export default App
