$(document).ready(function(){
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=presents&country=SG&category=aps",
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "65f6d740bamshfaca19740eccd07p100b65jsn644dd0e98dfa",
        "x-rapidapi-host": "amazon-product-reviews-keywords.p.rapidapi.com"
      }
    };
  
    $.ajax(settings).done(function (response) {
      console.log(response);
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
  
  //display inputs
  function displayProfile(){
    let userInfo = "";
  
    //check if there is local storage first
    if (localStorage.getItem('userList')) {
      let userList = JSON.parse(localStorage.getItem('userList'));
      
      if (userList.length){
      
        for(let i = 0; i<userList.length; i++){
        userInfo += `<tr>
        <td>${users[i].first}</td>
        <td>${users[i].last}</td>
        <td>${users[i].bDate}</td>
        </tr>`;
        }
        
        $('#user-info').html(userInfo);
      } else{
        $('user-info').html('None');
      }
    }
  }