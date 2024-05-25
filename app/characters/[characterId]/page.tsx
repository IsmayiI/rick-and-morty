import { getCharacter } from "@actions/getCharacter"
import { Metadata } from "next"
import { title } from "process"

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


const CharacterIdPage = async ({ params }: Props) => {

   const character = await getCharacter(params.characterId)

   return (
      <section>
         <h1 className="font-bold underline text-white">{character.name}</h1 >
      </section>
   )
}

export default CharacterIdPage