document.getElementById('button1').addEventListener('click', loadTxt);
document.getElementById('button2').addEventListener('click', loadJSON);
document.getElementById('button3').addEventListener('click', loadAPI);


// load txt
function loadTxt() {
    fetch('data.txt')
    .then( response => response.text() )
    .then(data => document.getElementById('result').innerHTML = data)
    .catch(error => console.log(error))
}

// load and print json
function loadJSON() {
    fetch('employees.json')
    .then(response => response.json())
    .then(data => {
        let html = '';
        data.forEach(emp => {
            html += `
                <ul>
                    <li>${emp.name} - ${emp.job}</li>
                </ul>
            `;
        });
        document.getElementById('result').innerHTML = html;
    })
    .catch(error => console.log(error))
};

// load api
function loadAPI() {
    fetch('https://picsum.photos/list')
    .then(response => response.json())
    .then(images => {
        let html = '';
        images.forEach(img => {
            html += `
                <li>
                    <a href='${img.post_url}'>View photo</a>
                    ${img.author}
                </li>
            `;
        });
        document.getElementById('result').innerHTML = html;
    })
    .catch(error => console.log(error))
}