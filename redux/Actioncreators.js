import * as ActionTypes from './ActionTypes';
import { baseURL } from '../shared/baseUrl';


export const fetchComments=()=>(dispatch)=>{

    return fetch(baseURL+'comments')
    .then(response=>{
            if(response.ok)
                return response;
            else
            {
                var error=new Error('Error : '+response.status+': '+response.statusText);
                error.response=response;
                throw error;
            }
    },error=>{
            var errmess=new Error(error.message);
            throw errmess;
    })
    .then(response=>response.json())
    .then(comments=>dispatch(addComments(comments)))
    .catch(error=>dispatch(commentsfailed(error.message)))
}

export const addComments=(comments)=>({
    type:ActionTypes.ADD_COMMENTS,
    payload:comments
});

export const commentsfailed=(errmess)=>({
    type:ActionTypes.COMMENTS_FAILED,
    payload:errmess
});

export const fetchDishes=()=>(dispatch)=>{
    dispatch(dishesLoading());

    return fetch(baseURL+'dishes')
    .then(response=>{
            if(response.ok)
                return response;
            else
            {
                var error=new Error('Error : '+response.status+': '+response.statusText);
                error.response=response;
                throw error;
            }
    },error=>{
            var errmess=new Error(error.message);
            throw errmess;
    })
    .then(response=>response.json())
    .then(dishes=>dispatch(addDishes(dishes)))
    .catch(error=>dispatch(dishesfailed(error.message)))
}

export const dishesLoading=()=>({
 type:ActionTypes.DISHES_LOADING
});

export const addDishes=(dishes)=>({
    type:ActionTypes.ADD_DISHES,
    payload:dishes
});

export const dishesfailed=(errmess)=>({
    type:ActionTypes.DISHES_FAILED,
    payload:errmess
});


export const fetchPromos=()=>(dispatch)=>{
    dispatch(promosLoading());

    return fetch(baseURL+'promotions')
    .then(response=>{
            if(response.ok)
                return response;
            else
            {
                var error=new Error('Error : '+response.status+': '+response.statusText);
                error.response=response;
                throw error;
            }
    },error=>{
            var errmess=new Error(error.message);
            throw errmess;
    })
    .then(response=>response.json())
    .then(promotions=>dispatch(addPromos(promotions)))
    .catch(error=>dispatch(promosfailed(error.message)))
}

export const promosLoading=()=>({
 type:ActionTypes.PROMOTIONS_LOADING
});

export const addPromos=(promos)=>({
    type:ActionTypes.ADD_PROMOTIONS,
    payload:promos
});

export const promosfailed=(errmess)=>({
    type:ActionTypes.PROMOTIONS_FAILED,
    payload:errmess
});


export const fetchLeaders=()=>(dispatch)=>{
    dispatch(leadersLoading());

    return fetch(baseURL+'leaders')
    .then(response=>{
            if(response.ok)
                return response;
            else
            {
                var error=new Error('Error : '+response.status+': '+response.statusText);
                error.response=response;
                throw error;
            }
    },error=>{
            var errmess=new Error(error.message);
            throw errmess;
    })
    .then(response=>response.json())
    .then(comments=>dispatch(addLeaders(comments)))
    .catch(error=>dispatch(leadersfailed(error.message)))
}

export const leadersLoading=()=>({
 type:ActionTypes.LEADERS_LOADING
});

export const addLeaders=(leaders)=>({
    type:ActionTypes.ADD_LEADERS,
    payload:leaders
});

export const leadersfailed=(errmess)=>({
    type:ActionTypes.LEADERS_FAILED,
    payload:errmess
});
