import React, {useState, useMemo} from 'react';

const UseMemo = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const calculation = useMemo(() => {expensiveCalculation(count)}, [count]);

  const addTodo = () =>{
    setTodos((t) => [...t, "New Todo"]);
  };
  const increaseCount =() => {
    setCount(count+1);
  };
  return (
    <div id='usememo'>
      <div>
      {
        todos.map((todo, index) => {
          return (
            <h1 key={index}>{todo} {index+1}</h1>
          )
        })
      }
      <button onClick={() => addTodo()}>Add Todo</button>
      </div>
      <hr></hr>
      <div>
        <h3>{count}</h3>
        <button onClick={() => increaseCount()}>Inc</button>
        <h3>Expensive Calculation</h3>
        <p>{calculation}</p>
      </div>
    </div>
  )
};

const expensiveCalculation = (num)=>{
  console.log("Calculating...");
  for(let i = 0 ; i <= 1000000; i++){
    num += 1;
  }
  return num;
};

export default UseMemo