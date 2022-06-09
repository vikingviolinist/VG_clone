import { useState } from 'react';

import Title from './Title';

const Article = ({ column }) => {
  const { imageUrl, url, title, width: flex } = column;
  const [isEditable, setIsEditable] = useState(false);

  const toggleEditing = () => setIsEditable(!isEditable);

  const checkEditing = (e) => isEditable && e.preventDefault();

  return (
    <div className="article-container" style={{ flex }}>
      <a className="article-link" href={url} target="_blank" rel="noreferrer" onClick={checkEditing}>
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
