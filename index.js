
var imageUrls   = ['url("images/model-1.jpg")','url("images/model-2.jpg")', 'url("images/model-3.jpg")', 'url("images/model-4.jpg")',

                     'url("images/model-5.jpg")', 'url("images/model-6.jpg")', 'url("images/model-7.jpg")', 'url("images/model-8.jpg")',
                    
                     'url("images/model-9.jpg")','url("images/model-10.jpg")', 'url("images/model-11.jpg")', 'url("images/model-12.jpg")']




var imageNumber = imageUrls.length


function imagePop(id){


    document.getElementById('imagePopId').style.display = 'block'
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden'

    var imageName = document.getElementById(id + '-image').style.backgroundImage

    var imageIndex = 0

    imageIndex = imageUrls.indexOf(imageName)
    
    document.getElementsByClassName('imageContain')[0].style.animation = 'he 800ms forwards'

    document.getElementsByClassName('imageContain')[0].style.backgroundImage = imageUrls[imageIndex]
}



function imageChange(id){

    var imageName = document.getElementById(id).style.backgroundImage

    var imageIndex = 0

    imageIndex = imageUrls.indexOf(imageName)

    if(imageIndex >= imageNumber - 1)
    imageIndex = 0
    else
    imageIndex++


    document.getElementById(id).style.backgroundImage = imageUrls[imageIndex]




}



function imageMoveLeft(){

    var imageName = document.getElementById('imageContainId').style.backgroundImage

    var imageIndex = 0

    imageIndex = imageUrls.indexOf(imageName)

    if(imageIndex <= 0)
    imageIndex = imageNumber - 1
    else
    imageIndex--


    document.getElementById('imageContainId').style.backgroundImage = imageUrls[imageIndex]




}



function imageMoveRight(){

    var imageName = document.getElementById('imageContainId').style.backgroundImage

    var imageIndex = 0

    imageIndex = imageUrls.indexOf(imageName)

    if(imageIndex >= imageNumber - 1)
    imageIndex = 0
    else
    imageIndex++


    document.getElementById('imageContainId').style.backgroundImage = imageUrls[imageIndex]




}




function imagePopNone(){

    document.getElementsByClassName('imagePop')[0].style.display = 'none'
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll'

}