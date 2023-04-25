
import { useEffect, useState } from 'react';
import './App.css';
import CardList from './CardList';
import axios from 'axios';

/** App
 * 
 * State
 * -cards:
 *     [ {image, value, suit},...]
 * -isLoading: boolean
 *      
 */
function App() {
  const [deck, setDeck] = useState({ deck: null, isLoading: true });
  const [cards, setCards] = useState([]);

  useEffect(function fetchCardOnClick() {
    async function fetchCard() {

    }
  },
  )

  /** gets a deck from api on mount */
  useEffect(function fetchDeckOnMount() {
    async function fetchDeck() {
      const resp = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle")
      const newDeck = resp.data
      setDeck(
        {
          deck:
            { deckId: newDeck.deck_id, remaining: newDeck.remaining },
          isLoading: false
        })
    }
    fetchDeck();
  },
    [])
  console.log(deck);
  if (deck.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="App">
      <button >Draw a card</button>
      <CardList cards={cards} />
    </div>
  );
}

export default App;
