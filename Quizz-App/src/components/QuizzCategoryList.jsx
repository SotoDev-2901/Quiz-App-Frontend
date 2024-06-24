import QuizzList from './QuizzList';

const categories = ['Español', 'Matematicas'];

const QuizzCategoryList = () => {
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <QuizzList category={category} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizzCategoryList;