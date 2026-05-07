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
//         name: "meera ",
//         pic: "https://plus.unsplash.com/premium_photo-1671586881745-7b3d98a73138?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         bio: "lost in thoughts, found in dreams"
//     },
//     // {
//     //     name: "rohan ",
//     //     pic: "https://images.unsplash.com/photo-1681084421455-ccdb9478d802?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     //     bio: "coding my way through life 💻"
//     // },
//    
//    
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

//aii


const users = [
    {
        name: "amisha rathore",
        pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
        bio: "silent chaos in a loud world | not for everyone",
        age: 25,
        location: "Mumbai, India",
        interests: ["Photography", "Travel", "Music"]
    },
    {
        name: "mahak sharma",
        pic: "https://images.unsplash.com/photo-1586351012965-861624544334?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "dream big | hustle harder",
        age: 23,
        location: "Delhi, India",
        interests: ["Fitness", "Entrepreneurship", "Reading"]
    },
    {
        name: "priya singh",
        pic: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "living life on my own terms",
        age: 26,
        location: "Bangalore, India",
        interests: ["Art", "Yoga", "Cooking"]
    },
    {
        name: "meera joshi",
        pic: "https://plus.unsplash.com/premium_photo-1671586881745-7b3d98a73138?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "lost in thoughts, found in dreams",
        age: 24,
        location: "Pune, India",
        interests: ["Writing", "Nature", "Meditation"]
    },
    {
        name: "sneha patel",
        pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "smile more, worry less 😊",
        age: 22,
        location: "Ahmedabad, India",
        interests: ["Dancing", "Socializing", "Volunteering"]
    },
    {
        name: "pooja malhotra",
        pic: "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "born to stand out, not fit in",
        age: 27,
        location: "Chennai, India",
        interests: ["Fashion", "Design", "Technology"]
    },
    {
        name: "kanika patel",
        pic: "https://images.unsplash.com/photo-1574013452070-94fa88bc5ddd?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "crazy blogger and bike lover",
        age: 25,
        location: "Jaipur, India",
        interests: ["Blogging", "Motorcycling", "Adventure"]
    }
];

const cardsContainer = document.querySelector(".cards");
const input = document.querySelector(".inp");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalBio = document.getElementById("modal-bio");
const modalAge = document.getElementById("modal-age");
const modalLocation = document.getElementById("modal-location");
const modalInterests = document.getElementById("modal-interests");

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

    content.append(h3);
    card.append(img, blur, content);

    card.addEventListener("click", () => openModal(user));

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

function openModal(user) {
    modalImg.src = user.pic;
    modalName.textContent = user.name;
    modalAge.textContent = `Age: ${user.age}`;
    modalLocation.textContent = `📍 ${user.location}`;
    modalBio.textContent = user.bio;
    
    modalInterests.innerHTML = "";
    user.interests.forEach(interest => {
        const span = document.createElement("span");
        span.textContent = interest;
        span.className = "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm";
        modalInterests.appendChild(span);
    });
    
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeModalFunc() {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}

closeModal.addEventListener("click", closeModalFunc);

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

input.addEventListener("input", () => {
    const searchValue = input.value.trim().toLowerCase();
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchValue) ||
        user.bio.toLowerCase().includes(searchValue) ||
        user.location.toLowerCase().includes(searchValue) ||
        user.interests.some(interest => interest.toLowerCase().includes(searchValue))
    );
    showUsers(filteredUsers);
});

showUsers(users);





const us=[
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
]


 