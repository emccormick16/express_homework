const html = require("html-template-tag");

module.exports = (posts) => html`<!DOCTYPE html>
  <html>
    <head>
      <title>Workout Summary</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <div class="news-list">
        <header><img src="/logo.png" /></header>
        <h1>Workout Summary</h1>
        ${posts.map(
          (post) => html` <div class="news-item">
            <p>
              <span class="news-position">${post.Id}. ▲</span>
              <a href="/${post.Id}">${post.ActivityDate}</a>
              <small>Total Steps: ${post.TotalSteps}</small>
            </p>
            <small class="news-info">
              Total Distance:${Math.round(post.TotalDistance * 100) / 100} miles
            </small>
          </div>`
        )}
      </div>
    </body>
  </html>`;
