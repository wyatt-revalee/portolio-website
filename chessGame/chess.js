//Insert images for the pieces
function insertImage() {
    document.querySelectorAll('.box').forEach(image => {
        
        if(image.innerText.length !== 0) {  //If tile isn't empty
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') { //If tile is a pawn, add a pawn
                
                image.innerHTML = '${image.innerText} <img class='allimg allpawn' src="images/${image.innerText}.png" alt="">
                image.style.cursor = 'pointer'
            }
        
             else {     //Else, add respective piece

                image.innerHTML = '${image.innerText} <img class='allimg' src="images/${image.innerText}.png" alt="">
                image.style.cursor = 'pointer'
            }
        }
    })
    insertImage() //Function call

    //Tile Coloring
    function coloring() {
        const color = document.querySelectorAll('.box')

        color.forEach(color => {

            getId = color.id
            arr = Array.from(getId)
            arr.shift()
            aside = eval(arr.pop())
            aup = eval(arr.shift())
            a = aside + aup

            if( a % 2 == 0) {
                color.style.backgroundColor = 'rgb(240, 201, 150)'
            }
            if(a % 2 !== 0) {
                color.style.backgroundColor = 'rgb(100, 75, 43)'
            }
        })
    }
    coloring() // Function call

    //Color own pieces red when moving piece
    function colorRed() {
        document.querySelectorAll('.box').forEach(i1 => {
            if (i1.style.backgroundColor == 'red') {

                document.querySelectorAll('.box').forEach(i2 => {
                    
                    if (i2.style.backgroundColor == 'green' && i2.innerText.length !== 0) {

                        greenText = i2.innerText
                        redText = i1.innerText

                        redColor = ((Array.from(redText)).shift()).toString()
                        greenColor = ((Array.from(greenText)).shift()).toString()

                        if (redColor == greenColor) {
                            i2.style.backgroundColor = 'rgb(254, 60, 60)'
                        }
                    }
                })
            }
        })
    }

}