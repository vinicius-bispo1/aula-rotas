import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header style={{backgroundColor: "gray"}}>
         <nav>
        <Link to="/">Home</Link>|
        <Link to="Sobre">Sobre</Link>|
        <Link to="Contato">Contato</Link>
         </nav>
         <a href="Sobre">teste</a>
    </header>
  )
}
