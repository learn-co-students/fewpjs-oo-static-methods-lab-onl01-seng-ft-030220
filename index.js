class Formatter {
  //add static methods here

  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }


  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(str) {
    let arr = str.split(" ");
    return arr.map((w) => {
      if (w == arr[0] && w == "a") {
        return w[0].toUpperCase();
      }
      if (!['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'].includes(w)) {
        return w[0].toUpperCase() + w.slice(1);
      } else {
        return w;
      }
    }).join(" ");
  };
}
