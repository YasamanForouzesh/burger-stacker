import React, { Component} from 'react'

class ClearBurger extends Component{
    render(){
        return(
            <>
                <button onClick={this.props.clearBurger}>Clear Burger Stack</button>
            </>
        )
    }
}

export default ClearBurger