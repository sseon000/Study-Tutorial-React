import React from 'react';

const Hello = ({color,name,isSpecial}) => {
    //console.log(props);
    return(
        <div style={{
            color: color
        }}>
            {/* {isSpecial ? <b>*</b> : null} */}
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    )
}

Hello.defaultProps = {
    name: '비회원'
}
export default Hello;