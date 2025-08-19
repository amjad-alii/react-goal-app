import React from "react"; 
import ReactDOM from "react-dom";

function MissedGoal(){
    return <h1>Goal is missed</h1>
}

function MadeGoal(){
    return <h1>Goal is made</h1>
}

function Goal(props){
    const isGoal = props.isGoal;
    if(isGoal){
        <MadeGoal/>
    }else{
        <MissedGoal/>
    }
}

ReactDOM.render(<Goal isGoal = {true}/>
    ,
    document.getElementById('root')
)