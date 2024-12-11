import Cookies from "js-cookie";

export default function getCookie(name:string){
    const cookie = Cookies.get(name)
    if(cookie){
        return JSON.parse(cookie)
    }else{
        return null
    }
}