function toggleMenu(){

let menu=document.getElementById("navMenu");

menu.classList.toggle("active");

}



function addPost(){

let title=document.getElementById("title").value.trim();

let content=document.getElementById("content").value.trim();

if(title=="" || content==""){

alert("Please fill all fields");

return;

}

let post={

title:title,

content:content,

date:new Date().toLocaleString()

};

let posts=JSON.parse(localStorage.getItem("posts"))||[];

posts.unshift(post);

localStorage.setItem("posts",JSON.stringify(posts));

window.location.href="posts.html";

}



function showPosts(){

let container = document.getElementById("blogContainer");
if(!container) return;

let posts = JSON.parse(localStorage.getItem("posts")) || [];

// purani heading hata do agar already ho
let oldHeading = document.querySelector(".diary-heading");
if(oldHeading) oldHeading.remove();

container.innerHTML = "";

// agar koi post nahi
if(posts.length === 0){
container.innerHTML = `
<div class="empty">
<h1>📭 No Diaries Yet</h1>
<h3>Write your first diary...</h3>
<a href="index.html">
<button>➕ Write Now</button>
</a>
</div>
`;
return;
}

// heading container ke upar lagao
let heading = document.createElement("h1");
heading.innerText = "📓 My Diaries";
heading.classList.add("diary-heading");

container.parentNode.insertBefore(heading, container);

// cards container ke andar
posts.forEach((post,index)=>{

let div = document.createElement("div");
div.classList.add("card");

div.innerHTML = `
<h2>${post.title}</h2>
<p>${post.content}</p>
<small class="date">${post.date}</small>
<button class="delete-btn" onclick="deletePost(${index})">Delete</button>
`;

container.appendChild(div);

});

}


function deletePost(index){

let posts=JSON.parse(localStorage.getItem("posts"))||[];

posts.splice(index,1);

localStorage.setItem("posts",JSON.stringify(posts));

showPosts();

}



window.onload=showPosts;
function autoGrow(element){

element.style.height = "auto";

element.style.height = element.scrollHeight + "px";

}