import { Logo } from "@components/icons"
import { ROUTES } from "@utils/constans"
import Link from "next/link"

export const Header = () => {

   return (
      <header className="bg-gray-300">
         <div className="container flex justify-between items-center py-4 text-slate-700">
            <Logo />
            <nav>
               <ul>
                  <li><Link href={ROUTES.CHARACTERS}>Characters</Link></li>
               </ul>
            </nav>
         </div>
      </header>
   )
}