import { useState } from 'react';

import Title from './Title';

const Article = ({ column }) => {
  const { imageUrl, url, title, width } = column;
  const [isEditable, setIsEditable] = useState(false);

  const toggleEditing = () => setIsEditable(!isEditable);

  const togglePropagation = (e) => {
    if (isEditable) e.preventDefault();
  };

  return (
    <div className="article-container" style={{ flex: width }}>
      <a className="article-link" href={url} target="_blank" rel="noreferrer" onClick={togglePropagation}>
        <img className="article-img" src={imageUrl} alt={title} />
        <Title title={title} isEditable={isEditable} />
      </a>
      <button className="article-btn" onClick={toggleEditing}>
        {`${isEditable ? 'Save' : 'Change'} title`}
      </button>
    </div>
  );
};

export default Article;
