import { observable,action } from 'mobx'

class RootStore {
    constructor() {
        this.nameStore = new NameStore();
        this.ageStore = new AgeStore();
    }
}

class NameStore{

    @observable
    name = '张三';

    @action
    setName(newName){
        this.name=newName;
    }
}

class AgeStore{

    @observable
    age = '30';

    @action
    setAge(newAge){
        this.age=newAge;
    }
}

export default new RootStore();
