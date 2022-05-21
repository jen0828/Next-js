import { Character } from "../../types";
import Image from 'next/image';
import imageLoader from "../../imageLoader";

function CharacterPage({character}: {
  character: Character
}){
return <div>
  <h1>{character.name}</h1>
  <Image 
  loader={imageLoader}
  unoptimized
  src={character.image}
  alt={character.name}
  width="200px"
  height="200px"
  
  />
  </div>
}

export async function getStaticPaths(){
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: GetCharactersResults = await res.json();

  return{
    paths: results.map(() => {
      return {params: {id: String(character.id)}}
    })
  }
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const character = await res.json();

  return {
    props: {
      character,
    },
  };
}

export default CharacterPage