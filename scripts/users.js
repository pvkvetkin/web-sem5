function loadJSON(data) {
    let item;
    if (sessionStorage.getItem('flag') == null || sessionStorage.getItem('flag') == 10) {
        sessionStorage.setItem('flag', 0);
        // item = 1
    } 
    item = JSON.parse(sessionStorage.getItem('flag')) + 1
    sessionStorage.setItem('flag', item);
    console.log(item)
    let responses = '';
    responses += '<p">ID: ' + data[item].id + '</p>';
    responses += '<p">Username: ' + data[item].username + '</p>';
    responses += '<p">Email: : ' + data[item].email + '</p>';
    // for (let item = from; item < to; item++) {
    //     responses += '<p">ID: ' + data[item].id + '</p>';
    //     responses += '<p">Username: ' + data[item].username + '</p>';
    //     responses += '<p">Email: : ' + data[item].email + '</p>';
    // }
    let users = document.getElementById('users');
    users.innerHTML = responses;
}

window.addEventListener('load', function (event) {
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
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
