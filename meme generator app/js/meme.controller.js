'use strict'

function renderMeme() {}

function drawText(text, x, y) {
  gCtx.lineWidth = 2
  gCtx.strokeStyle = document.querySelector('.clr-strok')
  gCtx.fillStyle = document.querySelector('.clr-fill')
  gCtx.font = '40px Arial'
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'middle'

  gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
  gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}
