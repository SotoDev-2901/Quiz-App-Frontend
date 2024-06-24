import '../styles/JoinCodeQuizz.css';

function JoinCodeQuizz() {
  return (
    <div className="container-code-quizz">
      <form action="" className="form-code-quizz">
        <input className='input-code-quizz' type="number" placeholder="Introducir un código de participación"/>
        <button className='button-code-quizz' type="submit">Unir</button>
      </form>
    </div>
  );
}

export default JoinCodeQuizz;