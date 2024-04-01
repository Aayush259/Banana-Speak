const BaseURL = "https://api.funtranslations.com/translate/minion.json?text=";
const TranslateBtn = document.getElementById('translate-btn');

/*
    This function displays the result which is passed as an argument in the output container.
*/
const DisplayResult = (updateText) => {

    // Getting output container.
    const OutputContainer = document.getElementById('output-container');

    // Updating the result in output container.
    OutputContainer.innerText = updateText;

}

TranslateBtn.addEventListener('click', () => {

    // Getting text area.
    const TextArea = document.getElementById('text-area');

    // Remove focus from translate button.
    TranslateBtn.blur();

    const InputText = TextArea.value;

    // If the textarea is empty then do nothing.
    if (InputText === ``) {
        // Do Nothing.
        return;
    }

    // Creating URL to fetch API.
    const URL = BaseURL + InputText;

    // Fetching API and displaying result on the screen.
    fetch(URL)
        .then(response => { return response.json() })
        .then(json => {DisplayResult(json.contents['translated'])})
        .catch(err => {DisplayResult('Something went wrong, Try again later...')});
})