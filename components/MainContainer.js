import Footer from './Footer'
import Navbar from './Navbar'
import style from '../styles/MainContainer.module.css'
import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'

export function MainContainer({ children }) {

    let splashScreem = () => {
        return <div className={style.splash}>
            <div className={style.columnone}></div>
            <div className={style.columntwo}></div>
            <div className={style.columnthree}></div>
            <div className={style.columnfour}></div>
            <div className={style.imgsplashcontainer}>
                <Image
                    src='/images/aprove.png'
                    width='300px'
                    height='300px'
                />
            </div>

        </div>
    }

    return (
        <>
            <Head>
            <link rel="shortcut icon" href="/images/chuck-icon.png" />
                <title>Chuck Norris Fatos</title>
                <meta name='keywords' content='Chuck Norris, Curiosidades'></meta>
            </Head>
            {splashScreem()}
            <Navbar />
            <div className={style.maincontainer}>{children}</div>
            <Footer />


        </>
    )
}