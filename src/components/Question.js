import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10000/1000);

  // add useEffect code
  useEffect(() => {
    const countDown = setTimeout(()=> {
      setTimeRemaining((timeRemaining) => timeRemaining - 1000/1000)
      if(timeRemaining === 0) {
        setTimeRemaining(10000/1000)
        onAnswered(false)
      }
  },1000);
  return function () {
    clearTimeout(countDown);
  }
}, [timeRemaining, onAnswered]);



  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
