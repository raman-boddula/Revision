import React from "react";
import axios from 'axios';
import { Button ,Input} from 'antd';
import 'antd/dist/antd.css';
export class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [],
            query: '',
            page:1
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            query: e.target.value,
        }, () => console.log(this.state.query))
    }

    //useEffect()
    componentDidMount() {
        this.handleGetTodos();
    }
    componentDidUpdate(prevProps,prevState) {
        if (prevState.page !== this.state.page) {
            this.handleGetTodos();
        }
    }
    handleGetTodos() {
        axios.get('http://localhost:3001/Todos', {params:{_page:this.state.page,_limit:3}})
            .then(response => this.setState({
                todo: response.data
            },
                () => console.log(response.data))
            )
            .catch(error => console.log(error));
    }
    handleAdd() {
        const { query } = this.state;
        const payload = {
            title: query,
            status: false,
        }
        axios.post("http://localhost:3001/Todos",payload)
            .then((res) => { 
                this.handleGetTodos();
            },()=>console.log(this.state)).catch((err) => console.log(err))
    }
    handleDelete(id) {
        axios.delete(`http://localhost:3001/Todos/${id}`)
            .then((res) => { 
                this.handleGetTodos();
            },()=>console.log(this.state)).catch((err) => console.log(err))
    }
    handleEdit(id) {
        const payload = {
            status:true
        }
        axios.patch(`http://localhost:3001/Todos/${id}`, payload)
            .then((res) => {
                this.handleGetTodos();
        },()=>console.log(this.state)).catch((err) => console.log(err))
    }
    handlePages(val) {
        this.setState({
            page: this.state.page + val
        })
    }
    render() {
        const { query, todo } = this.state;
        return (
            <div>
                <h1> Add Todo</h1>
                <Input onChange={this.handleChange} type="text" placeholder="add something" />
                <Button onClick={this.handleAdd.bind(this)} type="primary" >ADD TODO</Button>
                <div>
                    {todo?.map((el) => {
                        return <div style={{display: 'flex', padding:"10px",border:"1px solid black",justifyContent: 'space-between'}}>
                            {el.title}&ensp;&ensp;
                            {el.status?"Completed":"Incomplete"}
                            <Button onClick={this.handleEdit.bind(this,el.id)}>Toggle</Button>
                            <Button onClick={this.handleDelete.bind(this, el.id)} type="danger">DELETE</Button>
                        </div>
                    })}
                     <Button onClick={this.handlePages.bind(this,-1)} >PREV</Button>&ensp;
                    <Button onClick={this.handlePages.bind(this,1)} >Next</Button>

                </div>
            </div>
        )
    }
}