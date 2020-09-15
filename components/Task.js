import { useState } from 'react'

import styled from 'styled-components'

const Task = ({ task, setTasks }) => {

  const [hours, setHours] = useState(task.hours)
  const [status, setStatus] = useState(task.status)

  return (
    <StyledTask>
      <div className="handle"></div>
      <div className="options">
        <button>
          {status === "incomplete" ? "O" : "X"}
        </button>
      </div>
      <h3>{task.task}</h3>
      <div className="hours">
        <span>{hours}</span>
        <button onClick={() => setHours(prevState => prevState + 0.25)}>+</button>
        <button onClick={() => setHours(prevState => prevState - 0.25 > 0 ? prevState - 0.25 : 0)}>-</button>
      </div>
    </StyledTask>
  )
}

export default Task

const StyledTask = styled.article`
  border: 1px solid #ebebeb;
  border-radius: 15px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: box-shadow .3s ease-in-out;
  display: flex;
  align-items: center;
  position: relative;

  h3 {
    font-size: 1em;
    font-weight: 400;
    width: 100%;
    padding: 10px 0;
    margin: 0;
  }

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  & + article {
    margin-top: 10px;
  }

  .handle {
    height: 60px;
    width: 20px;
    background-color: red;
  }

  .hours {
    display: flex;
    flex-direction: column;
    width: 60px;
    padding: 10px 15px;

    span {
      text-align: center;
      font-size: 1.5em;
      font-weight: 700;
    }
  }

  .options {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
  }
`