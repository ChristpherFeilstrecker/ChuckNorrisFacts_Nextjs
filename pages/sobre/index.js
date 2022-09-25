import Link from 'next/link'
import style from '../../styles/About.module.css'
import iconwhats from '../../public/images/whats.png'
import Image from 'next/image'
export default function Sobre(){
    return<div className={style.about}>
        
        <h1>Sobre o Projeto</h1>
        <div className={style.btncontainer}>
            Projeto Chuck Norris Fatos foi desenvolvido com intuito de práticar a técnologia  <a href='https://nextjs.org/'  target="_blank" rel='noreferrer'>
           <div className={style.btn}> Next.js</div>
      </a> 
        </div>
        <div className={style.box}>
          <h3>Desenvolvedor:</h3> 
          <div>Christopher Feilstrecker da Silva</div> 
        </div>

        <div className={style.container}>
          <h3>Tecnologias Utilizadas:</h3> 
          <lu>
            <li>React</li>
            <li>Javascript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Axios</li>
            <li>Next.js</li>
          </lu>
        </div>

        <div className={style.box}>
          <h4>Entre em contato:</h4> 
          <div>
          <a href={`https://api.whatsapp.com/send?phone=5551989477910&text=Olá! Meu nome é...`}
              target="_blank" rel="noreferrer">
              <Image className="whats-icon" 
              src='/images/whats.png' 
              width='30px' 
              height='30px' 
              alt="icon-whats" />
            </a>
            </div> 
        </div>
        
        </div>
}