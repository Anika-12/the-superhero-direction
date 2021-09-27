import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Member from '../Member/Member';
import './Person.css';

const Person = () => {
      const [members, setMembers] = useState([]);
      const [cart,setCart] = useState([]);
      useEffect ( () => {

        fetch('./products.JSON')
          .then(res => res.json())
          .then (data => setMembers(data));

},[])

    const handleAddToPerson = (member)=>{
      const newCart = [...cart,member];
      setCart(newCart);
    }
    return (
       
           <div className="row gx-5 p-3">
        <div  className="col-md-9">
            <div className="p-3 border border-2 bg-light col-12 person-container"> 
               
                {
                    members.map(member=><Member key={member.key} member={member}
                    handleAddToPerson={handleAddToPerson}></Member>)
                }
                     
                  </div>
                  </div>
                  
           

            
            <div className="col-md-3">
                <div className="p-3 border border-2 bg-light fixed-position ">
               <Cart cart={cart}></Cart>
              <h6> {cart.map (member => member.name)}</h6>
            </div>
            </div> 
            
        </div>
    );
};

export default Person;