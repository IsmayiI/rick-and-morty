import { getCharacter } from "@actions/getCharacter"
import { error } from "console"
import { Metadata } from "next"

interface Props {
   params: {
      characterId: number
   }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
   const character = await getCharacter(params.characterId)

   return {
      title: character.name
   }
}

function delay(ms: number) {
   throw new Error('damn bro')
   return new Promise(resolve => setTimeout(resolve, ms));
}


const CharacterPage = async ({ params }: Props) => {

   const character = await getCharacter(params.characterId)
   await delay(2000)

   return (
      <section>
         <h1 className="font-bold underline text-white">{character.name}</h1 >
      </section>
   )
}

export default CharacterPage