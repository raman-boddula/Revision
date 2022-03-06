function substrings(str) {
  for (let i = 0; i < str.length; i++) {
    let sub = "";
    for (let j = i; j < str.length; j++) {
      sub += str[j];
      console.log(sub);
    }
  }
}
substrings("raman");

