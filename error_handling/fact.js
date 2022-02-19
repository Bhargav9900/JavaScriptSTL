import NegativeNumErr from "./negNum";

function fact(num){
    if(num<0)
        throw new NegativeNumErr("Sorry")
    else
        console.log("yes possible")


}
try{
fact(-1);
}catch(error){
    console.error(error.message)
}