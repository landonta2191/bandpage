//Sprint3
const API_KEY = 'e6c0aa68-bb95-4d25-9c6c-5f728589bd7c';
const baseUrl = 'https://project-1-api.herokuapp.com';
const showendpoint= "/showdates";
const queryString= "?api_key=" + API_KEY;


//FETCHING FOR SHOW DATES 

let promise= fetch(baseUrl + showendpoint + queryString);
promise.then(function(response) {
    return response.json();
}).then(function(jSondata) {
    console.log(jSondata);
    displaydate(jSondata);
});


// CREATE A FUCNTION TO DISPLAY DATE AND USE IT LATER

    function displaydate(data) {
    for ( let i=0; i<data.length; i++) {
        let datesucess= document.getElementById('table');
        let trcontainer= document.createElement("tr");
        let tdcontainer1= document.createElement("td");
        let tdcontainer2= document.createElement("td");
        let tdcontainer3= document.createElement("td");
        let divcontainer= document.createElement("div");
        let spancontainer= document.createElement("span");
        let pcontainer1= document.createElement("p");
        let pcontainer2= document.createElement("p");
        let button= document.createElement("button");
    
        spancontainer.innerHTML= data[i].date;
        pcontainer1.innerHTML= data[i].place;
        pcontainer2.innerHTML= data[i].location;
        button.innerHTML= "GET TICKETS";
       
        trcontainer.appendChild(tdcontainer1);
        tdcontainer1.appendChild(divcontainer);
        divcontainer.appendChild(spancontainer);
        divcontainer.appendChild(pcontainer1);
        trcontainer.appendChild(tdcontainer2); 
        tdcontainer2.appendChild(pcontainer2); 
        trcontainer.appendChild(tdcontainer3); 
        tdcontainer3.appendChild(button); 
        datesucess.appendChild(trcontainer);
    
    }
    };
    


    