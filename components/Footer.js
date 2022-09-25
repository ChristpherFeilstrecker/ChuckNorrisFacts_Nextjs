
import style from '../styles/Footer.module.css'

export default function Footer() {
    return <footer className={style.footer}>
        <div>Projeto de estudo Next.js @2022</div>
        <div><a href='https://github.com/ChristpherFeilstrecker/Chuck-Norris-Fatos-Next.js-' target="_blank" rel='noreferrer'>Documentação</a></div>
        <div> Developer <a href='https://www.linkedin.com/in/christopher-feilstrecker/' target="_blank" rel='noreferrer'>@Christopher F. da Silva</a></div>
    </footer>
}