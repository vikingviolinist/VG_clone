import { useEffect, useRef } from 'react';

const Title = ({ isEditable, title }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isEditable) ref.current.focus();
  }, [isEditable]);

  return (
    <div
      ref={ref}
      className={`article-title ${isEditable ? 'article-title-editable' : ''}`}
      contentEditable={isEditable}
      suppressContentEditableWarning={true}
    >
      {title}
    </div>
  );
};

export default Title;
