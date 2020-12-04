// setItem into localStorage
let saveItems = (key,items) => {

    localStorage.setItem(key, items);

}

//Localstorage with object

// getItem in localStorage
let getObjectItems = (key)=>{

    let items = localStorage.getItem(key);
    items = JSON.parse(items);
    return items;
    //it will return parsed localStorage Item (Object)

}

let setObjectToItem = (key,value)=>{
    let index = 0;
    let items = getObjectItems(key); //catch object from localstorage
        while(index < localStorage.length){
            // if localStorage name exist , add item to localStorage
            if(localStorage.key(index) == key){   
                items.push(value);
                saveItems(key, JSON.stringify(items));
                break;
            }else {
                // if localStorage doesnt exist, it will make new localStorage
                saveItems(key,JSON.stringify(value));
            }
            index++;
        };
}

let removeObjectOnItem = (key,index)=>{

    let items = getObjectItems(key);
    if(index > -1){
        items.splice(index,1);
    }
    saveItems(key, JSON.stringify(items));

}

let getCountItemObject = (key) => {

    let items = getObjectItems(key);
    return items.length;

}





