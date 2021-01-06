$(document).ready(function(){
  
  $("searchPresent").submit(function (e){
    e.preventDefault();
    let present = $("#search").val();
    let url = `https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=${present}&country=SG&category=aps`;
    
    let presents = new Present(present);
  });

  
  displayProfile();

  $("#frm-user").submit(function (e) {
    e.preventDefault();
    let firstName = $('#name').val();
    let lastName = $('#last-name').val();
    let birth = $('#dates').val();

    let users = new User(firstName, lastName, birth);

    //empty list
    let userList = [];

    //take from local storage
    if (localStorage.getItem('userList')){
      userList = JSON.parse(localStorage.getItem('userList'));
    }

    //add object into list
    userList.push(users);

    //add object to local storage
    localStorage.setItem('userList', JSON.stringify(userList));

    displayProfile();
  });
});
function User(firstName, lastName, birth){
  this.first = firstName;
  this.last = lastName;
  this.bDate = birth;
}

function Present(present){
  this.box = present;
}

//display inputs
function displayProfile(){
  let userInfo = "";

  //check if there is local storage first
  if (localStorage.getItem('userList')) {
    let userList = JSON.parse(localStorage.getItem('userList'));
    
    if (userList.length){
    
      for(let i = 0; i<userList.length; i++){
      userInfo += `<tr>
      <td>${userList[i].first}</td>
      <td>${userList[i].last}</td>
      <td>${userList[i].bDate}</td>
      </tr>`;
      }
      
      $('#user-info').html(userInfo);
    } else{
      $('user-info').html('None');
    }
  }
}