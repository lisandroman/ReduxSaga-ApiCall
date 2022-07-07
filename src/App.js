import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getCharactersFetch } from './charState';

function App() {
  const characters = useSelector((state) => state.characters.characters)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCharactersFetch())
  }, [dispatch])
  
  return (
    <div className="App">
      <div className="grid-container">
      {characters.length === 0 
        ? 'Loading...'
        : characters.results.map((char) => {
          return (
            <div key={char.id}>
            <img src={char.image} alt={char.name}/>
            {char.name}
          </div>
            )
        })}
      </div>
    </div>
  );
}

export default App;
