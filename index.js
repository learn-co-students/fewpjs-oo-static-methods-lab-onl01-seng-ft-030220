class Formatter {
  //add static methods here
  static capitalize(word) {
    return word[0].toUpperCase() + word.slice(1)
  }

  static sanitize(phrase) {
    return phrase.replace(/[^A-Za-z\-' ]/g, '')
  }

  static titleize(title) {
    const ignore = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const words = title.split(' ')
    return words.map((word, i) => {
      if (!ignore.includes(word) || i === 0) {
        return this.capitalize(word)
      } else {
        return word
      }
    }).join(' ')
    
  }
}