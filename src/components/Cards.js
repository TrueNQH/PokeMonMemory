import { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';

function Cards(){

    const [dataPokemon, setDataPokemon] = useState([]);
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=8&offset=8')
      .then((res) => {
        Promise.all(
          res.data.results.map((pokemon) =>
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          )
        ).then((results) => {
          setDataPokemon(results.map((result) => result.data));
          
        });
      })
      .catch((error) => console.log(error));
  }, []);
  
    const [items, setItems] = useState([
        { id: 1, img: '', stat: "" },
        { id: 1, img: '', stat: "" },
        { id: 2, img: '', stat: "" },
        { id: 2, img: '', stat: "" },
        { id: 3, img: '', stat: "" },
        { id: 3, img: '', stat: "" },
        { id: 4, img: '', stat: "" },
        { id: 4, img: '', stat: "" },
        { id: 5, img: '', stat: "" },
        { id: 5, img: '', stat: "" },
        { id: 6, img: '', stat: "" },
        { id: 6, img: '', stat: "" },
        { id: 7, img: '', stat: "" },
        { id: 7, img: '', stat: "" },
        { id: 8, img: '', stat: "" },
        { id: 8, img: '', stat: "" }
    ].sort(() => Math.random() - 0.5))
    dataPokemon.map((item, index) => {
        items.map((i, ind) => {
                if(i.id == index+1) {
                    i.img = item.sprites.front_default
                }
        })
        
    })
    console.log(items);
    const [prev, setPrev] = useState(-1)
    
    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
    )
}

export default Cards