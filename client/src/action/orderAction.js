import  {DELETE_SELECTED_ITEM,UPDATE_ITEM,GET_ITEM,ADD_ITEM,DELETE_ITEM, ITEMS_LOAD} from './types';
import axios from 'axios';
import {tokenConfig} from './authActions';
import {returnErrors} from './errorActions';

export const getOrders=()=> dispatch =>{
    dispatch(setOrderLoading());

    axios.get('/products').then(res=>
    dispatch({
        type:GET_ORDER,
        payload:res.data
    }))
    .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)));   
};
export const addOrder=order=> dispatch =>{
    axios.post('/add_order',order)
    .then(res=>dispatch({
        type:ADD_ORDER,
        payload:res.data
    })).catch(err=>dispatch(returnErrors(err.response.data,err.response.status)));
};

export const deleteOrder=id=>dispatch=>{
    console.log("Id of Order",id);
    const config={
        headers:{'Content-Type':'application/json'}
    }
    const body=JSON.stringify({id});
    console.log("Action Order Id",id);
    axios.post('/delete_order',body,config).then(
        res=>dispatch({
            type:DELETE_ORDER,
            payload:id
        })
    ).catch(err=>dispatch(returnErrors(err.response.data,err.response.status)));
}


// export const deleteSelectedItem=ids=>dispatch=>{
//     console.log("Id of Item",ids);
//     const config={
//         headers:{'Content-Type':'application/json'}
//     }
//     var body=JSON.stringify({ids});
//     var {ids}=body
//     console.log("Action Product Id",typeof ids);
//     console.log("Body",body,body[0],ids);
//     axios.post('/delete_selected_product',body,config).then(
//         res=>dispatch({
//             type:DELETE_SELECTED_ITEM,
//             payload:ids
//         })
//     ).catch(err=>dispatch(returnErrors(err.response.data,err.response.status)));
// }



// export const updateOrder=({id,name,manufacturer,description,stock,price,rating})=>dispatch=>{
//     console.log("Id of Item",id);
//     const config={
//         headers:{'Content-Type':'application/json'}
//     }
//     const body=JSON.stringify({id,name,description,manufacturer,price,stock,rating});
//     console.log("Action Product Id",id);
//     axios.post('/update_product',body,config).then(
//         res=>dispatch({
//             type:UPDATE_ITEM,
//             payload:res.data
//         })
//     ).catch(err=>dispatch(returnErrors(err.response.data,err.response.status)));
// }


// export const setItemsLoading=()=>{
//     return{
//         type:ITEMS_LOAD
//     };
// }