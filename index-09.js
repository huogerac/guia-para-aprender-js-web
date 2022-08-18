
function getRepoDetails(username, repository) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/repos/${username}/${repository}`)
      .then((response) => response.json())
      .then((response) => {
        resolve(response)
      })
    .catch((error) => {
      reject("Error: " + error)
    })
  })
}

function getAvatarAndStarsFrom(username, repository, callback) {
  getRepoDetails(username, repository).then((response) => {
    callback({
      "stars": response.stargazers_count,
      "avatar": response.owner.avatar_url
    })
  })
}

const $img = document.querySelector(".container img")
const $stars = document.querySelector(".container p")

getAvatarAndStarsFrom('huogerac', 'django_cursos',  (data) => {
  $img.src = data.avatar
  $stars.textContent = '⭐'.repeat(data.stars)
  console.log(data)
})
