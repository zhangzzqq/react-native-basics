import React, {PureComponent} from 'react';
import MobxPage from "./MobxPage"
import { Provider } from 'mobx-react'
import stores from './Stroe'


export default class App extends PureComponent {

    render() {
        return (
        <Provider rootStore={stores}>
            <MobxPage/>
        </Provider>
        );
    }
}

