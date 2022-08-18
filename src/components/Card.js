import React from 'react'
import Button from 'react-bootstrap/Button'
class Card extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            hidden: false
        }
    }
    removeCard = () => {
        this.setState({hidden:true})
    }
    render () {
        const {user, removeUser} = this.props
        const {hidden} = this.state
        return (
            <div className={`card m-1 p-3 ${hidden ? 'd-none' : ''}`}>
               <p className="m-0"><span className="fw-bold">Username: </span>{user.username}</p>
               <p  className="m-0"><span className="fw-bold">Email: </span>{user.email}</p>
               <p  className="m-0"><span className="fw-bold">Phone: </span>{user.phone}</p>
               <p  className="m-0"><span className="fw-bold">Address: </span>{user.address.suite}, {user.address.street}, {user.address.city}</p>
               <p  className="mb-4"><span className="fw-bold">Company: </span>{user.company.name}</p>
               <Button onClick={()=>removeUser(user)} variant="danger">Delete</Button>
            </div> 
        )
    }
}



export default Card