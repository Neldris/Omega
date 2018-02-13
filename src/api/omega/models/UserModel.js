/**
 * User class to manage user's state
 * 
 */
export default class UserModel {

    constructor() {
        this.uid /**type[number]*/ ;
        this.username /**type[string] */ ;
        this.password /**type [string] */ ;
        this.pincode /***type[string] */ ;
        this.firstname /**type[string] */ ;
        this.surname /**type[string] */ ;
        this.telephone /**type[string] */ ;
        this.address = [] /**type[Address]*/ ;
        this.isRegisterd = false /**type[boolean]*/ ;
        this.isDeleted = false /**type[boolean] */ ;
    }
   
    setUid=(/**type[number]*/uid )=>{this.uid = uid;}
    getUid=()=>{return this.uid;}
    
    setUsername=(username /**type[string] */)=>{this.username=username;}
    getUsername=()=>{ return this.username;}

    setPassword=(password /**type [string] */)=>{this.password=password;}
    getPassword=()=>{return this.password;}

    setPincode=(pincode /**type [string] */)=>{this.pincode=pincode;}
    getPassword=()=>{return this.password;}

    setFirstname=(firstname /**type [string] */)=>{this.firstname=firstname;}
    getFirstname=()=>{return this.firstname;}

    setSurname=(surname /**type [string] */)=>{this.surname=surname;}
    getSurname=()=>{return this.surname;}

    setTelephone=(telephone /**type [string] */)=>{this.telephone=telephone;}
    getTelephone=()=>{return this.telephone;}

    setAddress=(address /**type [Address]*/)=>{this.address.push(address);}
    getAddress=()=>{return this.address;}

    setIsRegistered=(isRegisterd /**type [boolean] */)=>{this.isRegisterd=isRegisterd;}
    getIsRegistered=()=>{return this.isRegisterd;}

    setIsDeleted=(isDeleted /**type [string] */)=>{this.isDeleted=isDeleted;}
    getIsDeleted=()=>{return this.isDeleted;}
}