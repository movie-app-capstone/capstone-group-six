// eslint-disable
import { Link} from 'react-router-dom';
import Wrapper from "../assets/wrappers/RegisterAndLoginPage.js";
import {FormRow, Logo} from "../components/index.js";
import { useState } from 'react';

function App(){
  const genres = [
    "Action",
    "Adventure",
    "Anime",
    "comedy",
    "Comic Book",
    "Crime",
    "Disaster",
    "Drama",
    "Dramedy",
    "Fantasy",
    "Horror",
    "Musical",
    "Mystery",
    "RomCom",
    "Romance",
    "Sci-Fi",
    "Sports",
    "Thriller",
    "Western"
  ];

  const stream = [
    "Disney+",
    "Prime",
    "Max",
    "Netflix",
    "Hulu",
    "Paramount+",
    "Peacock",
    "Apple",
    "ESPN+",
    "Fubo",
    "Crunchyroll",
    "PlutoTV",
    "AMC+",
    "Starz",
  ]
  const initialFromState = genres.reduce((acc, curr) => {
    acc[curr] = false }, {}), streams.reduce((acc, curr) => {
      acc[curr] = false;
    return acc;
  }, {});
  const [checkedGenres, setCheckedGenres] = useState(initialFromState);
  
  return(
    <>
      {genres.map((genre) =>(
        <label>
          {genre}
          <input type="checkbox" onChange={(e) => setCheckedGenres({...checkedGenres, [genre]: e.target.checked})} value={checkedGenres[genres]}/>
        </label>
      ))}
      {stream.map((stream) =>(
        <label>
          {stream}
          <input type="checkbox" onChange={(e) => setCheckedStream({...checkedStream, [genre]: e.target.checked})} value={checkedStream[stream]}/>
        </label>
      ))}
        </>
  )
}

const Generator = () => {
const [genre, setGenre] = useState()
 return (

<div>
 </div>
 );
};

export default Generator;