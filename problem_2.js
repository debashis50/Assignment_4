function  validEmail( email ) {
    if(typeof email !== "string"){
        return "Invalid";
    }
    const firstAlphabet = email[0]
    if(firstAlphabet === '.' || firstAlphabet === '-' || firstAlphabet === '_' || firstAlphabet === '+' || firstAlphabet === '@'){
        return false;
    }
    if(email.includes(" ")){
        return false;
    }
    if(!email.includes('@')){
        return false;
    }
    if(!email.endsWith('.com')){
        return false;
    }
    else{
        return true;
    }
}