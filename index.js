const btnLike1 = document.getElementById("btnlike1")
const count1 = document.getElementById("count1")

function countLike1() {
  let likeCounts = parseInt(count1.innerText) + 1
  count1.innerText = likeCounts.toString()
}
btnLike1.addEventListener("click", countLike1)

const btnDislike1 = document.getElementById("btndislike1")
const dcount1 = document.getElementById("dcount1")

function countDislike1() {
  let dislikeCounts = parseInt(dcount1.innerText) + 1
  dcount1.innerText = dislikeCounts.toString()
}
btnDislike1.addEventListener("click", countDislike1)

const btnLike2 = document.getElementById("btnlike2")
const count2 = document.getElementById("count2")

function countLike2() {
  let likeCounts = parseInt(count2.innerText) + 1
  count2.innerText = likeCounts.toString()
}
btnLike2.addEventListener("click", countLike2)

const btnDislike2 = document.getElementById("btndislike2")
const dcount2 = document.getElementById("dcount2")

function countDislike2() {
  let dislikeCounts = parseInt(dcount2.innerText) + 1
  dcount2.innerText = dislikeCounts.toString()
}
btnDislike2.addEventListener("click", countDislike2)


const submit = document.getElementById("submit")
const comment = document.getElementById("comment")
const commentbox = document.getElementById("commentbox")

function submitComment(){
   commentbox.textContent += comment.value.toString() + "\n";
  comment.value=" ";
}
submit.addEventListener("click",submitComment)
