import { observable, computed, action, autorun } from 'mobx';

class Store {
    @observable rootContainer;

    constructor() {
        this.rootContainer =
            {type:'container',
                items:[
                    {type:'container',
                        items:[
                            {type:'box', color:'green'},
                            {type:'container', items:[
                                    {type:'box',color:'blue'}
                                ]},
                        ]},
                    {type:'box'},
                    {type:'box', color:'red'}
                ]}
        ;
    }

    @computed get isOpenLeftPanel() {
        return this.show;
    }

    @action('toggle left panel')
    addItem() {
        this.rootContainer.items[0].push({type:'box', color:'yellow'})
    }
}

const store = new Store();

autorun(() => {
    console.log(this.rootContainer);
});

export default store;
