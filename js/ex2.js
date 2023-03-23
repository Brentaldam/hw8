// const searchButton = document.querySelector('#github-search');
// searchButton.addEventListener('click', async () => {
//   const login = document.querySelector('#github-login').value;
//   const url = `https://api.github.com/users/${login}`;

//   try {
//     const response = await fetch(url);
//     const userData = await response.json();

//     // Update profile picture
//     const profilePicture = document.querySelector('#profile-picture');
//     profilePicture.innerHTML = `<img src="${userData.avatar_url}" alt="${login}'s profile picture">`;

//     // Update user information
//     const userName = document.querySelector('#user-name');
//     userName.textContent = userData.name || 'N/A';

//     const userBlog =

async function getUserInfo() {
  const username = document.getElementById("username").value;
  const url = `https://api.github.com/users/${username}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      document.getElementById("avatar").src = data.avatar_url;
      document.getElementById("name").textContent = data.name;
      document.getElementById("blog").textContent = data.blog;
      document.getElementById("created-at").textContent =
        new Date(data.created_at).toLocaleDateString();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
}