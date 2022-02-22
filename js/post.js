function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data));
}
loadPost();
function displayPost(post) {

    const head = document.getElementById('head');
    for (const user of post) {
        const div = document.createElement('div');
        div.classList.add('create')
        div.innerHTML = `
        <h3>${user.title}</h3 >
            <p>${user.body}</p > `
        head.appendChild(div);
        console.log(post);
    }
}

function addAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'my name is mustafiz',
            id: 1,
            body: 'chiku'
        }),

        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(res => res.json())
        .then(data => console.log(data));
}