import { useState } from "react";
import { questionsData } from "../data";
import Questions from "./Questions";

function App() {
  const [questions, setQuestions] = useState(questionsData);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = activeId === id ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <>
      <main id="main">
        <h1 id="title">Questions</h1>
        <Questions activeId={activeId} toggleQuestion={toggleQuestion} questions={questions} />
      </main>
    </>
  )
}
export default App;