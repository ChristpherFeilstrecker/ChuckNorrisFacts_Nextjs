import { useEffect, useState } from "react";
import style from '../../styles/Curiosities.module.css'
import axios from 'axios'
import Image from "next/image";
import useForm from "../../../../Frela/LCW/lcw-front/src/components/hooks/useForm";

export async function getStaticProps() {

    const data = await fetch('https://api.chucknorris.io/jokes/random')

    return {
        props: {},
    }
}

export default function Curiosities() {
    const [data, setData] = useState();
    let [dataArray, setDataArray]=  useState([])
    const [categoryData, setCategoryData] = useState();
    const [category, setCategory] = useState();
    let [refresh, setRefresh] = useState(false)

    let updateCategory = (ev) => { //atualiza a categoria selecionada  
        setCategory(ev.target.value)
    }

    const useData = () => {   // retorna um fato aleatório
        useEffect(() => {
            axios
                .get('https://api.chucknorris.io/jokes/random')
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.log("erro", error)
                });
        }, [refresh]);

    }
    useData()

    const UseCategoryData = () => {   // retorna categorias

        useEffect(() => {
            axios
                .get('https://api.chucknorris.io/jokes/categories')
                .then((response) => {
                    setCategoryData(response.data);
                })
                .catch((error) => {
                    console.log("erro", error)
                });
        }, [refresh]);

    }
    UseCategoryData()

    const UseCategoryFactData = () => {   // retorna fatos por categorias
        axios
            .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
            .then((response) => {
                console.log("categori", response.data)
                setData(response.data);
            })
            .catch((error) => {
                console.log("erro", error)
            });
    }
 const [formSearch, onChangeSearch] = useForm({ search: "" })

    const UseSearchData = () => {   // retorna fatos por busca
        axios
            .get(`https://api.chucknorris.io/jokes/search?query=${formSearch.search}`)
            .then((response) => {
                setDataArray(response.data.result);
            })
            .catch((error) => {
                console.log("erro", error)
            });
    }

    let selectCategoryList = categoryData && categoryData // retorna select de categorias
        .map((cat) => {
            return <option key={cat} value={cat}>{cat}</option>
        })

    let factsList = dataArray && dataArray // retorna fatos
        .map((fact) => {
            console.log("fato",fact)
            return <div key={fact.id} className={style.text}>{fact.value}</div>
        })

    /*
        let categoryList = (() => {
                return <>
                <option key={categoryData && categoryData[0]} value={categoryData && categoryData[0]}>{categoryData && categoryData[0]}</option>
                <option key={categoryData && categoryData[1]} value={categoryData && categoryData[1]}>{categoryData && categoryData[1]}</option>
                <option key={categoryData && categoryData[2]} value={categoryData && categoryData[2]}>{categoryData && categoryData[2]}</option>
                <option key={categoryData && categoryData[3]} value={categoryData && categoryData[3]}>{categoryData && categoryData[3]}</option>
                <option key={categoryData && categoryData[4]} value={categoryData && categoryData[4]}>{categoryData && categoryData[4]}</option>
                <option key={categoryData && categoryData[5]} value={categoryData && categoryData[5]}>{categoryData && categoryData[5]}</option>
                <option key={categoryData && categoryData[6]} value={categoryData && categoryData[6]}>{categoryData && categoryData[6]}</option>
                <option key={categoryData && categoryData[7]} value={categoryData && categoryData[7]}>{categoryData && categoryData[7]}</option>
                <option key={categoryData && categoryData[8]} value={categoryData && categoryData[8]}>{categoryData && categoryData[8]}</option>
                <option key={categoryData && categoryData[9]} value={categoryData && categoryData[9]}>{categoryData && categoryData[9]}</option>
                <option key={categoryData && categoryData[10]} value={categoryData && categoryData[10]}>{categoryData && categoryData[10]}</option>
                <option key={categoryData && categoryData[11]} value={categoryData && categoryData[11]}>{categoryData && categoryData[11]}</option>
                <option key={categoryData && categoryData[12]} value={categoryData && categoryData[12]}>{categoryData && categoryData[12]}</option>
                <option key={categoryData && categoryData[13]} value={categoryData && categoryData[13]}>{categoryData && categoryData[13]}</option>
                <option key={categoryData && categoryData[14]} value={categoryData && categoryData[14]}>{categoryData && categoryData[14]}</option>
                <option key={categoryData && categoryData[15]} value={categoryData && categoryData[15]}>{categoryData && categoryData[15]}</option>
                </>
            })
            */

           

    let btnRefresh = () => {
        setDataArray([])
        setRefresh(!refresh)
    }

    let btnCategory = () => {
        //e.preventDefault()
        setDataArray([])
        UseCategoryFactData();
        
    }

    let btnSearch = () => {
        //e.preventDefault()
        UseSearchData()
    }

    return <div className={style.curiosities}>

        <div className={style.backcontainer}>
            <Image
                className={style.backimg}
                src='/images/chuck_back.jpg'
                width='1200px'
                height='800px'
                alt="chuck-back"
            />
        </div>

        <Image
            src='/images/chuck_fact.png'
            width='200px'
            height='200px'
            alt="chuck-logo"
        />
        <div>
            <div className={style.sourchcontainer}>

                <div className={style.categorycontainer}>
                    <div>Selecionar fato por categoria</div>

                    <form>
                        <select name="category" value={category} onChange={updateCategory} >
                            <option value="">Selecionar categoria</option>
                            {selectCategoryList}
                        </select>

                    </form>
                    <button onClick={() => btnCategory()}>VER</button>

                </div>
                <div className={style.categorycontainer}>
                    
                    <div>
                    <form className="form-Subsection3">
            <div className="flex-container" >
                <label>Nome do Serviço:</label>
                <input
                    placeholder={"Busca*"}
                    type='search'
                    name="search"
                    value={formSearch.search}
                    onChange={onChangeSearch}
                    className="input-Subsection3"
                    required
                /></div>
           
            <div className="btn-container" >
               
            </div>
        </form>
        
                    </div>
          <button onClick={() => btnSearch()}>Buscar</button>           
                </div>
            </div>
        </div>
        <div className={style.textcontainer}>
            <div className={style.textbox}>
              <div className={style.text}>{data && data.value}</div> 
              <button onClick={() => btnRefresh()}>Próximo</button> 
            </div>
            
            {factsList}
           
            
        </div>


    </div>
}