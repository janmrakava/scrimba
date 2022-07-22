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
        <section>
        <div class="container">          
                <img id="avatar" src=${arr[i].avatar}>
                <h4 id="name">${arr[i].name}</h4>
                <p id="place">${arr[i].location}</p>
                <img id="post" src=${arr[i].post}>
                <img id="heart" src="images/icon-heart.png"> 
                <img id="comment" src="images/icon-comment.png">
                <img id="dm" src="images/icon-dm.png">
                <p id="likes">${arr[i].likes}</p>
                <p id="username">${arr[i].username}</p>
                <p id="comment">${arr[i].comment}</p>
            </div>
            </section>
        
        ` 
    }
    mainPost.innerHTML = post
}

render(posts)


