import { useState } from 'react'

import styled from 'styled-components'

const Task = ({ task, setTasks }) => {

  const [hours, setHours] = useState(task.hours)
  const [isComplete, setIsComplete] = useState(task.isComplete)

  function updateHours(amount) {
    if (isComplete) return
    setHours(prevState => {
      return prevState + amount > 0 ? prevState + amount : 0
    })
  }

  return (
    <StyledTask className={isComplete ? 'complete' : 'incomplete'}>
      <div className="options">
        <button
          onClick={() => setIsComplete(!isComplete)}
        />
      </div>
      <h3>{task.task}</h3>
      <div className="hours">
        <span className="hours__label">HOURS</span>
        <span className="hours__value">{hours}</span>
        <div>
          <button onClick={() => updateHours(-0.25)}>-</button>
          <button onClick={() => updateHours(0.25)}>+</button>
        </div>
      </div>
    </StyledTask>
  )
}

export default Task

const StyledTask = styled.article`
  border: 1px solid #dbe6ff;
  border-radius: 15px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: box-shadow .3s ease-in-out;
  display: flex;
  align-items: center;
  position: relative;
  background: #f2faff;
  background: linear-gradient(to right, #005596 0, #005596 10px, #f2faff 10px, #f2faff 100%);
  padding: 10px;
  transition: opacity 0.3s ease;

  h3 {
    font-size: 1em;
    font-weight: 500;
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

  .hours {
    display: flex;
    flex-direction: column;
    width: 140px;
    padding: 10px 15px;
    color: #005596;
    text-align: center;
    font-weight: 700;

    &__label {
      font-size: 0.7em;
    }

    &__value {
      font-size: 1.7em;
      margin-bottom: 5px;
    }

    button {
      background-color: #005596;
      border: none;
      color: #f2faff;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      outline: none;

      & + button {
        margin-left: 5px;
      }
    }

  }

  .options {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;

    button {
      background: transparent;
      border: 1px solid #005596;
      border-radius: 50%;
      height: 30px;
      width: 30px;
      position: relative;
      outline: none;
    }

    button::after {
      content: '✔';
      position: absolute;
      font-size: 1.6em;
      left: 2px;
      top: -2px;
      opacity: 0;
      font-weight: bold;
      color: #005596;
      transition: opacity .3s ease;
    }
  }

  &.complete {
    opacity: 0.4;

    h3 {
      text-decoration: line-through;
    }

    .options {
      button::after {
        opacity: 1;
      }
    }
  }
`