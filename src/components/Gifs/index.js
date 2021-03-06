import React from "react";
import './styles.css';
import { Link } from 'wouter';

function Gifs({ id, title, url }) {
    return (
      <div className="Gif">
        <Link to={`/gif/${id}`} className="Gif-link" >
          <h4>{title}</h4>
          <img loading="lazy" src={url} alt={title}/>
        </Link>
      </div>
    )}

export default React.memo(Gifs, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})
