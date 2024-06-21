import QuizzList from './QuizzList';

const categories = ['Español', 'Matematicas'];

const QuizzCategoryList = () => {
  return (
    <div>
      <h2>Categories</h2>
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