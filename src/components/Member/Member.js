import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCoffee, faInfo, faMobile, faNewspaper, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Member.css';
const Member = (props) => {
    //console.log(props);
    const{  name, img, address, age, relationship, income } =  props.member;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const element1 = <FontAwesomeIcon icon={faMobile} />
    const element2 = <FontAwesomeIcon icon={faNewspaper} />
    return (
          <div>
             <img className="size" src={img}/> 
           <h4>Name: {name}</h4>
           <h4>Address:{address}</h4>
           <h4>Age:{age}</h4>
           <h4>Relationship:{relationship}</h4>
           <h4>Income:{income}</h4>
           <h5>{element1}  {element2}</h5>
           <button onClick={()=>props.handleAddToPerson(props.member)} className="btn-regular">{element}Add to Person</button>
           
            
           </div>
          

      
  

    );
};

export default Member;