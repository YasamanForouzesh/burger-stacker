import React, { Component } from "react";
import BurgerPane from "./BurgerPane";
import Ingredient from './Ingredient'
function BurgerStack(props){
    let ingridientComponent=props.ingredients.map((item,i)=>(
        <li onClick={(e)=>{props.addBurgerIngridients(e)}}>
           <Ingredient ingredient={item.name} color={item.color} key={`key ${i}`}/>
        </li>
     ))
    return(
        <div>
            {console.log(`hellooo ${props.ingredients}`)}
            {ingridientComponent}
        </div>
    )
}
//  class BurgerStack extends Component{

//     render(){
//         //call .map on our passed array and 
//         let burgerIngredients=this.props.burgerIngredients.map((item,index)=>(
//             <li>

//                 <Ingredient ingredient={item.name} color={item.color} key={`keyB${index}`}/>
//             </li>
//         ))
//         // and render an Ingridient component for each item
//         return(
         
//                 <ul>
//                     {/*Pass array of Ingridient components */}
//                     {burgerIngredients}
//                 </ul>
                
          
//         )
//     }
//  }


 export default BurgerStack