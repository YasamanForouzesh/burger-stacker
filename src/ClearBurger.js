import React, { Component} from 'react'
function ClearBurger(props){
    return(
                    <>
                        <button onClick={props.clearBurger}>Clear Burger Stack</button>
                    </>
                )
}
// class ClearBurger extends Component{
//     render(){
//         return(
//             <>
//                 <button onClick={this.props.clearBurger}>Clear Burger Stack</button>
//             </>
//         )
//     }
// }

export default ClearBurger