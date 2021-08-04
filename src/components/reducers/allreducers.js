const cartInitialState=[];
const userInitialState=[{email:"test@1.com", password:"123456"},{email:"test@2.com",password:"123456"}]
const cartReducer=(state=cartInitialState,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return [...state,action.payload];
        case "SHOW_CART":
            return state;
        case "REMOVE_CART":
            return [...state.filter(item => item !== action.payload)];
        default :
            return state;       
        }
}

const userReducer=(state=userInitialState,action)=>{
    switch(action.type){
        case "USER_LOGIN":
        
            {console.log(action.payload)
           console.log(userInitialState)
            const found=userInitialState.find(user => user.email === action.payload.email && user.password === action.payload.password)
            // console.log("found",...state.find(action.payload))
            console.log(found)
            if(found) {
                console.log("true")
                return found;
            }
            else{
                console.log("false")

                return false;

            }}
        
        default:
            return false;
    }
}

export {cartReducer, userReducer};