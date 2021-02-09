import { useState, useEffect } from 'react';
function useBurgerIngridients(e){

    const [burgerIngridients,setBurgerIngridienta]=useState([])

    console.log(e.target.innerText)
    let currentBurger=burgerIngridients
    currentBurger.push({name:e.target.innerText, color:e.target.style})
    setBurgerIngridienta(currentBurger)
}



export default useBurgerIngridients