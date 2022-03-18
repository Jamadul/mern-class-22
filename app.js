


// get elements

import Alert from "./src/alert.js";
import Storage from "./src/storage.js";

const staff_add_form = document.getElementById('staff_add_form');

staff_add_form.addEventListener('submit', function(e){

    e.preventDefault();
    const msg = document.querySelector('.msg');


    let form_data = new FormData(e.target);

    let data = Object.fromEntries(form_data.entries());

    let { name, cell, location, photo} = data;


    if( name == '' || cell == '' || location == ''){

        msg.innerHTML = Alert.danger('All data are required');      


    }else{

        Storage.set('staff', data);

        staff_add_form.reset();

    }


});


function getAllStaff(){
    
}