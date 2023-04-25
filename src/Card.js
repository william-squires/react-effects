
/** Renders a single card 
 * 
 * Props
 * -card
 *      {image, value, suit}
 * 
*/
function Card({card}) {
    return <img src={card.imgage} alt={`${card.value} of ${card.suit}`}/>
}

export default Card;