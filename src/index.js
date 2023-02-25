import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const Contact = (props) => {
  const isDeleteble = props.isDeletable
  if (isDeleteble === true){
    return (
      <div className="friend-item">
        {/* replace the values by a jsx expression */}
        <h3>{props.name}</h3>
        <h4>{props.email}</h4>
        <h4>{props.phone}</h4>
  
        <button>Delete</button>
      </div>
    );

  }
  else {return (
    <div className="friend-item">
      {/* replace the values by a jsx expression */}
      <h3>{props.name}</h3>
      <h4>{props.email}</h4>
      <h4>{props.phone}</h4>

      
    </div>
  ); }
  
};

export const App = (
  // write your HTML code here

  <div>
    <h1 className="text-center">My contacts list 📱</h1>

    <div>
      <div id="container">
        <Contact name="Emmanuel" email="emmanuel@email.com" phone="552312354" />
        <Contact name="Johana" email="johana@email.com" phone="92034902" isDeletable={false}/>
        <Contact name="Lucas" email="lucas@email.com" phone="234983499" isDeletable={false} />
        <Contact name="Marie" email="marie@email.com" phone="238942384"  isDeletable={true}/>
        <Contact name="Pedro" email="pedro@email.com" phone="934584875" isDeletable={true}/>
      </div>
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
