document.querySelector('#btn').addEventListener('click', () => {
    let comment = document.querySelector('#comment'); 
    let commentChecked = comment.value.replace(/xxx|viagra/ig, "***");
    let newComment = document.createElement("div");
    newComment.innerHTML = `${commentChecked} <br><br>`;
    document.querySelector('.comments').append(newComment);

    if (comment.value == "") {
        newComment.style.display = "none";
    }
    else {
        newComment.style.display = "block";
    }

    comment.value = "";
    })

