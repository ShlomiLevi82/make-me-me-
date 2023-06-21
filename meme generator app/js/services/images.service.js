'use strict'

let gImgs = []
let gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I sometimes eat Falafel',
      size: 20,
      color: 'red',
    },
  ],
}
let gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }

createImageList()

function createImageList() {
  for (let i = 1; i < 19; i++) {
    let img = {
      id: makeId(),
      url: `/images/meme-imgs (square)/${i}.jpg`,
    }
    gImgs.push(img)
  }
  console.log('gImgs', gImgs)
}

function getImgById(imgId) {
  const img = gImgs.find((img) => imgId === img.id)
  console.log('imgId', imgId)
  return img.url
}
