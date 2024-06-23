import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import QuestionArea from '../QuestionArea';

const TakeExam = () => {
    let location = useLocation();
    const { state } = location;
  const { examId } = state || {}; // Adicione um fallback aqui
  const [exam, setExam] = useState(null);

  useEffect(() => {
    const fetchExam = async () => {
      try {
        const response = await axios.get(`/exams/${examId}/generate-questions`);
        setExam(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchExam();
  }, [examId]);

  return (
    <div>
      {exam ? (
        <QuestionArea questions={exam.questions} />
      ) : (
        <p>Carregando prova...</p>
      )}
    </div>
  );
};

export default TakeExam;
