import React from "react";

    const Person = (props) => {
    return <p>i'm {props.name} and i am {props.age}</p>
    };

export default Person;


















// import "./Person.css";
// const Person = props => {
//   return (
//     <div className="Person">
//       <p onClick={props.click}>
//         I'm {props.name} and I am {props.age} years old
//       </p>
//       <p>{props.children}</p>
//       <input type="text" onChange={props.changed} value={props.name} />
//     </div>
//   );
// };
