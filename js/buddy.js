const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data));
}
loadBuddies();
const displayBuddies = (data) => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies')
    console.log(buddies);
    for (const buddy of buddies) {
        const p = document.createElement('p');
        console.log(buddy.name.first, buddy.name.last);
        p.innerText = `First Name: ${buddy.name.first} Last Name: ${buddy.name.last}`;
        buddiesDiv.appendChild(p);
        // console.log(buddy.email);
    }
}