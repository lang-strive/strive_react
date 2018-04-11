export default function showHide(state=true,action){
    if(action.type=='true'){
        return state=true;
    }else if(action.type=='false'){
        return state=false;
    }else{
        return state;
    }
}
