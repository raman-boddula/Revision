import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
class Counter extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            totalClicks:0
        }
    }
    handleClick = (value) => {
        //one way
        // this.setState({
        //     counter: value + this.state.counter
        // },()=>console.log(this.state));


        //second way
        this.setState((prev) => {
            return {
                counter: prev.counter + value,
                totalClicks: this.state.totalClicks + 1
            }
        })
    }
    render() {
        console.log(this.props);
        const { counter ,totalClicks } = this.state;
        const { title } = this.props;
        return (<div>
            <div>{title}</div>
            <div>Counter :{counter}</div>
            <Button type="primary" onClick={()=>{this.handleClick(1)}}>ADD</Button>
            &nbsp;<Button type="primary" onClick={()=>{this.handleClick(-1)}}>REDUCE</Button>
            <div>Total Click :{totalClicks}</div>
        </div>
        )
    }
}
export { Counter };