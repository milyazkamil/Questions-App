import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import Answer from "./Answer";

const SingleQuestion = ({ item, activeId, toggleQuestion }) => {
  const { id, question, answer } = item;
  //isActive will be true if the id of the question is equal to the id of the clicked question.
  const isActive = id === activeId;
  return (
    <article className="question-container">
      <div>
        <p className="question">{question}</p>
        <span onClick={() => toggleQuestion(id)} className="show-hide">
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </span>
      </div>
      {isActive && <Answer answer={answer} />}
    </article>
  )
}
export default SingleQuestion;