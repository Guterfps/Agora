import { observable, action,computed } from 'mobx'
import { Item } from './Item'
 export class Inventory{
    @observable list = []

    @action addItem=(name,price,quantity)=>{
       let item=this.list.find(i=>i.name===name)
       if(item!==undefined){
           item.quantity++
       }else{
           this.list.push(new Item(name,price,quantity))
       }
    }
    @action buyItem=(name)=>{
        let item=this.list.find(i=>i.name===name)
        item.quantity--
        if(item.quantity===0){
            let newlist=this.list.filter(i=>i.name!==name)
            this.list=newlist
        }
    }
    @action changeprice=(name,price)=>{
        let item=this.list.find(i=>i.name===name)
        item.price=price
    }
    @computed get numItems(){
        let num=0
        this.list.forEach(i=>num+=i.quantity)
        return num
    }
}