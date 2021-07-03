import  mongoose from "mongoose";
import { AuthService } from "./AuthService";


mongoose.connect("mongodb+srv://florin-vlad:florinvlad@cluster0.wjxdw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(async ()=>{
    const auth = new AuthService();
    try{
        await auth.register("aaaaa","11111");
        await auth.register("aaaaa","11111"); 
    }
    catch(error){
        console.log(error.message);
    }

    // Second method
    // auth.register("flrin", "12345").then(()=>{
    //     console.log("added");
    // }).catch(err => console.log(err.message));
    // auth.register("flor", "12345").then(()=>{
    //     console.log("added");
    // }).catch(err => console.log(err.message));
}); 