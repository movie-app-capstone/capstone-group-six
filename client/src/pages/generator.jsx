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

  const initialFromState = genres.reduce((acc, curr) => {
    acc[curr] = false;
    return acc;
  }, {});
  const [checkedGenres, setCheckedGenres] = useState(initialFromState);
  
  return(
    <>
      {genres.map((genre) =>(
        <label>
          {genre}
          <input type="checkbox" onChange={(e) => setCheckedGenres({...checkedGenres, [genre]: e.target.checked})} value={checkedGenres[genre]}/>
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