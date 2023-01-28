//Insert images for the pieces
function insertImage() {
    document.querySelectorAll('.box').forEach(image => {
        
        if(image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                
                image.innerHTML = '${image.innerText} <img class='allimg allpawn' src="images/${image.innerText}.png" alt="">
                image.style.cursor = 'pointer'
            }
        
        else {

            image.innerHTML = '${image.innerText} <img class='allimg' src="images/${image.innerText}.png" alt="">
            image.style.cursor = 'pointer'
        }
        }
    })
}