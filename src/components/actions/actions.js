const ADD_TO_CART=(product)=>({
    type:"ADD_TO_CART",
    payload:product
})
const SHOW_CART =()=>({
    type:"SHOW_CART"
})
const REMOVE_CART=(product)=>({
    type:"REMOVE_CART",
    payload:product
})

const INC_QNTY=(product)=>({
    type:"INC_QNTY",
    payload:product
})

const DEC_QNTY=(product)=>({
    type:"DEC_QNTY",
    payload:product
})

const USER_LOGIN=(credentials)=>({
    type:"USER_LOGIN",
    payload:credentials
})



export {ADD_TO_CART,SHOW_CART,REMOVE_CART, INC_QNTY, DEC_QNTY,  USER_LOGIN}