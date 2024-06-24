import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getQuizzes } from "../api/quizzApi.js";
import "../styles/QuizzList.css";
import QuizzModal from "./QuizzModal.jsx";

function QuizzList({ category }) {
  const [quizzList, setQuizzList] = useState([]);
  const [selectedQuizz, setSelectedQuizz] = useState(null);
  const [showQuizzModal, setShowQuizzModal] = useState(false);

  useEffect(() => {
    const fetchQuizz = async () => {
      try {
        const result = await getQuizzes(category);
        if (result) {
          setQuizzList(result);
        }
      } catch (error) {
        console.error("Error al obtener quizzes", error);
      }
    };
    fetchQuizz();
  }, [category]);

  const handleQuizzClick = (quizz) => {
    setSelectedQuizz(quizz);
    setShowQuizzModal(true);
  };

  const handleCloseModal = () => {
    setShowQuizzModal(false);
    setSelectedQuizz(null);
  };

  return (
    <div className="container-QuizzList">
      <div className="QuizzList-header">
        <div className="QuizzList-header-title">
          <img src="/Images/starboy.png" alt="" />
          <span>{category}</span>
        </div>
        <button>Ver más</button>
      </div>
      <ul className="QuizzList">
        {quizzList.map((quizz) => (
          <div className="card-QuizzList" key={quizz.id} onClick={() => handleQuizzClick(quizz)}>
            <img
              src="/Images/d760ff58-8d95-4458-952e-e321845f0679_200_200.png"
              alt={quizz.titulo}
              className="card-img-QuizzList"
            />
            <div className="card-quizz-info">
              <span>4 Qs</span>
              <span>65K jugadas</span>
            </div>
            <p className="card-title-QuizzList">{quizz.titulo}</p>
          </div>
        ))}
      </ul>
      <QuizzModal show={showQuizzModal} onClose={handleCloseModal} quizz={selectedQuizz} />
    </div>
  );
}

QuizzList.propTypes = {
  category: PropTypes.string.isRequired,
};

export default QuizzList;
