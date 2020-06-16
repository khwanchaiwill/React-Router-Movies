import React from 'react';
import {useRouteMatch, NavLink, Link, Route} from 'react-router-dom'



const SavedList = props => {
const {url} = useRouteMatch()

return(
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (   
      
      <NavLink to={`/movies/${movie.id}`}>      
      <span className="saved-movie">{movie.title}</span>
      </NavLink>

  
    ))}
    
    <div className="home-button">
      <Link to="/">Home</Link>    
    </div>  
  </div>
);
    }
export default SavedList;
