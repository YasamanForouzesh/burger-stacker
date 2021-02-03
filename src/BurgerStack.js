import React, { Component } from "react";
import BurgerPane from "./BurgerPane";
import Ingredient from './Ingredient'
 class BurgerStack extends Component{

    render(){
        //call .map on our passed array and 
        let burgerIngredients=this.props.burgerIngredients.map((item,index)=>(
            <li>

                <Ingredient ingredient={item.name} color={item.color} key={`keyB${index}`}/>
            </li>
        ))
        // and render an Ingridient component for each item
        return(
         
                <ul>
                    {/*Pass array of Ingridient components */}
                    {burgerIngredients}
                </ul>
                
          
        )
    }
 }


 export default BurgerStack