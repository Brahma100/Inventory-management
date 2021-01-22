
import  {DELETE_SELECTED_ITEM,UPDATE_ITEM,GET_ITEM,ADD_ITEM,DELETE_ITEM,ITEMS_LOAD} from '../action/types';

const initialState={
    items:[],
    itemsLoading:false,
    itemsLoaded:false
}

export default function(state=initialState,action){
    const {type,payload}=action; //destructuring action
    switch(action.type){
        case GET_ITEM:
            return{
                ...state,
                items:payload,
                itemsLoading:false,
                itemsLoaded:true
           };
           case DELETE_ITEM:
            return{
                ...state,
                items:state.items.filter(item=> item.id!==action.payload)

           };
           case DELETE_SELECTED_ITEM:
               console.log("Action Payload:",action.payload);
            return{
                    ...state,
                    items:state.items.filter(item=> 
                        {
                            // console.log("Action::",action.payload);
                            for(var id in action.payload)
                            if(item.id!==id)
                                return false;
                            return true;
                        }
                 )

           };
           case ADD_ITEM:
            return{
                ...state,
                items:[...state.items,payload]

           };
        case ITEMS_LOAD:
            return{
                ...state,
                itemsLoading:true,
                itemsLoaded:false
            }
        default:
            return state;
    }
}