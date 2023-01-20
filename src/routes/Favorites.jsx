import { useContext } from "react"
import { PokemonCard } from "../components";
import { FavoritesContext } from "../FavoritesProvider"
import { Col, Container, Row } from 'react-bootstrap';

function Favorites (){
    const { favorites } = useContext(FavoritesContext);
    console.log(favorites)
    return(
        <>
        <Container>
        <Row className='g-4'>
        {favorites.map((favorite)=>{
            // <Col key={favorite.name}>
            // <PokemonCard name={favorite} />
            // </Col>
            <h1>Hello</h1>
        })}
        </Row>
        </Container>
        </>
    )
}

export { Favorites }

// {pokemon?.abilities.map((ability) => (
//     <li key={ability.ability.name}>
//       <span key={ability.ability.name}>{ability.ability.name}</span>
//     </li>
//   ))}

{/* <Row className='g-4'>
{filteredPokemon.map((pokemon) => (
  <Col key={pokemon.name}>
    <PokemonCard name={pokemon.name} />
  </Col>
))}
</Row> */}