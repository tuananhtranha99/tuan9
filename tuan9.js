$(document).ready(function () {
  var buttons = document.querySelectorAll(".portfolio__menu1");
  var sections = document.querySelectorAll(".portfolio__item1")
  buttons.forEach(item => {
    item.addEventListener('click', () => {
      buttons.forEach(item => {
        item.classList.remove('whitebg');
      })
      item.classList.add('whitebg');
      var values = item.textContent;
      sections.forEach(section => {
        section.style.display = "none";
        if (section.getAttribute("data-id") === values || values === "all") {
          section.style.display = "block";
        }
      })
    })
  })


  var menuButton = $('.header__left ul li.menuicon');
  var menu = $('.menu');
  var trangthai = "bamlan1";
  menuButton.click(function () {
    if (trangthai === "bamlan1") {
      for (i = 0; i < menu.length; i++) {
        menuButton.append(menu[i]);
        menu[i].style.display = "block";
        trangthai = "bamlan2";

      }
    }
    else {
      for (i = 0; i < menu.length; i++) {
        menu[i].style.display = "none"
        trangthai = "bamlan1";
      }
    }
  })




  $("#btf").click(function () {
    if ($("input[placeholder='Your Name*']").val() === '') {

      $('#Errorname').text("Bạn chưa nhập tên!");
    }
    else if (/[a-zA-Z]/g.test($("input[placeholder='Your Name*']").val()) === false) {

      $('#Errorname').text("Tên không được chứa số và kí tự đặc biệt")
    }
    else {

      $('#Errorname').html("&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
    }
    if ($("input[placeholder='Your Email*']").val() === '') {

      $('#Erroremail').text("Bạn chưa nhập email!")
    }
    else if (/[a-zA-Z0-9]+@[a-zA-Z]+\.com/g.test($("input[placeholder='Your Email*']").val()) === false) {

      $('#Erroremail').text("Email phải có dạng abc@xyz.com")
    }
    else {

      $('#Erroremail').html("&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
    }
    if ($("textarea[placeholder='Your Message*']").val() === '') {
      $('#Emptymessage').text("Bạn chưa nhập tin nhắn!");
    }
    else {
      $('#Emptymessage').html("&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
    }



  });

});