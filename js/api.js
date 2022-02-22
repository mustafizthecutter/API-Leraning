function loadBtn() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(Response => Response.json())
        .then(data => console.log(data))
}
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data));
}

function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data));
}
// loadPost();
function displayUsers(data) {
    console.log(data);
    const ul = document.getElementById('users');
    for (const user of data) {
        // console.log(user);
        const li = document.createElement('li');
        li.innerText = `name ${user.name} + email ${user.email}`;
        ul.appendChild(li);
    }
}
