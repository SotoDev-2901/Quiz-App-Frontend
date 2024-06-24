import PropTypes from "prop-types";
import '../styles/QuizzModal.css';

function QuizzModal({ show, onClose, quizz }) {

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{quizz.titulo}</h2>
        <p>{quizz.descripcion}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

QuizzModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  quizz: PropTypes.object,
};

export default QuizzModal;