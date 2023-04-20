function getSimilarLetters() {
    let word1 = document.getElementById("word1").value;
    let word2 = document.getElementById("word2").value;
    const unchangedWord2 = word2
    let commonCount = 0;
    for (let i = 0; i < word1.length; i++) {
      let char = word1.charAt(i);
      if (word2.includes(char)) {
        commonCount++;
        word2 = word2.replace(char, '');
      }
    }
    let nonCommonCount1 = word1.length - commonCount;
    let nonCommonCount2 = word2.length;

    let resultElem = document.getElementById("result");
    resultElem.innerHTML = `First: <b>${word1}</b> (${nonCommonCount1} removed letters) <br> Second: <b>${unchangedWord2}</b> (${nonCommonCount2} removed letters)<br> The words have ${commonCount} similar letters.`;
  }