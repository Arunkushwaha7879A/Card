// const users=[
//     {
//         name: "amisha rathore",
//         pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
//         bio: "silent chaos in a loud world | not for everyone"
//     },
//     {
//         name: "mahak sharma",
//         pic: "https://images.unsplash.com/photo-1586351012965-861624544334?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         bio: "dream big | hustle harder"
//     },
//     // {
//     //     name: "riya kapoor",
//     //     pic: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     //     bio: "coffee first, everything later ☕"
//     // },
//     {
//         name: "priya singh",
//         pic: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         bio: "living life on my own terms"
//     },
//     {
//         name: "meera joshi",
//         pic: "https://plus.unsplash.com/premium_photo-1671586881745-7b3d98a73138?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         bio: "lost in thoughts, found in dreams"
//     },
//     // {
//     //     name: "rohan verma",
//     //     pic: "https://images.unsplash.com/photo-1681084421455-ccdb9478d802?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     //     bio: "coding my way through life 💻"
//     // },
//     {
//         name: "sneha patel",
//         pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         bio: "smile more, worry less 😊"
//     },
//     {
//         name: "pooja malhotra",
//         pic: "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         bio: "born to stand out, not fit in"
//     },
//      {
//         name: "kanika patel",
//         pic: "https://images.unsplash.com/photo-1574013452070-94fa88bc5ddd?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         bio: "crazy blogger and bike lover"
//     }
// ]

// function showUsers(arr){
//     arr.forEach(function(user){
//         // main card div
// let card = document.createElement("div");
// card.classList.add("card") ;

// // image
// let img = document.createElement("img");
// img.src = user.pic;
// img.classList.add("bg-img") ;

// // blurred layer
// let blur = document.createElement("div");
// blur.style.backgroundImage = `url(${user.pic})`; 
// blur.classList.add("blurred-layer");

// // content div
// let content = document.createElement("div");
// content.classList.add("content");

// // heading
// let h3 = document.createElement("h3");
// h3.textContent = user.name;

// // paragraph
// let p = document.createElement("p");
// p.textContent = user.bio;

// // append content inside content div
// content.appendChild(h3);
// content.appendChild(p);

// // append everything inside card
// card.appendChild(img);
// card.appendChild(blur);
// card.appendChild(content);

// // finally add card to body (or any container)

// document.querySelector(".cards").appendChild(card);
//     });
// }

// showUsers(users);

// let inp = document.querySelector(".inp");

// inp.addEventListener("input" , function(){
//     let newUsers=users.filter((user)=>{
//         return user.name.startsWith(inp.value);
//     });

//     document.querySelector(".cards").innerHTML=" ";
//     showUsers(newUsers);
// });


//gpt ka code

const users = [
    {
        name: "amisha rathore",
        pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
        bio: "silent chaos in a loud world | not for everyone"
    },
    {
        name: "mahak sharma",
        pic: "https://images.unsplash.com/photo-1586351012965-861624544334?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "dream big | hustle harder"
    },
    {
        name: "priya singh",
        pic: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "living life on my own terms"
    },
    {
        name: "meera joshi",
        pic: "https://plus.unsplash.com/premium_photo-1671586881745-7b3d98a73138?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "lost in thoughts, found in dreams"
    },
    {
        name: "sneha patel",
        pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "smile more, worry less 😊"
    },
    {
        name: "pooja malhotra",
        pic: "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "born to stand out, not fit in"
    },
    {
        name: "kanika patel",
        pic: "https://images.unsplash.com/photo-1574013452070-94fa88bc5ddd?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "crazy blogger and bike lover"
    }
];

const cardsContainer = document.querySelector(".cards");
const input = document.querySelector(".inp");

function createUserCard(user) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = user.pic;
    img.alt = user.name;
    img.className = "bg-img";

    const blur = document.createElement("div");
    blur.className = "blurred-layer";
    blur.style.backgroundImage = `url(${user.pic})`;

    const content = document.createElement("div");
    content.className = "content";

    const h3 = document.createElement("h3");
    h3.textContent = user.name;

    const p = document.createElement("p");
    p.textContent = user.bio;

    content.append(h3, p);
    card.append(img, blur, content);

    return card;
}

function showUsers(userList) {
    cardsContainer.innerHTML = "";

    if (userList.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No matching user found.";
        message.style.color = "white";
        message.style.fontSize = "18px";
        message.style.textAlign = "center";
        cardsContainer.appendChild(message);
        return;
    }

    const fragment = document.createDocumentFragment();

    userList.forEach((user) => {
        fragment.appendChild(createUserCard(user));
    });

    cardsContainer.appendChild(fragment);
}

input.addEventListener("input", () => {
    const searchValue = input.value.trim().toLowerCase();

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchValue)
    );

    showUsers(filteredUsers);
});

showUsers(users);
