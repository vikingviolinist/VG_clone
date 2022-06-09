import { useEffect, useState } from 'react';

import logo from './assets/logo.png';

import Loader from './components/Loader';
import Row from './components/Row';

const App = () => {
  const [rows, setRows] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch('https://storage.googleapis.com/aller-structure-task/test_data.json')
      .then((res) => res.json())
      .then(([data]) => setRows(data))
      .catch((error) => setError(error))
      .finally(setLoading(false));
  }, []);

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
