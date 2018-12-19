
//SRINT3

// DATE FUNCTION
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var currentdate = day + "." + month + "." + year;



const API_KEY = 'b9728a1e-9ce2-4da3-a55b-b47636abb74b';
const baseUrl = 'https://project-1-api.herokuapp.com';
const endpoint= "/comments";
const queryString= "?api_key=" + API_KEY;

let comments = [];
//USE THIS EMPTY ARRAY TO STORE THE ARRAY fr. 

//FETCHING FOR SHOW DATES - GET METHOD  
let promise= fetch(baseUrl + endpoint + queryString);
promise.then(function(response) {
    return response.json();
}).then(function(jSondata) {
    console.log(jSondata);
    displaydata(jSondata);
    // displayheart(jSondata);
    showreply(jSondata);
    // displaydelete(jSondata);
    comments=jSondata;
});

// DISPLAY COMMENT FUCNTION
var box = document.getElementById("storesection");
function displaydata (data) {
    for (let i=0; i<data.length; i++) {
        //create elements
        let container= document.createElement("div");
        let fullname= document.createElement("p");
        let fulldate= document.createElement("span");
        let fullcomment= document.createElement("p");
        let fullicon= document.createElement("i");
        let fulldelete = document.createElement("i");
        let fulllikes= document.createElement("p");
        let fullreply= document.createElement("button")
        // create class
        container.classList.add("comment_section--container")
        container.setAttribute("id",data[i].id);
        fullname.classList.add("comment_section--name");
        fulldate.classList.add("comment_section--date");
        fullcomment.classList.add("comment_section--comment");
        fullicon.classList.add("material-icons");
        fulldelete.classList.add("material-icons");
        fulldelete.classList.add("delete");
        fulllikes.setAttribute("id","likes");
        fullicon.setAttribute("id",data[i].id);
        fulldelete.setAttribute("id",data[i].id);
        fullreply.setAttribute("id","reply");
        fullreply.classList.add("replybutton");

        //Event for heart
        fullicon.addEventListener('click',event => {
        console.log(event.target);
        event.preventDefault();
        alert("it works");
        console.log(data);
        let heartID= event.target.id;
        displayheart(heartID);
        console.log(heartID);

        if (event.target.style.color !== "red") {
            data[i].likes += 1;
            console.log(data[i]);
            event.target.style.color = "red";
            box.innerHTML="";
            displaydata(data);
            console.log(data);
        }
        
        });


        // Event for delete

        fulldelete.addEventListener('click',event => {
            console.log(event.target);
            event.preventDefault();
            alert("it works");
            console.log(data);
            let deleteID= event.target.id;
            displaydelete(deleteID);
            console.log(deleteID);

        if (event.target.style.color !== "red") {
            let element = document.getElementById(deleteID);
            box.removeChild(element);
            // event.target.parentNode.remove();

            box.innerHTML="";
            displaydata(comments);
        }});


    
        //     });
    
        //PUT in HTML
        fullname.innerHTML= data[i].name;
        fulldate.innerHTML= currentdate;
        fullcomment.innerHTML= data[i].comment;
        fullicon.innerHTML= "favorite";
        fulldelete.innerHTML="delete";
        fulllikes.innerHTML= data[i].likes;
        fullreply.innerHTML= "reply";

        //decide order and layout
        fullname.appendChild(fulldate);
        container.appendChild(fullname);
        container.appendChild(fullcomment);
        container.appendChild(fullicon);
        container.appendChild(fulllikes);
        container.appendChild(fulldelete);
        container.appendChild(fullreply);
        box.appendChild(container); 

        // displayheart(data);

    
    }
     };

/// DISPLAY HEART FUCNTION 
function displayheart (data) {
    // console.log(heart);
    
        fullcommentID= data;

        const init= {
            method: 'PUT',
            headers: {
                  'content-type': 'application/json'
            }
        };

        const endpointforlikes= "/comments/" + fullcommentID + "/like";
        console.log(endpointforlikes);
        let promise= fetch(baseUrl + endpointforlikes + queryString, init);
        console.log(baseUrl + endpointforlikes + queryString);

        promise.then(function(response) {
        return response.json();
        }).then(function(jSondata) {
            console.log(jSondata)
            getthelikes= jSondata;
            displaydata(jSondata);
        });

        
 
    };  
  

// DELETE BUTTON
function displaydelete (data) {
    // console.log(heart);
    
        fullcommentID= data;

        const init= {
            method: 'DELETE',
            headers: {
                  'content-type': 'application/json'
            }
        };

        const endpointfordelete= "/comments/" + fullcommentID;
        console.log(endpointfordelete);
        let promise= fetch(baseUrl + endpointfordelete + queryString, init);
        console.log(baseUrl + endpointfordelete + queryString);

        promise.then(function(response) {
        return response.json();
        }).then(function(jSondata) {
            console.log(jSondata)
            getthedelete= jSondata;
            displaydata(jSondata);
        });
    };  
  

//POST METHOD TO POST COMMENTS

    let button= document.querySelector("button");
    button.addEventListener('click', (event) => {
    event.preventDefault();
    alert('it works');
    let storename = document.getElementById("name").value;
    let storecomment = document.getElementById("comment").value;
    let newcomment= {name: storename,comment: storecomment};

    const init= {
        method: 'POST',
        body: JSON.stringify(newcomment),

        headers: {
              'content-type': 'application/json'
        }
    };

    //POST FENCHING
    let postpromise= fetch(baseUrl + endpoint + queryString, init);
        postpromise.then((response) => {
            return response.json();
        }).then((justposteddata) => {
            console.log(justposteddata);
        //Got the array data from post
            comments.push(justposteddata);
        //PUsh the comment updated to POST server to the GET data before
            box.innerHTML="";
        //Clear 
            displaydata(comments);
            // displayheart(comments)=> THIS CAUSE ERRROR BC WE HAVENT CLCKED THE HEART YET ;
            showreply(comments);
        //display new data. USe the display function 

        }).catch((error) => {
            console.log(error);
        });

    //CLEARING INPUT
    document.getElementById('name').value='';
    document.getElementById('comment').value='';
    
});

//REPLY
function showreply(data) {
    
let replycomment= document.querySelectorAll(".replybutton");
console.log(replycomment);
for (let i=0; i<replycomment.length; i++) {
    replycomment[i].addEventListener('click',(event) => {
    console.log(event.target);
    alert("it works");
    })}};


//SCROLL TO TOP

var scrollButton = document.querySelector(".arrow");
