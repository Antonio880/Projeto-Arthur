import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUserContext } from '../../Context/ContextUser';

const QuestionArea = ({ examId, questions, category }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [examTaken, setExamTaken] = useState(false);
  const [previousScore, setPreviousScore] = useState(null);
  const { user } = useUserContext();
  const BASE_URL = "http://localhost:3000";

  const handleAnswerClick = (key) => {
    setSelectedAnswer(key);
  };

  useEffect(() => {
    const checkUserExam = async () => {
      try {
        await axios.get(`${BASE_URL}/exams/${examId}/check_user/${user.id}`).then((res) => {
          setExamTaken(res.data.taken);
          setPreviousScore(res.data.score);
        });
        
      } catch (err) {
        console.error(err);
      }
    };

    checkUserExam();
  }, [examId, user.id]);

  const handleNextClick = () => {
    if (selectedAnswer !== null) {
      const currentQuestion = questions[currentQuestionIndex];
      const isCorrect = currentQuestion.correct_answer === selectedAnswer;
      if (isCorrect) {
        setScore(score + 1);
      }
      
      const nextQuestionIndex = currentQuestionIndex + 1;

      setAnswers([...answers, {
        question_id: currentQuestion.id,
        selected_answer: selectedAnswer
      }]);

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
    console.log(answers);
    
    try {
      const response = await axios.post(`${BASE_URL}/exam_results/submit`, {
        user_id: user.id,
        exam_id: examId,
        score,
        total_questions: questions.length
      });
      console.log(response.data);
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
      <div className="flex justify-center pt-8">
        <div className="w-[800px] p-6 bg-white rounded-md shadow-lg">
          <h1 className="text-3xl font-bold text-purple">Resultados</h1>
          <p className="text-xl mt-4">Você acertou <span className="font-bold">{score}</span> de <span className="font-bold">{questions.length}</span> questões.</p>
          <p className="mt-4">Obrigado por fazer o exame!</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className='flex justify-center pt-8 '>
      <div className='flex flex-col justify-center w-[800px]'>
        {
          examTaken ? (
            <div className="flex justify-center pt-8">
        <div className="w-[800px] p-6 bg-white rounded-md shadow-lg">
          <h1 className="text-3xl font-bold text-purple">Resultados</h1>
          <p className="text-xl mt-4">Você já fez esta prova.</p>
          <p className="text-xl mt-4">Sua pontuação foi: <span className="font-bold">{previousScore}</span> de <span className="font-bold">{questions.length}</span> questões.</p>
        </div>
      </div>
          ):(
            <div>
              <div className='rounded-md'>
          <p className='bg-[#9799C4] flex justify-start p-2'>Conteúdo: {category}</p>
          <div className='bg-[#D9D9D9] flex justify-center'>
            <div className='p-3'>
              <p>{currentQuestionIndex + 1} {currentQuestion.question}</p>
              <ul>
                {currentQuestion.answers && 
                  Object.entries(currentQuestion.answers).map(([key, answer]) => (
                    answer && (
                      <li 
                        key={key}
                        onClick={() => handleAnswerClick(key)}
                        className={`hover:bg-[#ffcb77] cursor-pointer focus:bg-[#FF9D62] rounded-md p-2 ${selectedAnswer === key ? 'bg-[#FF9D62]' : ''}`}
                      >
                        <button
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
            onClick={currentQuestionIndex + 1 === questions.length ? () => setShowResults(true) : handleNextClick}
            className='py-1 px-10 border-2 border-purple bg-purple rounded-lg transition delay-200 hover:bg-darkPurple hover:border-darkPurple text-white'
          >
            {currentQuestionIndex + 1 === questions.length ? 'Submit' : 'Próxima'}
          </button>
        </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default QuestionArea;
