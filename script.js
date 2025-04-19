function generate() {
  const prefix = document.getElementById('prefix').value.toUpperCase();
  const length = parseInt(document.getElementById('length').value);
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = prefix;

  while (result.length < length) {
    const randIndex = Math.floor(Math.random() * charset.length);
    result += charset[randIndex];
  }

  const resultBox = document.getElementById('result');
  resultBox.innerText = result;

  // Auto-copy to clipboard
  navigator.clipboard.writeText(result)
    .then(() => {
      resultBox.title = "Copied!";
    })
    .catch(() => {
      resultBox.title = "Copy failed!";
    });
}