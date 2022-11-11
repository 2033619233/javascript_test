
let target = {
    a: 1
}

let proxy = new Proxy(target, {
    get(target, prop) {
        console.log('收集依赖')
        
        if(prop in target){
            return prop
        }else{
            return '未找到'
        }
    },
    set(target, prop,val){
        console.log('通知更新')  
        target[prop] = val
     }
})
// proxy.a = 100
console.log(proxy.a =100);
