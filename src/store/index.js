import { observable, action } from 'mobx';
import shortid from 'shortid';


class Store {
    @observable rootContainer;

    constructor() {
        this.rootContainer = {type:'container', items:[]};
    }

    @action
    addItem(items, type){
        let item = {type, id:shortid.generate()};
        if(type==='container') item.items = [];
        items.push(item);
    }

    @action
    changeColor(box, color){
        box.color = color;
    }

    @action
    deleteBox(box, items){
        items.splice(items.indexOf(box), 1);
    }
}

const store = new Store();

export default store;


