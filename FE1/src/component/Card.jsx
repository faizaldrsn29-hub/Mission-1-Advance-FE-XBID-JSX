import '../App.css'
import { useState } from 'react'

function Card({ title, description, imageUrl }) {

  const [isExpanded, setIsExpanded] = useState(false);
  const characterLimit = 100;
  const isLongText = description.length > characterLimit;
   const displayText = isExpanded || !isLongText
    ? description
    : `${description.substring(0, characterLimit)}...`;


  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{displayText} <button  onClick={() => setIsExpanded(!isExpanded)}
            style={{ color: 'blue', background: 'none', border: 'none', cursor: 'pointer', marginLeft: '5px', padding: 0 }}
          >
            {isExpanded ? 'See Less' : 'See All'} </button></p>
      </div>
    </div>
  );
}

export default Card;