import React, {Component} from "react"
import Ingredient from "./Ingredient"
function IngredientList(props){
   let ingridientComponent=props.ingredients.map((item,i)=>(
      <li onClick={(e)=>{props.addBurgerIngridients(e)}}>
         <Ingredient ingredient={item.name} color={item.color} key={`key ${i}`}/>
      </li>
   ))
   return(
      <div>
         <ul>
         {ingridientComponent}
         </ul>
      </div>
   )
}
// class IngredientList extends Component{
//  render(){
//     // take array of props and use .map
//     let ingridientComponent=this.props.ingredients.map((item,index)=>(
//        // render individual Ingrident components in list
//         <li onClick={(e)=> this.props.addToBurger(e)}>
//            <Ingredient   ingredient={item.name} color={item.color} key={`key ${index}`}/>

//         </li>
//     ))
   
//     return(
//     <>
//     <ul>
//        {/* pass ingridient array var */}
//        {ingridientComponent}
//     </ul>
//     </>
//    )
//  }
// }
export default IngredientList