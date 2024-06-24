import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionArea = ({ examId, questions, category }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerClick = (key) => {
    setSelectedAnswer(key);
  };

  const handleNextClick = () => {
    if (selectedAnswer !== null) {
      const currentQuestion = questions[currentQuestionIndex];
      const isCorrect = currentQuestion.correctAnswers[selectedAnswer] === true;
      if (isCorrect) {
        setScore(score + 1);
      }
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < questions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
        setSelectedAnswer(null);
      } else {
        setShowResults(true);
      }
    } else {
      alert("Por favor, selecione uma resposta antes de continuar.");
    }
  };

  const handlePreviousClick = () => {
    const previousQuestionIndex = currentQuestionIndex - 1;
    if (previousQuestionIndex >= 0) {
      setCurrentQuestionIndex(previousQuestionIndex);
      setSelectedAnswer(null);
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`/results`, {
        examId: examId,
        score: score,
        totalQuestions: questions.length
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (showResults) {
      handleSubmit();
    }
  }, [showResults]);

  if (showResults) {
    return (
      <div>
        <h1>Resultados</h1>
        <p>Você acertou {score} de {questions.length} questões.</p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className='flex justify-center pt-8 '>
      <div className='flex flex-col justify-center w-[800px]'>
        <div className='rounded-md'>
          <p className='bg-[#9799C4] flex justify-start p-2'>Conteúdo: {category}</p>
          <div className='bg-[#D9D9D9] flex justify-center'>
            <div className='p-3'>
              <p>{currentQuestion.question}</p>
              <ul>
                {console.log(currentQuestion)}
                {currentQuestion.answers && 
                  Object.entries(currentQuestion.answers).map(([key, answer]) => (
                    answer && (
                      <li 
                        key={key}
                        className={`hover:bg-[#ffcb77] focus:bg-[#FF9D62] rounded-md p-2 ${selectedAnswer === key ? 'bg-[#FF9D62]' : ''}`}
                      >
                        <button
                          onClick={() => handleAnswerClick(key)}
                        >
                          {answer}
                        </button>
                      </li>
                    )
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        <div className='flex justify-between my-4'>
          <button 
            onClick={handlePreviousClick} 
            disabled={currentQuestionIndex === 0}
            className='py-1 px-10 border-2 border-purple bg-purple rounded-lg transition delay-200 hover:bg-darkPurple hover:border-darkPurple text-white disabled:bg-gray-300'
          >
            Voltar
          </button>
          <button 
            onClick={handleNextClick} 
            className='py-1 px-10 border-2 border-purple bg-purple rounded-lg transition delay-200 hover:bg-darkPurple hover:border-darkPurple text-white'
          >
            Próxima
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionArea;
