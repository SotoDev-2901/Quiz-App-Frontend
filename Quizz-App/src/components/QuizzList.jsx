import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getQuizzes } from '../api/quizzApi.js';

function QuizzList({ category }) {
  const [quizzList, setQuizzList] = useState([]);

  useEffect(() => {
    const fetchQuizz = async () => {
      try {
        const result = await getQuizzes(category);
        if (result) {
          setQuizzList(result);
        }
      } catch (error) {
        console.error('Error al obtener quizzes', error);
      }
    };
    fetchQuizz();
  }, [category]);

    return (
        <div>
            <h2>{category}</h2>
            <ul>
              {quizzList.map((quizz) => (
                <li key={quizz.id}>
                  <p>{quizz.titulo}</p>
                </li>
              ))}
            </ul>
        </div>
    );
}

QuizzList.propTypes = {
  category: PropTypes.string.isRequired,
};

export default QuizzList;