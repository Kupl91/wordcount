import React, { useState, useMemo } from 'react';
    import './App.scss';
    import BottomResultBox from './components/BottomResultBox';
    import Footer from './components/Footer';
    import Navbar from './components/Navbar';
    import ResultBox from './components/ResultBox';
    import TextArea from './components/TextArea';
    import { ResultData, BottomResultData } from './types';

    const App: React.FC = () => {
      const [text, setText] = useState<string>('');

      // Функция подсчёта слов
      const countWords = (text: string): number => {
        return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
      };

      // Функция подсчёта символов
      const countCharacters = (text: string): number => {
        return text.length;
      };

      // Функция подсчёта предложений
      const countSentences = (text: string): number => {
        const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
        return sentences.length;
      };

      // Функция подсчёта абзацев
      const countParagraphs = (text: string): number => {
        const paragraphs = text.split(/\n+/).filter(paragraph => paragraph.trim().length > 0);
        return paragraphs.length;
      };

      // Функция подсчёта местоимений
      const countPronouns = (text: string): number => {
        const pronouns = ['he', 'she', 'it', 'they', 'we', 'you', 'i', 'me', 'him', 'her', 'us', 'them'];
        const words = text.toLowerCase().split(/\s+/);
        return words.filter(word => pronouns.includes(word)).length;
      };

      // Функция нахождения самого длинного слова
      const findLongestWord = (text: string): string => {
        const words = text.split(/\s+/).filter(word => word.length > 0);
        if (words.length === 0) return '-';
        return words.reduce((a, b) => (a.length > b.length ? a : b));
      };

      // Расчёт среднего времени чтения
      const calculateReadingTime = (wordCount: number): string => {
        const wordsPerMinute = 200;
        const time = wordCount / wordsPerMinute;
        return `${Math.ceil(time)} minute(s)`;
      };

      // Используем useMemo для оптимизации расчётов
      const resultData: ResultData = useMemo(() => ({
        words: countWords(text),
        characters: countCharacters(text),
        sentences: countSentences(text),
        paragraphs: countParagraphs(text),
        pronouns: countPronouns(text),
      }), [text]);

      const bottomResultData: BottomResultData = useMemo(() => ({
        readingTime: calculateReadingTime(resultData.words),
        longestWord: findLongestWord(text),
      }), [resultData.words, text]);

      return (
        <>
          <Navbar />
          <div className="small-container">
            <div className="main-app">
              <ResultBox resultData={resultData} />
              <TextArea text={text} setText={setText} />
              <BottomResultBox bottomResultData={bottomResultData} />
            </div>
          </div>
          <Footer />
        </>
      );
    };

    export default App;