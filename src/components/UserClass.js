import React from "react";


class UserClass extends React.Component{

    constructor(props){
        super(props)
        console.log(props)
        console.log("Constructor calledn child")

        this.state={
            count:0,
            count1:1
        };
    }

    
    componentDidMount(){
        console.log("Component Did mount method is called child")
    }

    render(){
        console.log("Render method is called child")
        return (
            <div className="userclass">
                <p>My name is Dwijal</p>
                <p>This is comming from class based component {this.state.count}</p>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                    })
                }}>Count Update</button>
            </div>
        )
    }

}

export default UserClass