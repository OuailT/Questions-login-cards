import React, {useState} from 'react'
import Data from './Components/Data'
import './App.css';
import SingleInfo from './Components/SingleInfo';


function App() {
  const [questions, setQuestions] = useState(Data);
  return (
    <main>
    <div className="container">
    <h3>Questions and answer about Login</h3>
    <section className="info">
    {questions.map((question)=> {
      return (
      <SingleInfo key={question.id} {...question}/>
      )
    })}
    </section>
    </div>
  </main>
  );
}

export default App;
