import React, { useState } from 'react'

const FoodList = () => {
    const[foods,setFoods]=useState("Ürünler")

    const array = [

        { name: 'Kuzu Tandır', id: 0 },
        { name: 'Büryan Kebabı', id: 1 },
        { name: 'Pilav Tavuk', id: 2 },

    ]
    return (
        <div>

            <div className="btn-group mt-3 w-100">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    {foods}

                </button>

                <div className="dropdown-menu dropdown-menu-right w-75">
                {
                array.map((ar) => (
                    <button onClick={()=> setFoods(ar.name)}  key={ar.id} className="dropdown-item" type="button">{ar.name}</button>
                ))
            }
                </div>
                <input className='ml-5 w-25' type="number" />
            </div>
            <button  className='mt-3 w-100 btn-secondary border-0  rounded'>Kaydet</button>

            


        </div>
    )
}



export default FoodList
