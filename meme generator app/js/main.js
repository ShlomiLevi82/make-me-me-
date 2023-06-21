'use strict'

function onInit() {
  document.querySelector('.canvas-container').style.display = 'none'
  renderGalery()
  initCanvas()
}

function renderGalery() {
  const elGallery = document.querySelector('.gallery')

  let str = ''
  for (let i = 0; i < gImgs.length; i++) {
    str += `<div class="img-card" onClick="onSelectImg('${gImgs[i].id}')">    
            <img src="/images/meme-imgs (square)/${i + 1}.jpg" alt="img${i}" />
           </div>`
  }
  elGallery.innerHTML = str
}

function onSelectImg(picId) {
  const img = new Image()
  img.src = getImgById(picId)
  onMakeMeme()
  renderImg(img)
}

function onShowGallery() {
  document.querySelector('.gallery').style.display = 'flex'
  document.querySelector('.canvas-container').style.display = 'none'
}

function onMakeMeme() {
  document.querySelector('.gallery').style.display = 'none'
  document.querySelector('.canvas-container').style.display = 'block'
}

function renderImg(img) {
  // Draw the img on the canvas
  gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function onAddText() {
  //   const textPos = { x: 100, y: 50 }

  let text = document.querySelector('.txt-meme').value
  console.log('text', text)
  drawText(text, 100, 50)
  renderImg(img)
}

function renderCanvas() {
  //Set the backgournd color to grey
  gCtx.fillStyle = '#ede5ff'
  //Clear the canvas,  fill it with grey background
  gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
}
