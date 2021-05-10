const fs = require('fs')
const path = require('path')

export default function handler(req, res) {

    const dirImages = "/images/avito/"
    const dir = path.resolve() + path.normalize("/public" + dirImages)
    let i = []
    function parse(str) {
        let template = /(\d*)_(\d*)rub_(\d*)/
        let result = str.match(template)
        result = {
            href: dirImages + str,
            itemId: Number(result[1]),
            price: result[2],
            imgId: result[3]
        }
        return result
    }
    function parsingimages(strs) {
        return strs.map(item => parse(item))
    }

    function compan(arr) {
        let newArr = []
        let prevItemId = 0
        arr.forEach((item) => {
          if (prevItemId == item.itemId) {
            let found = newArr.findIndex(el => {
              return el.itemId == prevItemId
            })
            newArr[found].src.push(item.href)
            
          } else {
            newArr.push({
                itemId: item.itemId,
                item: item,
                src: [
                  item.href
                ]
              })
          }
          
          prevItemId = item.itemId
        })
        return newArr
      }

    fs.readdir(dir, (err, entries) => {
        
        i = parsingimages(entries).sort((a, b) => {
            return  b.itemId - a.itemId
        })
        i = compan(i)
        i = i.find(item => {
            if (item.itemId == req.query.itemId) {
                return item
            }
        })

        res.status(200).json(
            {...i}
        )

        })



}
