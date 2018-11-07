const localstorage = {
    save(key,val){
       return localStorage.setItem(key,JSON.stringify(val))
    },
    get(key){
        return JSON.parse(localStorage.getItem(key))
    },
    move(key){
        return localStorage.removeItem(key)
    },
}
export default localstorage