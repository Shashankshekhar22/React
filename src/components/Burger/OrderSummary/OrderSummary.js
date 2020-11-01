import React, { Component } from 'react';
import Aux from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    // This could be a functional Component as well because we do not have to manage any sate or use any lifecycle hooks

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
                            .map(igKey=>{
                            return <li key = {igKey}>
                                    <span style={{textTransform:'capitalize'}}>{igKey}</span>: 
                                    {this.props.ingredients[igKey]}
                                </li>
                            });
        return(
            <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue To Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
        )
    }
}

export default OrderSummary;