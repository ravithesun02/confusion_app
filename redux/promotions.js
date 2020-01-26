import * as ActionTypes from './ActionTypes';

export const promotions=(state={
    isLoading:true,
    errmess:null,
    promotions:[]
},actions)=>{
    switch(actions.type){
        case ActionTypes.ADD_PROMOTIONS:
            return{...state,isLoading:false,errmess:null,promotions:actions.payload};
        case ActionTypes.PROMOTIONS_LOADING:
            return{...state,isLoading:true,errmess:null,promotions:[]};
        case ActionTypes.PROMOTIONS_FAILED:
            return{...state,isLoading:false,errmess:actions.payload,promotions:[]};
        default:
            return state;
    }
}