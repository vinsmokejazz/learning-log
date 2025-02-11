
concepts:
- using currentValue like in react useState
- Clear any previously selected radio option.
function clearSelection() {
  const radios = document.querySelectorAll("input[name='quizOptions']");
  radios.forEach((radio) => (radio.checked = false));
}
- Ensure the user has selected an answer.
    const selectedAnswer = document.querySelector(
      'input[name="quizOptions"]:checked');

- addEventlistener and removeEventListener

- location.reload(); // used for reloading page

- grouping radios as by naming ....so easily identified 
- label for each radio with same name(grouped)