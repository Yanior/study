// Variables
const tweetList = document.getElementById('tweet-list');

eventListeners();

// Event Listeners
function eventListeners() {
    document.querySelector('#form').addEventListener('submit', newTweet);

    // Remove tweet from the list
    tweetList.addEventListener('click', removeTweet);

    // Document
    document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}

// Functions
function newTweet(e) {
    e.preventDefault();

    // Read the textarea value
    const tweet = document.getElementById('tweet').value;

    // Create remove btn
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    // Create li element
    const li = document.createElement('li');
    li.textContent = tweet;
    tweetList.appendChild(li);

    // Add the remove btn to each tweet
    li.appendChild(removeBtn);

    // Add to the list
    tweetList.appendChild(li);

    // Add tweet to LocalStorage
    addTweetLocalStorage(tweet);

    // Print alert
    alert('Tweet added!');

    // Clear form
    this.reset(document.getElementById('tweet').value);
}

// Removes the tweets from the DOM

function removeTweet(e) {
    if (e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    }

    // Remove from Storage
    removeTweetLocalStorage(e.target.parentElement.textContent);
};

// Adds the tweet to localstorage

function addTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();

    // Add tweet in array
    tweets.push(tweet);

    // Convert tweet array into string
    localStorage.setItem('tweets', JSON.stringify(tweets))
};

function getTweetsFromStorage() {
    let tweets;
    const tweetLS = localStorage.getItem('tweets')
    // Get the values, if null is returned then we create an empty array

    if (tweetLS == null) {
        tweets = [];
    } else {
        tweets = JSON.parse(tweetLS);
    }
    return tweets;
}


// Prints Local Storage Tweets on Load
function localStorageOnLoad() {
    let tweets = getTweetsFromStorage();

    // Loop throught storage and the print the values

    tweets.forEach(function (tweet) {
        // Create remove btn
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X';

        // Create li element
        const li = document.createElement('li');
        li.textContent = tweet;
        tweetList.appendChild(li);

        // Add the remove btn to each tweet
        li.appendChild(removeBtn);

        // Add to the list
        tweetList.appendChild(li);
    });
}


// Remove tweet from LocalStorage
function removeTweetLocalStorage(tweet) {

    // get tweets from storage
    let tweets = getTweetsFromStorage();

    // Remove the X from the tweet
    const tweetDelete = tweet.substring(0, tweet.length -1); //прочитать про субстринг

    // Loop throught the tweets and remove the tweet that's equal
    tweets.forEach(function(tweetLS, index){
        if(tweetDelete === tweetLS){
            tweets.splice(index, 1);
        }
    });

    // safe the data
    localStorage.setItem('tweets', JSON.stringify(tweets));
}