

class Storage {

    

    static has(key){

        if(localStorage.getItem(key)){

           return localStorage.getItem(key);
           
        }else{
            return false;
        }

       
        
    }

    static get(key){

        return this.has(key);
    }

    static set(key, data){

        let setData = [];

        if( this.has(key) ){

            setData = JSON.parse(this.has(key));
            
            
        }
        setData.push(data);

        localStorage.setItem(key, JSON.stringify(setData));
    }
}

export default Storage;