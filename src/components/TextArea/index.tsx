import React from 'react';
import './index.scss';

interface TextAreaProps {
  text: string;
  setText: (text: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ text, setText }) => {
  return (
    <textarea
      className="text-area"
      placeholder="Paste your text here..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default TextArea;