// eslint-disable
import { useState } from 'react';
import "./App.css";

const Generator = () => {
  const [num, setNum] = useState(0);
  const randomNumberInRange = (min, max)=> {
    return Math.floor(Math.random()
  *(max-min +1)) + min;
  }
  const handleClick = () => {
    setNum(randomNumberInRange(1,1011985))
  }
  return (
    <div className="wrapper">
      <h2>number is:{num}</h2>
      <button onClick={handleClick}>
        Click Me Generate
      </button>
    </div>
  )
}

// function App(){
//   const genres = [
//     "Action",
//     "Adventure",
//     "Anime",
//     "comedy",
//     "Comic Book",
//     "Crime",
//     "Disaster",
//     "Drama",
//     "Dramedy",
//     "Fantasy",
//     "Horror",
//     "Musical",
//     "Mystery",
//     "RomCom",
//     "Romance",
//     "Sci-Fi",
//     "Sports",
//     "Thriller",
//     "Western"
//   ];

//   const initialFromState = genres.reduce((acc, curr) => {
//     acc[curr] = false;
//     return acc;
//   }, {});
//   const [checkedGenres, setCheckedGenres] = useState(initialFromState);
  
//   return(
//     <>
//       {genres.map((genre) =>(
//         <label>
//           {genre}
//           <input type="checkbox" onChange={(e) => setCheckedGenres({...checkedGenres, [genre]: e.target.checked})} value={checkedGenres[genre]}/>
//         </label>
//       ))}
//         </>
//   )

// }

// const Generator = () => {
// const [genre, setGenre] = useState()
//  return (

// <div>
//  </div>
//  );
// };

export default Generator;