const demo = document.querySelector('#demo')
// console.log(demo)

demo.addEventListener('mouseover', displayimg)
demo.addEventListener('mouseout', RemoveImg)

function displayimg(event){
    // console.log(event)
if (!IsImgDisplayed &&  event.target === demo){
    const img = document.createElement('img')
    img.src = './img/kep.jpg'
    img.alt = 'elegtelen'

    demo.replaceChildren(img)
    IsImgDisplayed = true



}



}

function RemoveImg(event){
 const img = document.createElement('p')  
 .te  
}


