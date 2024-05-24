import { Logo } from "@components/icons"

export const Header = () => {
   return (
      <header className="bg-gray-300">
         <div className="container flex justify-between items-center py-4 text-slate-700">
            <Logo />
            <nav>
               <ul>
                  <li>Characters</li>
               </ul>
            </nav>
         </div>
      </header>
   )
}