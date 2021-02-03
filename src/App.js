import React, {Component} from "react"
import IngredientList from "./IngredientList";
import BurgerPane from "./BurgerPane"
import IngredientItems from './IngredientItems'
const ingredients=[
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]

class App extends Component{
 
  state={
    burgerIngredients: []
  }
  addToBurger=(e)=>{
    console.log(e.target.style)
    let currentBurger=this.state.burgerIngredients
    currentBurger.push({
      name:e.target.innerText,
      color:e.target.style.backgroundColor
    })
    this.setState({burgerIngredients:currentBurger})
  }
  clearBurger=(e)=>{
    this.setState({
      burgerIngredients:[]
    })
  }
  render(){
    // btw adding data, prop handling, state, functions, etc.

    return(
      <div style={{display: "flex"}}>
          <IngredientList ingredients={ingredients} addToBurger={this.addToBurger}/>
          <BurgerPane clearBurger={this.clearBurger} burgerIngredients={this.state.burgerIngredients}/>
      </div>
    )
  }
}

export default App;