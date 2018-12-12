import { observable, action } from 'mobx';

class Store {
    @observable rootContainer;

    constructor() {
        this.rootContainer =
            {type:'container', items:[]};
    }

    @action
    addItem(items, type){
        let item = {type};
        if(type==='container') item.items = [];
        items.push(item);
    }
}

const store = new Store();

export default store;


