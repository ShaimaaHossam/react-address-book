import React from "react";
import { Alert } from "react-bootstrap";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Card from '../components/Card';

class Main extends React.Component{
    constructor(){
        super();

        this.state = {
            loading: true,
            error: false,
            users: []
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => this.updateUsers(data))
            .catch(err=> this.failedToLoad())
    }
    componentDidUpdate(){
        console.log(this.state.users)
    }
    updateUsers = (data) => {
        this.setState({loading:false, users: data})
    }
    failedToLoad = () =>{
        this.setState({loading:false, error: true})
    }
    removeUser = (user) =>{
        const filtered = this.state.users.filter(u => u.id !== user.id);
        this.setState({users: filtered})
    }
    render(){
        const {loading, error, users} = this.state
        return(
            <>
             
             <h1 className="m-3">Contact List</h1>
             {/**Data is being fetched, show loading*/}
             {loading && <Alert>Loading</Alert>}

             {/**Fetch method caught a network error and updated loading state to false */}
             {error && !loading && <Alert variant="danger">Network Error</Alert>}

             {/**Render users data once successfully fetched */}
             {
              <Row>
                {users.map(user => {
                    return <Col key={user.id}  md={3}> <Card user={user} removeUser={this.removeUser}/></Col>
               })}
               </Row>
             }

            </>
        )
    }
}
export default Main;