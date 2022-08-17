import React from "react";
import { Alert } from "react-bootstrap";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Card from '../components/Card';
import Button from 'react-bootstrap/Button';

class Main extends React.Component{
    constructor(){
        super();

        this.state = {
            loading: true,
            users: []
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => this.updateUsers(data))
            .catch(err=> this.failedToLoad())
    }
   
    updateUsers = (data) => {
        this.setState({loading:false, users: data})
    }
    failedToLoad = () =>{
        this.setState({loading:false})
    }
    
    render(){
        const {loading, users} = this.state
        return(
            <>
             
             <h1 className="m-3">Contact List</h1>
             {/**Data is being fetched, show loading*/}
             {loading && <Alert>Loading</Alert>}

             {/**Fetch method caught a network error and updated loading state to false */}
             {users.length === 0 && !loading && <Alert variant="danger">Network Error</Alert>}

             {/**Render users data once successfully fetched */}
             {
               users.length > 0 && <Row>
                {users.map(user => {
                    return <Col key={user.id}  md={3}> <Card user={user} /></Col>
               })}
               </Row>
             }

            </>
        )
    }
}
export default Main;