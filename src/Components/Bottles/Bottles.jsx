import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import { useEffect } from "react";
import { addToLS, getStoredCart, removeFromLS, removeAllFromLS } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";


const Bottles = () => {

    const [bottles,setBottles] = useState([]);
    const [buy,setBuy] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data));
    },[])

    const handleBuy =(bottle) =>{
        const newBuy = [...buy,bottle];
        addToLS(bottle.id);        
        setBuy(newBuy);
    }

    useEffect(()=>{
        if (bottles.length) {
            const storedCart = getStoredCart();
            const savedCart = [];
            storedCart.map(id =>{
                const bottle = bottles.find(bottle=> bottle.id===id)
                savedCart.push(bottle);
            })
            setBuy(savedCart)
        }
    },[bottles])
    
    const handleRemove = (id) => {
        const newSavedCart = buy.filter(item => item.id!==id)
        setBuy(newSavedCart)
        removeFromLS(id);
    }

    const handleRemoveAll = () => {
        setBuy([]);
        removeAllFromLS();
    }
    
    

    return (
        <div className="w-full px-20 mx-auto text-center">
            <h2 className='text-4xl font-bold font-serif pt-10 '>My Bottles</h2>
            <hr className="mb-20 w-24 mx-auto my-3 bg-accent h-1"/>
            <div className="flex gap-6 font-mono ">
             <div className="flex flex-wrap gap-5 ">
                {
                    bottles.map(bottle=><Bottle handleBuy={handleBuy} bottle={bottle} key={bottle.id}/>)
                }
             </div>
             <Cart handleRemoveAll={handleRemoveAll} buy={buy} key={bottles.id} handleRemove={handleRemove}/>
            </div>
        </div>
    );
};

export default Bottles;