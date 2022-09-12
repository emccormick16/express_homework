const html = require("html-template-tag");

module.exports = (post) =>
  html`<!DOCTYPE html>
    <html>
      <head>
        <title>Workout Details</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div class="news-list">
          <header><img src="/logo.png" />Workout Summary</header>
          <div class="news-item">
            <p>
              <span class="news-position"></span>
              Activity Date: ${post.ActivityDate} 
              <div>Total Distance: ${post.TotalDistance} miles</div>
              <div>Calories Burnt: ${post.Calories}</div>
              <div>Active Distance: ${
                Math.round(post.VeryActiveDistance * 100) / 100
              } miles</div>
              <div>Active Minutes: ${post.VeryActiveMinutes}</div>
              </p>
          </div>
        </div>
      </body>
    </html>`;
