class errorHandler extends Error{
    statuscode : number;
    constructor(message:string, statuscode:number){
        super(message);
        this.statuscode = statuscode;
    }
}

export default errorHandler;