import { Fragment } from "react";

function ListGroup() {
    let items = ['New York','Los Angeles','Chicago','London','Paris',];
    items = [];  
     

  return (
    <Fragment>
        <h1>List</h1>
        {items.length === 0 ? <p>There are no items in the list</p> : null}
        <ul className="list-group">
        {items.map ((item => 
        <li key = {item}>{item}</li>))}
        </ul>
    </Fragment>
  );
}

export default ListGroup;
