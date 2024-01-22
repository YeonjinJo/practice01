import { useState } from "react";
import "./App.css";

function App() {
  const arr = ["apple", "banana", "cherry", "berry", "watermelon", "grape"];

  const [array, setArray] = useState(arr);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");

  const handleForEach = () => {
    let temp = "";

    array.forEach(function (fruit) {
      temp += `${fruit}, `;
    });

    temp = temp.slice(0, -2);
    setResult(temp);
  };

  const handleFilter = () => {
    const filteredList = array.filter(function (fruit) {
      if (fruit.includes(query)) {
        return true;
      } else {
        return false;
      }
    });
    setResult(filteredList.join(", "));
  };

  const handleMap = () => {
    const mappedList = array.map(function (fruit, index) {
      return fruit.toUpperCase();
    });
    setResult(mappedList.join(", "));
  };

  const handleReduce = () => {
    const reducedList = array.reduce(function (acc, cur) {
      return `${acc}, ${cur}`;
    });
    setResult(reducedList);
  };

  const handlePush = () => {
    if (!query) {
      alert("Empty");
      return false;
    }
    const newList = [...array];
    newList.push(query);

    setArray(newList);
    setResult(newList.join(", "));
  };

  const handlePop = () => {
    const newList = [...array];
    newList.pop();

    setArray(newList);
    setResult(newList.join(", "));
  };

  const handleSlice = () => {
    const slicedList = array.slice(0, array.length - 2);
    setResult(slicedList.join(", "));
  }

  const handleSplice = () => {
    const newList = [...array];
    newList.splice(1, 2, "kiwi", "lime");
    setResult(newList.join(", "));
  }

  const handleIndexOf = () => {
    setResult(array.indexOf(query));
  }

  const handleIncludes = () => {
    const boolean = array.includes(query);
    setResult(boolean.toString().toUpperCase());
  }

  const handleFind = () => {
    const found = array.find(fruit => fruit === query)
    setResult(!found ? "Not found" : found);
  }

  const handleSome = () => {
    const boolean = array.some(fruit => fruit === query)
    setResult(boolean.toString().toUpperCase());
  }

  const handleEvery = () => {
    const boolean = array.every(fruit => fruit.length > query)
    setResult(boolean.toString().toUpperCase());
  }

  const handleSort = () => {
    const newList = [...array];
    newList.sort(function (a, b) {
      if (a < b) {return 1;}
      if (a > b) {return -1;}
      else {return 0}
    })
    setResult(newList.join(", "));
  }

  return (
    <div id="samples">
      <h1>Yeonjin's Array API Practice</h1>
      <div>
        <input
          value={query}
          onChange={function (e) {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>

      </div>
      <div>
        <strong>Array : </strong>
        {array.join(", ")}
      </div>
      <div>
        <strong>Result : </strong>
        {result}
      </div>
    </div>
  );
}

export default App;
