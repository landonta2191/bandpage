
// SPRINT 2

// Create 3 objects inside an array
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var currentdate = day + "." + month + "." + year;

var person= [
    { 
    name:"Jack Den",
    date: "2 months ago",
    comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going.This is still simply the greatest opening of a concert I have EVER witnessed.",
    likes: 0,
    }
,    
    { 
    name:"Corey Kohan",
    date: "3 months ago",
    comment: "Its just amazing all the sounds that come out of this band. Neil is just an animal on the drum kitand Geddy and Alex are just as good on their instruments.",
    likes: 2,
    
}
,
    { 
    name:"Edward Anthony",
    date: "4 months ago",
    comment: "These guys are beyond great. The opening melody was incredible and had to be very difficult.The #1 band I regret not seeing LIVE.",
    likes: 3,

}

];
//Grab the empty div assign a variable 
let box = document.getElementById("storesection");
console.log(box);
function displayComment () {
for (let i=0; i<person.length; i++) {
    //create elements
    let container= document.createElement("div");
    let fullname= document.createElement("p");
    let fulldate= document.createElement("span");
    let fullcomment= document.createElement("p");
    let fullicon= document.createElement("i");
    let fulllikes= document.createElement("p");
    let fullreply= document.createElement("p")
    // create id
    container.classList.add("comment_section--container")
    fullname.classList.add("comment_section--name");
    fulldate.classList.add("comment_section--date");
    fullcomment.classList.add("comment_section--comment");
    fullicon.classList.add("material-icons");
    fulllikes.classList.add("comment_section-likes");
    fullicon.setAttribute("id","icon");
    fullreply.setAttribute("id", "reply");
    //PUT in HTML


    fullname.innerHTML= person[i].name;
    fulldate.innerHTML= currentdate;
    fullcomment.innerHTML= person[i].comment;
    fullicon.innerHTML= "favorite";
    fulllikes.innerHTML= person[i].likes;
    fullreply.innerHTML= "reply";

    //decide order and layout
    fullname.appendChild(fulldate);
    container.appendChild(fullname);
    container.appendChild(fullcomment);
    container.appendChild(fullicon);
    container.appendChild(fulllikes);
    container.appendChild(fullreply);
    box.appendChild(container);  
}
 };
 displayComment();

 


// Create an HTML form whose onclick or onsubmit event handler function does the following:
// Constructs a new comment object
// Pushes a new comment object to an array of comments
// Clears all comments from the page
// Re-renders to the page all comments from the comment array
let button= document.querySelector("button");
button.addEventListener('click', (event) => {
    event.preventDefault();
    // put it first to prevent refreshing 
    // create a varibale to store the value of name and comment
    // HEY EVERYTIME I CLICK THE SUBMIT BUTTON.
    //  VALUES OF NAME AND COMMENT INPUT HAS TO STORE SOMEWHERE
    let storename = document.getElementById("name").value;
    let storecomment = document.getElementById("comment").value;
    //NOW I HAVE TO create a new array of comment TP STORE NEW COMMENT
    let newcomment= {name: storename,comment: storecomment};
    // PUSH THE NEW COMMENT TO THE PERSON (OLD ARRAY). REPLACING IT

    person.unshift(newcomment);
    // EMPTY THE SECTION TO SHOW NEW COMMMENT BECAUSE I DONT 
    // WANNA SEE OLD COMMENTS
    document.getElementById('storesection').innerHTML="";
    displayComment();



    
    document.getElementById('name').value='';
    document.getElementById('comment').value='';
}
);

let heart= document.querySelectorAll(".material-icons");
console.log(heart);

for (let i=0; i<heart.length; i++) {
    heart[i].addEventListener('click',event => {
    alert("it works");
    console.log('event handler ran and i was equal to', i);
    if (event.target.style.color !== "red") {
        person[i].likes= person[i].likes +1;
        event.target.style.color = "red";
    } 
    else 
        {
        person[i].likes= person[i].likes -1;
        event.target.style.color = "blue"; 
        }
    document.getElementById('storesection').innerHTML="";
    displayComment();
})
};


// let replybox= document.getElementById("reply");
//  replybox.addEventListener('click', (event) => {
//     event.defaultPrevent(); 
//     alert("it worKs");
//     let storename= document.getElementById('name');
//     let storecomment= document.getElementById('comment');
//     let newcomment= {"name": storename,"reply": storecomment};
//     displaynewComment();
       
// });










readfile gonna take long TimeRanges. 




/* we give function to. readfile gonna take long Time. take result of operation and call sucesscallback
readfile gonan do something we get proimise to 
result of operation. what is return value of function. readile. result is result of reading that file. 
result will be whatver respondse. Result of readfile
sucesscallback is being passeed as argument. 

call that function.then. take promise
.then= a fucntion live inside promise. 


sucesscalback- variable of the functuion. this function needs be epxtected to gve something.




Catch= hanlde any errors.
ok promise if things go badly call this function instead (eerror call back) It will pass a value. erroe jobecjt trying to explain what went wrong





3 console logs. 19 line will run first???????? WHY
when things go well     

readfile go do your job. not gonna wait for u to finish th
