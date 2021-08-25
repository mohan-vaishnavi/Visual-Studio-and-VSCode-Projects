import React from 'react';

 export class ClockClass extends React.Component{ 

    /*
    The state of a class component thru consturctor using this.state property 
    Do not forget to call super() in the constructor as the comp will be derived from React.Component
    */
    
   constructor(props)
   {
       super(props);
       this.state = {date:new Date().toLocaleTimeString()};
   }

   /*
    Must make use of 'Lifecycle' methods to manage state
    start timer when component is created (= mounted)
    stop when unloaded from DOM (=unmounted)
   */
  // runs once in lifetime when comp added to DOM
  componentDidMount(){
      this.date = setInterval(
          () => {this.setState({date: new Date().toLocaleTimeString()})}, 1000
      );

  }

  // runs once in lifetime when comp removed from DOM
  componentWillUnmount(){
      clearInterval(this.date);

  }

    render(){

        return(
            <div>
                Welcome!
                <h2> It is {this.state.date }</h2>
            </div>
        );
    }
 }