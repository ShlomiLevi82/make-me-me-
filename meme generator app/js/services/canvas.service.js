'use strict'

let gElCanvas
let gCtx

function initCanvas() {
  gElCanvas = document.getElementById('canvas')
  gCtx = gElCanvas.getContext('2d')
  //   resizeCanvas()
}

function downloadImg(elLink) {
  const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
  elLink.href = imgContent
}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvascontainer')
  gElCanvas.width = elContainer.offsetWidth
  gElCanvas.height = elContainer.offsetHeight
}
