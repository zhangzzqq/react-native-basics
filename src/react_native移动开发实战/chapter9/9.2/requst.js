import React, {Component} from 'react';
import './App.css';
import axios from 'axios'

const url = "http://localhost:8000/";

export default class Requst extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [],
            item: ''
        }
    }

    componentDidMount() {
        axios.get(url)
            .then(response => {
                this.setState({
                    list: response.data,
                })
            }).catch(function (error) {
            console.log(error)
        })
    }

    handlePut() {
        axios.post(url, {
            item: this.state.item
        }).then(response => {
            this.setState({
                list: response.data,
            })
        }).catch(function (error) {
            console.log(error)
        })
    }

    handleInput(e) {
        this.setState({
            item: e.target.value
        })
    }

    handleItem(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({list})
    }

    render() {
        return (
            <div className="App">
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.handleItem.bind(this)}>{item}</li>
                        })
                    }
                </ul>

                <div>
                    <input  onChange={this.handleInput.bind(this)}/>
                    <button onClick={this.handlePut.bind(this)}>添加</button>
                </div>
            </div>
        )
    }
}

