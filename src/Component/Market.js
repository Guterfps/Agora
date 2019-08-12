import React, { Component } from 'react';
import { observer,inject } from 'mobx-react'
import Item from './item'
@inject("inventory")
@observer
class Maket extends Component{
    constructor(){
        super()
        this.state={
            newItem:''
        }
    }
    handleChange = (e) => {
        this.setState({
          newItem: e.target.value
        })
      }
    addItem=()=>{
        
        this.props.inventory.addItem(this.state.newItem)
        this.setState({
            newItem: ''
          })
    }
    render(){
        
        return(
            <div>
                <input value={this.state.newItem} type='text' onChange = {this.handleChange}/>
                <button onClick = {this.addItem}>Add</button>
                <span>{this.props.inventory.numItems}</span>
            <ul>
              {this.props.inventory.list.map((i,ind)=><Item item={i} key={ind}  />)}
            </ul>
            </div>
        )
    }
}

export default  Maket