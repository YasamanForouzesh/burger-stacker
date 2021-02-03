import React, {Component} from "react"
import Ingredient from "./Ingredient"

class IngredientList extends Component{
 render(){
    // take array of props and use .map
    let ingridientComponent=this.props.ingredients.map((item,index)=>(
       // render individual Ingrident components in list
        <li onClick={(e)=> this.props.addToBurger(e)}>
           <Ingredient   ingredient={item.name} color={item.color} key={`key ${index}`}/>

        </li>
    ))
   
    return(
    <>
    <ul>
       {/* pass ingridient array var */}
       {ingridientComponent}
    </ul>
    </>
   )
 }
}
export default IngredientList