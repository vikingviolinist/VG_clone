import Article from './Article';

const Row = ({ columns }) => (
  <div className="row">
    {columns.map((column) => (
      <Article column={column} key={column.title} />
    ))}
  </div>
);

export default Row;
