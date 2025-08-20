// Dark/light theme toggle
const toggleBtn = document.querySelector('[data-theme-toggle]');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
let theme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', theme);

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
}

// Load posts dynamically
async function loadPosts(limit = null) {
  try {
    const response = await fetch('posts/posts.json');
    const posts = await response.json();

    // Sort by date
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Home: only show 2 latest
    const homeContainer = document.getElementById('recent-posts');
    if (homeContainer) {
      posts.slice(0, 2).forEach(post => {
        homeContainer.innerHTML += `
          <article>
            <h3><a href="../${post.url}">${post.icon} ${post.title}</a></h3>
            <p class="muted">${new Date(post.date).toLocaleDateString()}</p>
            <p>${post.description}</p>
          </article>
        `;
      });
    }

    // Posts index: show all
    const postsContainer = document.getElementById('all-posts');
    if (postsContainer) {
      posts.forEach(post => {
        postsContainer.innerHTML += `
          <div class="post-card">
            <h3><a href="../${post.url}">${post.icon} ${post.title}</a></h3>
            <div class="meta">${new Date(post.date).toLocaleDateString()}</div>
            <p>${post.description}</p>
          </div>
        `;
      });
    }
  } catch (err) {
    console.error("Error loading posts:", err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadPosts();
});
