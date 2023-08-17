/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function(){

  function clearTweetsContainer() {
    $("#tweets-container").empty();
  }

  //By default, error messages are hidden.
  $("#error-message-empty").hide();
  $("#error-message-tooLong").hide();

//Creates a new tweet element (article) and feeds it information from the tweet data//
const createTweetElement = function (tweetData) {
  const $tweet = $(`
  <article class="tweet">
        <header class="tweet-header">
          <div class="user-profile">
            <img class="user-icon" src="${tweetData.user.avatars}"></img> 
            <h4 class="user-name">${tweetData.user.name}</h4>
          </div>
          <div>
            <h4 class="user-handle">${tweetData.user.handle}</h4>
          </div>
        </header>
        <div class="tweet-text">
          ${tweetData.content.text}
        </div>
        <footer class="tweet-footer">
          <span class="tweet-date">${timeago.format(tweetData.created_at)}</span>
          <div class="tweet-response">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>
      </article>`);
  return $tweet;
}

 //Ajax Get request to pull tweets form the server and feed it to the render function//
 function loadTweets() {
  $.get("/tweets", function(data) {
    // Call the renderTweets function with fetched tweet data
    renderTweets(data);
  
  }).fail(function(xhr, status, error) {
    // Handle the error case
    console.error("Error fetching tweets:", error);
  });
}
// Call loadTweets when the page loads to fetch and render tweets
loadTweets();

const renderTweets = function(tweets) {
  clearTweetsContainer();
  for (const tweet of tweets) {
    const createdTweet = createTweetElement(tweet);
    const tweetContainer = $("#tweets-container")
    
    tweetContainer.append(createdTweet)
  }
};


$("#new-tweet-form").submit(function(event) {
  event.preventDefault();
    
  const maxChar = 140;
  const $tweetText = $(this).find("#tweet-text");
  const inputLength = $tweetText.val().trim().length;

  const $errorEmpty = $("#error-message-empty");
  const $errorTooLong = $("#error-message-tooLong");

  $errorEmpty.slideUp("slow");
  $errorTooLong.slideUp("slow");

  if (!inputLength) {
    $errorEmpty.slideDown("slow");
    $errorTooLong.hide();
  } else if (inputLength > maxChar) {
    $errorTooLong.slideDown("slow");
    $errorEmpty.hide();
  } else {
    const newTweet = $(this).serialize();
    $.post("/tweets/", newTweet, () => {
      $tweetText.val("");
      $(this).find(".counter").text(maxChar);
      loadTweets();
    }).fail((xhr, status, error) => {
      console.error("Error:", error);
      // Handle error case
    });
  }
});
});