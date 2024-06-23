import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionArea = ({ materia }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`http://localhost:8090/exams/2/generate-questions`);
        setQuestions(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerClick = (key) => {
    setSelectedAnswer(key);
  };

  const handleNextClick = () => {
    if (selectedAnswer) {
      const isCorrect = questions[currentQuestionIndex].correct_answers[selectedAnswer + '_correct'] === 'true';
      if (isCorrect) {
        setScore(score + 1);
      }
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < questions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
        setSelectedAnswer(null); // Reseta a seleção da resposta para a próxima questão
      } else {
        setShowResults(true);
      }
    }
  };

  const handlePreviousClick = () => {
    const previousQuestionIndex = currentQuestionIndex - 1;
    if (previousQuestionIndex >= 0) {
      setCurrentQuestionIndex(previousQuestionIndex);
      setSelectedAnswer(null); // Reseta a seleção da resposta para a questão anterior
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

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
      <div className='flex flex-col  justify-center w-[800px]'>
        <div className='rounded-md'>
            <p className='bg-[#9799C4]  flex justify-start p-2'>Conteúdo: --</p>
            <div className='bg-[#D9D9D9] flex  justify-center'>
                <div className='p-3'>
                    <p>{currentQuestion.question}</p>
                    <ul>
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
