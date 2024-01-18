import {users} from "./data.js";



let itemPerPage = 10; //10 contacts per page
let itemTotal = users.length;//count how many contact item 

const contactList = document.getElementById("contactList");
const contactCount = document.querySelector("#contactCount");
let pageIndex=1;
var currentPage=1;
let pageButtonsContainer = document.querySelector("#pageButtonsContainer");
let maxPageNum = Math.ceil(itemTotal/itemPerPage); 
contactCount.innerHTML=itemTotal;

function genEmailPfx(i){
    let emailPfx=((users[i].name).toLowerCase()).replaceAll(" ","-");
    return emailPfx;
}



//generating the pagination button
for(let pageIndex=1; pageIndex<=maxPageNum;pageIndex++){
    pageButtonsContainer.innerHTML+=`<span class=\"buttonClass\" id=\"${pageIndex}\">${pageIndex}</span>`;
}

//loading first page
for(let i=0;i<itemPerPage;i++){
    
    contactList.innerHTML+= 
    `<li class=\"contact-item cf\">
        <div class=\"contact-details\">
            <img class=\"avatar" src=\"${users[i].image}\">
            <h3 class=\"contactItemName\">${users[i].name}</h3>
            
            <br>
            <span>Staff Code:${users[i].code}</span><br>
            <span class=\"email\">Email:${genEmailPfx(i)}@abc.com</span>
        </div>
        <div class=\"joined-details\">
            <span class=\"dat\e">${users[i].joined}</span>
        </div>
    </li>`;
    contactCount.innerHTML=itemTotal;
} 




document.getElementById(`${currentPage}`).style.backgroundColor="lightGrey";
currentPage=1;



function pageForward(){
    
    
    document.getElementById(`${currentPage}`).style.backgroundColor="";

    if(currentPage>=maxPageNum){
        currentPage=maxPageNum;
        document.getElementById(`${currentPage}`).style.backgroundColor="lightGrey";

        alert("You have reached the last page.");
        console.log(currentPage);
    }
    else{
        document.getElementById("contactList").innerHTML="";
        currentPage+=1;
        document.getElementById(`${currentPage}`).style.backgroundColor="lightGrey";
        
        
        
        
        for(let j=(10*(currentPage-1));j<((10*(currentPage-1))+10);j++){
        
            contactList.innerHTML+= 
                `<li class=\"contact-item cf\">
                    <div class=\"contact-details\">
                        <img class=\"avatar" src=\"${users[j].image}\">
                        <h3 class=\"contactItemName\">${users[j].name}</h3>
                        
                        <br>
                        <span>Staff Code:${users[j].code}</span><br>
                        <span class=\"email\">Email:${genEmailPfx(j)}@abc.com</span>
                    </div>
                    <div class=\"joined-details\">
                        <span class=\"dat\e">${users[j].joined}</span>
                    </div>
                </li>`;
            
            contactCount.innerHTML=itemTotal;
            
        }
        console.log(currentPage);
    }
    

    
  
}

function pageBackward(){

    document.getElementById(`${currentPage}`).style.backgroundColor="";
    

    if(currentPage<=1){
        currentPage=1;
        document.getElementById(`${currentPage}`).style.backgroundColor="lightGrey";

        alert("You have reached the first page.");
    }

    else{
        currentPage-=1;
        document.getElementById(`${currentPage}`).style.backgroundColor="lightGrey";

        
        
        document.getElementById("contactList").innerHTML="";

        for(let k=(10*(currentPage-1));k<((10*(currentPage-1))+10);k++){
        
            contactList.innerHTML+= 
                `<li class=\"contact-item cf\">
                <div class=\"contact-details\">
                    <img class=\"avatar" src=\"${users[k].image}\">
                    <h3 class=\"contactItemName\">${users[k].name}</h3>
                    
                    <br>
                    <span>Staff Code:${users[k].code}</span><br>
                    <span class=\"email\">Email:${genEmailPfx(k)}@abc.com</span>
                </div>
                <div class=\"joined-details\">
                    <span class=\"dat\e">${users[k].joined}</span>
                </div>
                </li>`;
            contactCount.innerHTML=itemTotal;
    
            
        }
        
    }
    console.log(currentPage);

    

    
    
}

document.getElementById("backwardBtn").onclick = pageBackward;
document.getElementById("forwardBtn").onclick =pageForward;


// const itemTemplate=
// `<li class=\"contact-item cf\">
//     <div class=\"contact-details\">
//         <img class=\"avatar" src=\"${users[i].image}\">
//         <h3 class=\"contactItemName\">${users[i].name}</h3>
//         <br>
//         <span class=\"email\">${genEmailPfx(i)}@abc.com</span>
//     </div>
//     <div class=\"joined-details\">
//         <span class=\"dat\e">${users[i].joined}</span>
//     </div>
// </li>`;


//display backward button
// pageButtonsContainer.innerHTML+="<button id=\"forwardBtn\"> &gt; </button>"; 
// let forwardBtn = document.querySelector("#forwardBtn");





// function generateContact(aCurrentPage){
    
//     itemOnPage=0;
    
        
//     for(let j=((aCurrentPage-1)*10+1);j<(j+10);j++){
        
//         contactList.innerHTML+= 
//         `<li class=\"contact-item cf\">
//             <div class=\"contact-details\">
//                 <img class=\"avatar" src=\"${users[j].image}\">
//                 <h3 class=\"contactItemName\">${users[j].name}</h3>
//                 <br>
//                 <span class=\"email\">${genEmailPfx(j)}@abc.com</span>
//             </div>
//             <div class=\"joined-details\">
//                 <span class=\"dat\e">${users[j].joined}</span>
//             </div>
//         </li>`;
//             itemOnPage++;//for item count on page

        
//     }
//     contactCount.innerHTML=itemOnPage;

// }
