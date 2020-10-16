$(document).ready(() => {
    const params = new URLSearchParams(window.location.search);
    const url = window.location.pathname;
    let facultyName = params.get('faculty');
    let welcome = `پنل اساتید ${facultyName}`;
    let id = url.substring(url.lastIndexOf('/') + 1);
    document.getElementsByTagName('h2')[0].innerHTML = welcome;
    let get_url = '/boxes?id=' + id;
    let rows = document.getElementsByTagName('tr');

    $.get(get_url, (data, status) => {
        data.forEach((box) => {
            let boxId = parseInt(box.id);
            console.log(box);
            if(boxId > 9*(parseInt(id)-1) && boxId < parseInt(id)*9) {
                rows[boxId%9].getElementsByTagName('td')[0].innerHTML = box.professor;
                rows[boxId%9].getElementsByTagName('td')[1].innerHTML = box.email;
                rows[boxId%9].getElementsByTagName('td')[2].innerHTML = box.mobileNo;
            }
        })
    });
})

function modal() {
    
}

function edit() {
    const url = window.location.pathname;
    let facultyId = url.substring(url.lastIndexOf('/') + 1);
    let boxId = parseInt(event.currentTarget.id);
    let id = (facultyId - 1) * 9 + boxId;
    let modal = document.getElementsByClassName('modal')[boxId-1];
    let professor = modal.getElementsByTagName('input')[0].value;
    let email = modal.getElementsByTagName('input')[1].value;
    let mobileNo = modal.getElementsByTagName('input')[2].value;
    console.log(id);

    $.post('/' + boxId, {
        id: id,
        prof: professor,
        facultyId: facultyId,
        email: email,
        mobileNo: mobileNo
    }, (data, status) => {
        console.log(status);
        location.reload();
    })

}

function refresh() {
    location.reload();
}

function logout() {
    window.location.href = '/';
}