import React from 'react'
import Button from 'react-bootstrap/Button'
class Card extends React.Component {
   
    render () {
        const {user, removeUser} = this.props
        return (
            <div className="card m-1 p-3">
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