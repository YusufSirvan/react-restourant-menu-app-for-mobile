import React, { useState } from 'react'
import DessertList from './DessertList';
import DrinkList from './DrinkList';
import FoodList from './FoodList';

const Order = () => {

    const[foods,setFoods]=useState("Ürün Türü Seçiniz");
    console.log(foods)
    return (
        <div className='container mt-5'>
            <div className="btn-group w-100 mt-3">
                <button  type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    {foods}
                </button>
                <div className="dropdown-menu dropdown-menu-right w-100">
                    <button onClick={()=> setFoods("Yemek")} className="dropdown-item" type="button">Yemek</button>
                    <button onClick={()=> setFoods("İçecek")} className="dropdown-item" type="button">İçecek</button>
                    <button onClick={()=> setFoods("Tatlı")} className="dropdown-item" type="button">Tatlı</button>
                </div>
            </div><br/>
            <div>
                {foods==="Yemek"&& <FoodList/>}
                {foods==="İçecek" && <DrinkList/>}
                {foods==="Tatlı" && <DessertList/>}

            </div>

         
            <button className='mt-3 ml-5 w-75 btn-secondary border-0  rounded'>Sipariş Ver </button>

            
        </div>
        
    )
}

export default Order
