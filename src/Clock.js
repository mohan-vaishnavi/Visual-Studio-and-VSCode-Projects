
export function Clock(props) {
// create a date object
    
    var date = new Date();
    var updatingDate = date;

    // use setInterval JS API to update the clock every second
    setInterval ( () =>
    {
        updatingDate = new Date();
    }, 1000);
    //render it

    return(
        
        <div>
            This is static clock
            <h2> it is {date.toLocaleTimeString() }</h2>
            This is updating clock
            <h2> it is {updatingDate.toLocaleTimeString() }</h2>
        </div>
    );

}

/*
    The above code updates time, but that does not get reflected on browser.
    This is because state management is necessary which cant be done using func comp.
    So we should prefer a class component for such an implementation.
*/