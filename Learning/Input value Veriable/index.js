alert('Witaj w aplikacji Parcel');


function addDivFun() {
    const div = document.createElement('div');
    
    let comment = document.getElementById('input-text').value;

    div.className = 'comment-div';
    div.innerHTML = comment;

    console.log(comment);
    document.getElementById('all-comments').appendChild(div);
}

