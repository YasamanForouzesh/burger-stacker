import React, {Component} from "react"
class Ingredient extends Component{
    
   render(){
      
       return(
           <>
           <p  style={{backgroundColor:this.props.color }}key={this.props.key}>
               {/* render individual ingridient*/}
                {this.props.ingredient}
           </p>
           </>
       )
   }
}
export default Ingredient