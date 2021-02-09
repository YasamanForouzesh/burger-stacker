import React, {Component} from "react"
function Ingredient(props){
    return(
        <>
         <p style={{backgroundColor:props.color }}>
            {props.ingredient}
        </p>
        </>
       
    )
}
// class Ingredient extends Component{
    
//    render(){
      
//        return(
//            <>
//            <p  style={{backgroundColor:this.props.color }}key={this.props.key}>
//                {/* render individual ingridient*/}
//                 {this.props.ingredient}
//            </p>
//            </>
//        )
//    }
// }
export default Ingredient