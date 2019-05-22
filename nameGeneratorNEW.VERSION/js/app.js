document.querySelector('#generate-names').addEventListener('submit', loadNames);


// Execute the function to query the API
function loadNames(e) {
    e.preventDefault();


    // Read the values from the form and create the var
    const origin = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;

    // Build the URL
    let url = 'https://uinames.com/api/?';
    // Read the origin and append to the url
    if(origin !== '') {
        url += `region=${origin}&`
    }
    
     // Read the genre and append to the url
     if(genre !== '') {
        url += `genre=${genre}&`
    }

    // Read the amount and append to the url
    if(amount !== '') {
        url += `amount=${amount}&`
    }

    // Ajax call
    getNames(url)
        .then(names => {
            let namesResponse = names.names;
            
            let html = '<h2>Generated Names</h2>';
            html += '<ul class="list">'
            namesResponse.forEach(name => {
                html += `
                    <li>${name.name}</li>
                `;
            });
            html += '</ul>'
            document.getElementById('result').innerHTML = html;
        })
        .catch(error => console.log(error));
}

async function getNames(url) {
    const response = await fetch(url);
    const names = await response.json();

    return {
        names
    }
}

//     const xhr = new XMLHttpRequest();

//     // open the connection
//     xhr.open('GET', url, true);

//     // Execute the function
//     xhr.onload = function () {
//         if(this.status === 200) {
//             const names = JSON.parse( this.responseText );
            
//             // insert into html
//             let html = '<h2>Generated Names</h2>';
//             html += '<ul class="list">'
//             names.forEach(function(name){
//                 html += `
//                     <li>${name.name}</li>
//                 `;
//             });
//             html += '</ul>'

//             document.querySelector('#result').innerHTML = html;
//         }
//     }

//     // send request
//     xhr.send();
// }