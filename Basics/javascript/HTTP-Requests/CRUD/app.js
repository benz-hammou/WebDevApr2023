const InputUsername = document.getElementById("username");
const TextAreaComment = document.getElementById("comment");
const CommentsList = document.getElementById("commentsList");
const Data_ID = document.getElementById('data_id');

function AddComment() {
  const obj = {
    username: InputUsername.value,
    comment: TextAreaComment.value,
  };
  console.log(obj);
  fetch("http://localhost:3000/database", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())

    .then((data) => {
      console.log(data, "saved");
    });
}

// Recieves all comments (GET request)
fetch("http://localhost:3000/database")
.then((res) => res.json())
.then((allcomments) => {
    allcomments.map((single_comment) => {
        console.log(single_comment); // single object from the array
        CommentsList.innerHTML += `<div class="border rounded mb-2 d-flex justify-content-between" id="data_id">
        <li class="list-group-item border-0"><strong>${single_comment.username}:</strong> ${single_comment.comment}</li>
        <button type="button" class="btn btn-outline-danger border-0">X</button>
        </div>`;
    });
    console.log([allcomments]);
});

function RemoveComment() {
    const ID = Data_ID.value
    fetch(`http://localhost:3000/database/${ID}`,{
        method:'DELETE'
    })
    .then(()=>{
        console.log('data is deleted')
    })
}


CommentsList.addEventListener("click", RemoveComment)