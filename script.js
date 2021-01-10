$(document).ready(function(){
  
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

var settings = {
    "url": "https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=gift&country=SG&category=aps",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "x-rapidapi-key": "65f6d740bamshfaca19740eccd07p100b65jsn644dd0e98dfa",
      "x-rapidapi-host": "amazon-product-reviews-keywords.p.rapidapi.com"
    },
  };

  $.ajax(settings).done(function (response) {
    $("#title1").html(`${response.products[2].title}`);
    $("#rating1").html(`${response.products[2].reviews.rating}`);

    $("#title2").html(`${response.products[10].title}`);
    $("#rating2").html(`${response.products[10].reviews.rating}`);
    
    $("#title3").html(`${response.products[3].title}`);
    $("#rating3").html(`${response.products[3].reviews.rating}`);

    $("#title4").html(`${response.products[1].title}`);
    $("#rating4").html(`${response.products[1].reviews.rating}`);
    
    $("#title5").html(`${response.products[0].title}`);
    $("#rating5").html(`${response.products[0].reviews.rating}`);
  });

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