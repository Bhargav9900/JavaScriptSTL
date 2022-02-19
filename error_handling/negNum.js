export default class NegativeNumErr extends Error{

    constructor(message){
        super(message);
        this.name = "Negative number";
    }
}