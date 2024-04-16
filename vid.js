function changeContent(){
    let video1 = document.getElementById("video1")
    let text1 = document.getElementById("text1")
    let text2 = document.getElementById("text2")
    // let text3 = document.getElementById("text3")
    video1.src = "spontaneous Generation.mp4"
    text1.style.backgroundColor = "red"
    text2.textContent = "Boldlink technology solution"
    content.style.color = "green"
}

function reload(){
    location.reload()
   }