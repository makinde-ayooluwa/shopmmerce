export default class Alert {
    constructor() {
        
    }
    cartSuccess({name}){
        return document.createTextNode(name + " added to cart successfully");
    }
    cartError({name}){
        return document.createTextNode(name + " is already your in cart");
    }
}