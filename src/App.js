
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
  const [deck, setDeck] = useState(
      { deck: null, isLoading: true }
  );
  const [cards, setCards] = useState(
    { cards: [], isLoading: true}
  );
  console.log("cards state=", cards.cards);
  console.log("cards.isLoading=", cards.isLoading);

  useEffect(function fetchCardOnClick() {
    async function fetchCard() {
      const resp = await axios.get(`https://deckofcardsapi.com/api/deck/${deck.deck.deckId}/draw/`);
      const newCard = resp.data.cards[0];
      const newCards = [...cards.cards, newCard]
      setCards({cards: newCards, isLoading: false});
      // setDeck(d => d.deck.remaining = resp.data.remaining);
    }
    // if(deck.deck){
    //   fetchCard();
    // }
    if(!cards.isLoading){
      fetchCard();
    }
  },[cards]
  )

  /** gets a deck from api on mount */
  useEffect(function fetchDeckOnMount() {
    async function fetchDeck() {
      const resp = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle");
      const newDeck = resp.data;
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

  function handleClick() {
    console.log("c in clic=", cards);
    const cardsInClick = cards.cards;
    setCards({cards: cardsInClick, isLoading: true})
  }


  return (
    <div className="App">
      <button onClick={handleClick}>Draw a card</button>
      <CardList cards={cards.cards} />
    </div>
  );
}

export default App;
