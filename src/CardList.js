import Card from "./Card";

/** Renders a list of cards 
 * 
 * Props
 * -cards:
 *      [ {image, value, suit},...]
 * 
*/
function CardList({ cards }) {
    return (
        <div>
            {cards.map((c, idx) => <Card key={idx} card={c} />)}
        </div>
    )
}

export default CardList;