document.getElementById('button1').addEventListener('click', loadTxt);
document.getElementById('button2').addEventListener('click', loadJSON);
document.getElementById('button3').addEventListener('click', loadAPI);


// load txt
function loadTxt() {
    fetch('data.txt')
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        console.log(data);
        document.getElementById('result').innerHTML = data;
    })
    .catch(function(error) {
        console.log(error);
    })
}

// load and print json
function loadJSON() {
    fetch('employees.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let html = '';
        data.forEach(function(emp) {
            html += `
                <ul>
                    <li>${emp.name} - ${emp.job}</li>
                </ul>
            `;
        });
        document.getElementById('result').innerHTML = html;
    })
    .catch(function(error) {
        console.log(error);
    })
};

// load api
function loadAPI() {
    fetch('https://picsum.photos/list')
    .then(function(response) {
        return response.json();
    })
    .then(function(images) {
        let html = '';
        images.forEach(function(img) {
            html += `
                <li>
                    <a href='${img.post_url}'>View photo</a>
                    ${img.author}
                </li>
            `;
        });
        document.getElementById('result').innerHTML = html;
    })
    .catch(function(error) {
        console.log(error);
    })
}