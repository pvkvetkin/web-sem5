// window.onload = function () {
//     document.body.classList.add('loaded_hiding');
//     window.setTimeout(function () {
//         document.body.classList.add('loaded');
//         document.body.classList.remove('loaded_hiding');
//     }, 500);
// }

function loadJSON(data) {
    let from;
    let to;
    if (sessionStorage.getItem('flag') == null) {
        sessionStorage.setItem('flag', 'true');
        from = 0;
        to = 3;
    } else {
        sessionStorage.removeItem('flag');
        from = 7;
        to = 10;
    }
    let responses = '';
    for (let item = from; item < to; item++) {
        responses += '<p">ID: ' + data[item].id + '</p>';
        responses += '<p">Username: ' + data[item].username + '</p>';
        responses += '<p">Email: : ' + data[item].email + '</p>';
    }
    let users = document.getElementById('users');
    users.innerHTML = responses;
}

window.addEventListener('load', function (event) {
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => loadJSON(data))
            .catch((e) => {
                let out = '';
                out += '<p> ⚠ Что-то пошло не так</p>';
                $('#loadName').html(out)
            });
        document.getElementById('preloader').remove();
    }, 2000)
});
