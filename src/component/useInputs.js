import { useState,useCallback, useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) { 
        //CHANGE
        case 'CHANGE':
            return {
                ...state,
                [action.name]: action.value    
            };
        //RESET
        case 'RESET' :
            return Object.keys(state).reduce((acc, current) => {
                acc[current] = '';
                return acc;
              }, {});
            default:
              return state;
    }  
}



function useInputs(initailForm) {
    const [form, dispatch] = useReducer(reducer, initailForm);
    //CHANGE
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        dispatch({ type: 'CHANGE', name, value });
    }, [])
    const reset = useCallback( ()=> dispatch({type: 'RESET'}),[]);   
    return [form, onChange, reset];
};

export default useInputs;

/* const [ form,setForm ] = useState(initailForm); 
    const onChange = useCallback(e => {
        console.log("e.target",e.target);
        const { name, value } = e.target;
        setForm(form => ({...form, [name] : value}));
    },[])
const reset = useCallback(()=>setForm(initailForm), [initailForm]); */