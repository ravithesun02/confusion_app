import * as ActionTypes from './ActionTypes';

export const comments=(state={
    isLoading:true,
    errmess:null,
    comments:[]
},actions)=>{
    switch(actions.type){
        case ActionTypes.ADD_COMMENTS:
            return{...state,isLoading:false,errmess:null,comments:actions.payload};
       
        case ActionTypes.COMMENTS_FAILED:
            return{...state,isLoading:false,errmess:actions.payload,comments:[]};
        default:
            return state;
    }
}