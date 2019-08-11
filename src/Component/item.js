import React, { Component } from 'react';
import { observer } from 'mobx-react'
@observer
class Item extends Component{
    buyItem=()=>{
        this.props.buyItem(this.props.item.name)
    }
    changeprice=()=>{
        let price=prompt("set price",this.props.item.price)
        this.props.changeprice(this.props.item.name,price)
    }
render(){
   
    return(
        <li onDoubleClick={this.changeprice}>
           {this.props.item.quantity}  {this.props.item.name} available at {this.props.item.price}$ per item <button onClick={this.buyItem}>buy</button>
        </li>
    )
}
}

export default  Item