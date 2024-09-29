 // src/components/ResultBox/index.tsx
 import React from 'react';
 import './index.scss';
 import { ResultData } from '../../types';

 interface ResultBoxProps {
   resultData: ResultData;
 }

 const ResultBox: React.FC<ResultBoxProps> = ({ resultData }) => {
   const resultBar = [
     {
       title: 'Words',
       value: resultData.words,
     },
     {
       title: 'Characters',
       value: resultData.characters,
     },
     {
       title: 'Sentences',
       value: resultData.sentences,
     },
     {
       title: 'Paragraphs',
       value: resultData.paragraphs,
     },
     {
       title: 'Pronouns',
       value: resultData.pronouns,
     },
   ];

   return (
     <div className="result-bar">
       {resultBar.map(({ title, value }) => (
         <div className="result-box" key={title}>
           <span className="box-title">{title}</span>
           <span className="box-value">{value}</span>
         </div>
       ))}
     </div>
   );
 };

 export default ResultBox;