 // src/components/BottomResultBox/index.tsx
 import React from 'react';
 import './index.scss';
 import { BottomResultData } from '../../types';

 interface BottomResultBoxProps {
   bottomResultData: BottomResultData;
 }

 const BottomResultBox: React.FC<BottomResultBoxProps> = ({ bottomResultData }) => {
   const bottomResultBar = [
     {
       title: 'Average Reading Time:',
       value: bottomResultData.readingTime,
     },
     {
       title: 'Longest word:',
       value: bottomResultData.longestWord,
     },
   ];

   return (
     <div className="bottom-result-bar">
       {bottomResultBar.map(({ title, value }) => (
         <div className="result-box" key={title}>
           <span className="box-title">{title}</span>
           <span className="box-value">{value}</span>
         </div>
       ))}
     </div>
   );
 };

 export default BottomResultBox;