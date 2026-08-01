export class NotFoundError extends Error {
    statusCode: number;
    constructor (messege: string){
        super(messege);
        this.statusCode = 404;
    }
}