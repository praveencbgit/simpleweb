export const initialState={

    basket:[],
    search:[],
};


const reducer=(state,action)=>{
console.log(">>>here is ",action)


switch(action.type){


case "IMG_CLICK":
    return{


...state,
basket:[...state.basket,action],



    }

case "SEARCH_CONTENT":
    return{


...state,
basket:[...state.basket,action]



    }





    default:return state;
}


}




export default reducer;