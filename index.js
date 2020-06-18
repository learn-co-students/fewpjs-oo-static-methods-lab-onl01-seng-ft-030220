class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }
  static sanitize(str) {
    return str.replace(/[^A-Za-z\-' ]/g, '')
  }
  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const words = str.split(' ')
    return words.map((word,i) => {
      if (!exceptions.includes(word) || i===0) {
        return this.capitalize(word)
      } else {
        return word
      }
    }).join(' ')
  }
}