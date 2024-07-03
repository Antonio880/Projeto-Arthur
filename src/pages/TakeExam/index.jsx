import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import QuestionArea from '../QuestionArea';

const TakeExam = () => {
  let location = useLocation();
  const { state } = location;
  const { id, category } = state; // Adicione um fallback aqui
  const [prova, setProva] = useState(null);
  const BASE_URL = "http://localhost:3000"; 

  useEffect(() => {
    console.log(id, category)
    const fetchExam = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/exams/${id}/generate-questions`);
        setProva(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchExam();
  }, [id]);

  return (
    <div>
      {prova ? (
        <QuestionArea questions={prova} examId={id} category={category} />
      ) : (
        <p>Carregando prova...</p>
      )}
    </div>
  );
};

export default TakeExam;
