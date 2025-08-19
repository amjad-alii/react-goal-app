import React from "react"; 
import ReactDOM from 'react-dom/client';

function MissedGoal(){
    return <h1>Goal is missed</h1>
}

function MadeGoal(){
    return <h1>Goal is made</h1>
}

// function Goal(props){
//     const isGoal = props.isGoal;
//     if(isGoal){
//         return <MadeGoal/>
//     }else{
//        return <MissedGoal/>
//     }
// }

function Goal(props){
  return props.isGoal ? <MadeGoal/> : <MissedGoal/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Goal isGoal = {true}/>
    <Goal isGoal = {true}/>
    <Goal isGoal = {false}/>
  </React.StrictMode>
);
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App'; 

// function Football(){
//   // const shoot = ()=>{
//   //   alert("Goal")
//   // }
//   // return <button onClick={shoot}>Take a short</button>

//   const shoot = (a)=>{
//     alert(a)
//   }
//   return <button onClick={() => shoot('Goal')}>Take a short</button>
// }




// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
