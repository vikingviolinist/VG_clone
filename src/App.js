import { useEffect, useReducer } from 'react';

import logo from './assets/logo.png';

import Loader from './components/Loader';
import Row from './components/Row';

const initialState = {
  loading: true,
  result: null,
  error: null,
};

const reducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'LOADING':
      return initialState;
    case 'RESPONSE_COMPLETE':
      return {
        loading: false,
        result: action.payload.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        result: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

const useArticles = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'LOADING' });

    fetch('https://storage.googleapis.com/aller-structure-task/test_data.json')
      .then((res) => res.json())
      .then(([data]) => dispatch({ type: 'RESPONSE_COMPLETE', payload: { data } }))
      .catch((error) => dispatch({ type: 'ERROR', payload: { error } }));
  }, []);

  console.log(state);
  return [state.result, state.loading, state.error];
};
const App = () => {
  const [rows, loading, error] = useArticles();

  if (error) return <h1>There was an error fetching articles</h1>;

  if (loading) return <Loader />;

  return (
    <>
      <img src={logo} className="logo" alt="Dagbladet logo" />
      <main className="articles">
        {rows?.map(({ columns }, index) => (
          // Not a good idea to use index as a key, but since there's no unique ID for each row, let's do it anyway
          <Row columns={columns} key={index} />
        ))}
      </main>
    </>
  );
};

export default App;
