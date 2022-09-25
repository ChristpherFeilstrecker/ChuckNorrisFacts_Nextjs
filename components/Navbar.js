import Link from 'next/link'
import style from '../styles/Navbar.module.css'

export default function Navbar() {
    return <ul className={style.navbar}>
        <li>
            <Link href='/'><a>HOME</a></Link>
        </li>
        <li>
            <Link href='/curiosidades'><a>CURIOSIDADES</a></Link>
        </li>
        <li>
            <Link href='/sobre'><a>SOBRE</a></Link>
        </li>


    </ul>
}