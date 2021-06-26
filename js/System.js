class System{

    constructor(){

    }

    // Add code to authenticate the given code and the access codes.

    authenticate(actualCode, enteredCode){
        if(actualCode === enteredCode){
            return true;
        }
        else{
            return false;
        }
    }
}