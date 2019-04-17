document.getElementById('button').addEventListener('click', loadData);



function loadData() {
    // Create th new XMLHTTPRequest Object
    const xhr = new XMLHttpRequest();

    // Open the connection
    xhr.open('GET', 'data.txt', true);

    // Execution of the ajax call
    xhr.onload = function() {
        // codes
        // 200: correct
        // 403: forbidden
        // 404: Not found
        if(this.status === 200) {
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }
    /*
    Другой вариант
    xhr.onreadystatechange = function() {
        console.log('Ready state', xhr.readyState)
        // Ready states
        // 0 - unsent
        // 1 - opened
        // 2 - received
        // 3 - loading
        // 4 - done
        if(this.status === 200 && this.readyState === 4) {
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }
    */
    // send the request
    xhr.send();
}