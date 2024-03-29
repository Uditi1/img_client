import emojiRegex from "emoji-regex";
// import ToastMessage from "../ToastMessage";
import {toast} from 'react-toastify'
let emoji_reg_exp = emojiRegex();


export const ValidationTypes = {
    "Email" : "email",
    "Empty" : "empty",
    "Password" : "password",
    "Url" : "url",
    "Mobile" : "mobile",
    "Number" : "number",
    "MultipleWord" : "multipleword",
    "AccountNumber": "accountnumber",
    "IFSC": "ifsc"
}
function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }
export const Validation = (type=ValidationTypes,value)=>{
    if(type==ValidationTypes.Email){
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(value)){
            return true;
        }
        else{
            return false;
        }
    }
    if(type==ValidationTypes.Empty){
        if(value && value.toString().trim().length && !new RegExp(emoji_reg_exp).test(value.toString().trim())){
            return true;
        }
        if(!value){
            return false;
        }
        return false;
    }
    if(type==ValidationTypes.Password){
        if(value.toString().trim().length<8){
            return false;
        }
        else{
            return true;
        }
    }
    if(type==ValidationTypes.Url){
        return validURL(value);
    }
    if(type==ValidationTypes.Mobile){
        return new RegExp('^[+]?[0-9]{10,20}$').test(value);
        // return new RegExp('^[+]?[6-9]{1}[0-9]{9}$').test(value);
        // return new RegExp('^\+{0,2}([\-\. ])?(\(?\d{0,3}\))?([\-\. ])?\(?\d{0,3}\)?([\-\. ])?\d{3}([\-\. ])?\d{4}').test(value);
    }
    if(type==ValidationTypes.MultipleWord){
        return true;
    }
    if(type==ValidationTypes.AccountNumber){
        return new RegExp(`^\d{9,18}$`).test(value)
    }
    if(type==ValidationTypes.IFSC){
        return new RegExp(`^[A-Za-z]{4}[a-zA-Z0-9]{7}$`).test(value)
    }

}

export const ValidateList=async(list)=>{
    let count = 0;
    for await (let item of list){
        // console.log('vvv',item[1])
        if(item[1]){
            if(!Validation(item[1],item[0])){
                toast.error(item[2]);
                // console.log('222',item)
                count++;
                break;
            }
        }
        else{
            // console.log('item[0]',item[0])
            if(!item[0]){
                toast.error(item[2]);
                count++;
                break;
            }
        }
    }
    if(count>0){
        return false;
    }
    else{
        return true;
    }
    
}