import { Crypto } from "./Crypto";
import User  from "./models/User";

export class AuthService {
    private crypto:Crypto;

    public constructor(){
        this.crypto = new Crypto();
    }
    public async register(username:string, password:string):Promise<void>{   
        const found = await  User.findOne({username});
        if(!found){
            const user = new User({
                username,
                password:this.crypto.hash(password)
            })
            user.save();
        }
        else{
            throw new Error("Eroare");
        }

    }
}