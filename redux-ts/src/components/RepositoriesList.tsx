import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { StoreState } from '../state/reducers';

const RepositoriesList = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { loading, error, data } = useSelector(
    ({ repos }: StoreState) => repos
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories(term);
  };

  const dataList = data.map((repo: string) => {
    return <li key={repo}>{repo}</li>;
  });
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading</h3>}
      {!error && !loading && <h3>{dataList}</h3>}
    </div>
  );
};

export default RepositoriesList;
