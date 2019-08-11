import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Item from './item'
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
            <ul>
              {this.props.inventory.list.map((i,ind)=><Item item={i} key={ind} buyItem={this.props.inventory.buyItem} changeprice={this.props.inventory.changeprice} />)}
            </ul>
            </div>
        )
    }
}

export default  Maket