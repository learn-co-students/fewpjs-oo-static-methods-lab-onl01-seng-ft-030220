class Formatter {
static capitalize(str)
return str.charAT(0).toUpperCase() + str.slice(1)
}

static sanitize(str){
  return str.replace(/[^A-Za-z0-9 '-]/g, ' ')
}

static titleize(sentence){
  let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
  let result = []
  let arrOfWords = sentence.split(" ")
  for (let i === 0 ){
    if (i === 0, i < arrOfWords.length; i++){
      result.push( this.capitalize(arrOfWords[i]))
    else{
      if (except.includes(arrOfWords[i])){
        result.push(arrOfWords[i])
      else{
        result.push(this.capitalize(arrOfWords[i]))
      }
     }
    }
    return result.join
   }
  }
}