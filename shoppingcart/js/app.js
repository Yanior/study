// Variables 
const courses = document.querySelector('#courses-list'),
    shoppingCartContent = document.querySelector('#cart-content tbody'),
    clearCartBtn = document.querySelector('#clear-cart');


// Listeners
loadEventListener();

function loadEventListener() {
    // When id new course added
    courses.addEventListener('click', buyCourse);

    // When is remove btn is clicked
    shoppingCartContent.addEventListener('click', removeCourse);

    // Clear full cart
    clearCartBtn.addEventListener('click', cleaFullCart);

    // document ready
    document.addEventListener('DOMContentLoaded', getFromLocalStorage);
}


// Functions
function buyCourse(e) {
    e.preventDefault();
    // Use delegation to find the course that was added
    if (e.target.classList.contains('add-to-cart')) {
        // Read the course values
        const course = e.target.parentElement.parentElement;

        // read values
        getCourseInfo(course);
    }
}

// Read the html info of the selected course 
function getCourseInfo(course) {
    // create an Object whith course data
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    }
    // Insert into the cart
    addIntoCart(courseInfo);
}

// Display the selected course into the shopping cart
function addIntoCart(course) {
    // create a <tr>
    const row = document.createElement('tr');

    // build the template 
    row.innerHTML = `
        <tr>
            <td>
                <img src='${course.image}' width=100>
            </td>
            <td>${course.title}</td>
            <td>${course.price}</td>
            <td>
                <a href='#' class='remove' data-id='${course.id}'>X</a>
            </td>
        </tr>   
    `;
    // Add into the shopping cart
    shoppingCartContent.appendChild(row);

    // Add course into Storage
    saveIntoStorage(course);
}

// Add the courses into the local storage
function saveIntoStorage(course) {
    let courses = getCoursesFromStorage();

    // add course into array 
    courses.push(course);

    // since storage save only string
    localStorage.setItem('courses', JSON.stringify(courses));
}

// Get the contents from storage
function getCoursesFromStorage() {
    let courses;

    // if something exist on storage then we get the value, otherwise create an empty array
    if (localStorage.getItem('courses') === null) {
        courses = [];
    } else {
        courses = JSON.parse(localStorage.getItem('courses'));
    }
    return courses;
}

// remove course from the DOM
function removeCourse(e) {
    let course, courseId;

    // remove course from the DOM
    if (e.target.classList.contains('remove')) {
        e.target.parentElement.parentElement.remove();
        course = e.target.parentElement.parentElement;
        courseId = course.querySelector('a').getAttribute('data-id');
    }
    // remove course from the local storage
    console.log(courseId)
    removeCourseLocalStorage(courseId);
}

// remove from local storage
function removeCourseLocalStorage(id) {
    // get the localstorage data
    let coursesLS = getCoursesFromStorage();

    // loop trought the array and find the index to remove
    coursesLS.forEach(function(courseLS, index){
        if(courseLS.id === id){
            coursesLS.splice(index, 1);
        }
    });
}

// remove all courses from the DOM 
function cleaFullCart() {

    while (shoppingCartContent.firstChild) {
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);
    }

    // clear from localstorage
    clearLocalStorage();
}
// Clear the whole local storage

function clearLocalStorage() {
    localStorage.clear();
}

// Load courses from local storage when document is ready and print courses into cart
function getFromLocalStorage() {
    let coursesLS = getCoursesFromStorage();

    // LOOP the courses and print into the cart
    coursesLS.forEach(function (course) {
        // create the <tr>
        const row = document.createElement('tr');

        // print the content
        row.innerHTML = `
                <tr>
                    <td>
                        <img src='${course.image}' width=100>
                    </td>
                    <td>${course.title}</td>
                    <td>${course.price}</td>
                    <td>
                        <a href='#' class='remove' data-id='${course.id}'>X</a>
                    </td>
                </tr>   
            `;
        shoppingCartContent.appendChild(row);
    });
}