const reducer = ( state = {count: 0}, action) =>{
    switch(action.type){
        case 'INC':
            return { count: state.count + 1 };
        default:
            return state;
        }
}

export default reducer