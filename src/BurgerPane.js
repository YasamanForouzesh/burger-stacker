import React, {Component} from "react"
import BurgerStack from "./BurgerStack";
import ClearBurger from "./ClearBurger"
function BurgerPane(props){
  return(
    <div>
      <BurgerStack ingredients={props.ingredients}/>
      <ClearBurger clearBurger={props.clearBurger}/>
    </div>
  )
}
// class BurgerPane extends Component{
//     // handle passed in props and state vals and functions
//   render(){

//       return(
//           <div>
//             <BurgerStack burgerIngredients={this.props.burgerIngredients}/>
//             <ClearBurger clearBurger={this.props.clearBurger}/>
//           </div>
//       )
//   }
// }

export default BurgerPane