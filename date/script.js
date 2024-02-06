const yes = document.querySelector("#btnYes")
const no = document.querySelector("#btnNo")
const img = document.querySelector("#first-img")
const label = document.querySelector("#label2") 
const label1 = document.querySelector("#label1") 

yes.addEventListener('click',()=>{
    img.src = "/date/img/cat-kiss-cat.gif"
    label1.innerHTML = ""
    label.innerHTML = "I love you<3"
})


no.addEventListener('click',()=>{
    label1.innerHTML = "Can you be ny"
    label.innerHTML = "Valentine's?"
    const imgRandom = ["/date/img/sad-cat-2.gif", "/date/img/cry-crying.gif", "/date/img/banana-cat-banana-cat-crying.gif", "/date/img/giphy.gif"]
    
        const randomImg = Math.floor(Math.random() * 4)
        console.log(randomImg);
        img.src = imgRandom[randomImg]
    
    const randomSide = Math.floor(Math.random() * 300)
    const randomTop = Math.floor(Math.random() * 500)
    
    no.style.left = `${randomSide}px`
    no.style.top = `${randomTop}px`
})