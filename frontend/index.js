var user=[
    {
        "name":"John Doe",
        "gender":"male",
        "image":"john.png"
    },
    {
        "name":"Jane Doe",
        "gender":"female",
        "image":"jane.png"
    }
]
var curid=0;
function toggleuser(){
    curid=(curid+1)%2;
    var userName = document.getElementById("user-name");
    var userGender = document.getElementById("user-gender");
    var userImage = document.getElementById("user-image");
    userName.innerHTML=user[curid].name;
    userGender.innerHTML=user[curid].gender;
    userImage.src=user[curid].image;
}