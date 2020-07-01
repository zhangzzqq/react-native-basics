/**
 * App2.js
 */

import React, {Component} from 'react';
import Route from './Route';

export default class RootApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // 渲染页面
        return <Route />;
    }
}
