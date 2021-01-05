const counterId = document.querySelector("#counter")
const commentForm = document.querySelector("#comment-form")
const commentList = document.querySelector("#list")
const plusId = document.querySelector("#plus")
const minusId = document.querySelector("#minus")
const heartId = document.querySelector("#heart")
const pauseId = document.querySelector("#pause")


let counter = 0
let counting = true

let timer = setInterval(function(){
    if (counting) {
        counterId.innerHTML = counter
        counter += 1;
       }
 }, 1000);

plusId.addEventListener("click", function(){
    counterId.innerText = parseInt(counterId.innerText) + 1
})


minusId.addEventListener("click", function(){
    counterId.innerText = parseInt(counterId.innerText) - 1
})

pauseId.addEventListener("click", function(){
    if(counting){
        pauseId.innerText = "resume"
        counting = false
    } else {
        pauseId.innerText = "pause"
        counting = true 
    }
})
// still confused on this one
// heart_id.addEventListener("click", function(){
//     let like = document.querySelector(".likes")
  
//     if(document.getElementById(`Li${counter}`) == null){
//       let li = document.createElement("li");
//       li.setAttribute("id", `Li${counter}`)
//       li.innerHTML = `${counter} have this many likes:1`
//       like.appendChild(li)
//     }
//     else {
//       let li = document.getElementById(`Li${counter}`)
//       let splitted = parseInt(li.innerHTML.split(":")[1]) + 1
//       li.innerHTML = `${counter} have this many likes:${splitted}`
//       like.appendChild(li)
//     }
  
//   })

commentForm.addEventListener("submit", function(e){
    e.preventDefault();

    const newComment = document.querySelector("#comment-input").value 

    commentList.innerHTML += `
        <p>
        ${newComment}
        <button data-action="delete">Delete</button>
        </p>
    `
    commentForm.reset()
})

commentList.addEventListener("click", function(e){
    if(e.target.dataset.action === "delete"){
        e.target.parentElement.remove()
    }
})























