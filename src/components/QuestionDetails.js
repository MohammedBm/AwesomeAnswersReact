import React from 'react';

function QuestionDetails (props) {
  const { id, title, body, answers = [], author = {} } = props;

  return (
    <div className='QuestionDetails'>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>By <em>{author.first_name} {author.last_name}</em></p>
      <h3>Answers</h3>
      <ul className='AnswerList'>
        {
          answers.map(
            answer => (
              <li key={answer.id}>
                {answer.body}
                <hr/>
              </li>
            )
          )
        }
      </ul>
    </div>
  )
}

export default QuestionDetails;
