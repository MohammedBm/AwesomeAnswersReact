import React from 'react';

function QuestionSummary(props){
  const {title, created_at, author_name} = props;
  return (
    <div className='QuestionSummary'>
      <a href>{title} </a> • {created_at} • {author_name}
    </div>
  )
}

export default QuestionSummary;
