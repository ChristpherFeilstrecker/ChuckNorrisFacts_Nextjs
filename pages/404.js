import style from '../styles/Erro.module.css'
import Link from 'next/link'
import Image from 'next/image'
export default function NotFound(){
    return<div className={style.erro}>
        
        <Image
          src='/images/chuck_choro.jpg'
          width='350px'
          height='200px'
          alt="chuck-choro"
        />

        <h1>ERRO 404 - Esta página não existe</h1>
        
        <Link  href='/'><a className={style.btn}>VOLTAR</a></Link>
        </div>
}