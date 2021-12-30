import react from "react";
import React, { useState } from "react";
import TodoItem from "./TodoItem";


function TodoList() {
  const [learnList, setLearnList] = useState(['learn react', 'learn english', 'learn vue']);
  const [inputValue, setInputValue] = useState('');
  const handleBtnClick = () => {
    if (inputValue === '') {
      return;
    }
    setLearnList([...learnList, inputValue]);
    setInputValue('');
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

  }


  const handleDelete = (index) => {
    const list = [...learnList];
    list.splice(index, 1);
    setLearnList(list);
  }
  return (
    <>
      <div>
        <input value={inputValue} onChange={handleInputChange} />
        <button className='red-btn' onClick={handleBtnClick}>add</button>
      </div>
      <ul>
        {
          learnList.map((item, index) => {
            return (
              <TodoItem
                ddelete={handleDelete}
                key={index}
                content={item}
                index={index}
              />
            )
          })
        }
      </ul>
    </>
  );
}

export default TodoList;
