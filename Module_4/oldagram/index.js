const mainPost = document.getElementById("main-post")




const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


function render(arr){
    let post = ''
    for (let i = 0; i < arr.length; i++){
        post += 
        `
        <section id=${i}>
        <div class="container">          
                <img id="avatar" src=${arr[i].avatar}>
                <p4 id="name-place"><span class="name">${arr[i].name}</span> ${arr[i].location}</p4>                
                <img id="post" src=${arr[i].post} onclick="like()">
                <img id="heart" src="images/icon-heart.png"> 
                <img id="comment" src="images/icon-comment.png">
                <img id="dm" src="images/icon-dm.png">
                <p id="likes"><span class="bold-weight"><span id="like">${arr[i].likes}</span> likes</span></p>
                <p id="user-comment"><span class="bold-weight">${arr[i].username}</span> ${arr[i].comment} </p>               
            </div>
            </section>
            <div class="container">
            <div class="space"></div>
            </div>
        ` 
    }
    mainPost.innerHTML = post
}


render(posts)

const likesEl = document.getElementById("like")


function like(){
    let numberLikes = likesEl.textContent
    numberLikes=Number(numberLikes)+1
    likesEl.textContent = numberLikes

    
    
}



