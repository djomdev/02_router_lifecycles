import React from 'react';

// https://reactjs.org/docs/higher-order-components.html

const userHoc = (WrappedComponent, WrappedComponent2, arg1 ) => {
    
    return (props) => (
        <div>
            {/* {console.log(props)} */}
            {arg1}
            <WrappedComponent {...props} />
            <WrappedComponent2 {...props}/>
        </div>
    )
}

export default userHoc;