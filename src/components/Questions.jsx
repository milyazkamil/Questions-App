import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <>
      {
        questions.map((item) => (
          <SingleQuestion activeId={activeId} toggleQuestion={toggleQuestion} key={item.id} item={item} />
        ))
      }
    </>
  )
}
export default Questions;