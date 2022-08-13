import React from 'react';

const Hello = ({color,name}) => {
    //console.log(props);
    return(
        <div style={{
            color: color
        }}>
            안녕하세요 {name}
        </div>
    )
}

Hello.defaultProps = {
    name: '비회원'
}
export default Hello;