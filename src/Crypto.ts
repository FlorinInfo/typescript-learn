import bcrypt from "bcrypt";

export class Crypto {
    public hash(text:string):string{
        return bcrypt.hashSync(text, 12);
    }
    public comp(hashed:string, text:string):boolean{
        return bcrypt.compareSync(text, hashed);
    }
}