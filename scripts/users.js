function loadJSON(data) {
    let responses = '';
    responses += '<p">ID: ' + data.id + '</p>';
    responses += '<p">Username: ' + data.username + '</p>';
    responses += '<p">Email: : ' + data.email + '</p>';
    let users = document.getElementById('users');
    users.innerHTML = responses;
}

window.addEventListener('load', function (event) {
    setTimeout(() => {
        let item = Math.floor(Math.random() * 9);
        fetch('https://jsonplaceholder.typicode.com/users/' + item)
            .then(res => res.json())
            .then(data => loadJSON(data))
            .catch((e) => {
                let users = '<p> ⚠ Что-то пошло не так</p>';
            })
            .finally(() => {
                document.getElementById('preloader').remove();
            });
        // document.getElementById('preloader').remove();
    }, 2000)
});
