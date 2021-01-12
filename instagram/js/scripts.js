$(document).ready(function () {
  const container = $(".modal_container"),
    body = $("body"),
    gallery = $(".gallery_photos"),
    taggs = $("#taggs"),
    moreModal = $(".modal_view-more"),
    modalImg = $(".view_modal_img");

  let msgCounter = +$(".msg_counter").attr("data-counter"),
    name = $(".name"),
    nameDescr = $(".name_descr");

  let result;
  $.ajax("https://picsum.photos/v2/list?page=1&limit=100", {
    success: function (data) {
      result = data;
    },
  });

  $(".modal_container").mouseup(function (e) {
    if (!container.is(e.target)) {
      return;
    } else {
      body.css("overflow", "auto");
      container.css("display", "none");
    }
  });

  $(".more_arrow").click(function () {
    body.css("overflow", "hidden");
    container.css("display", "flex");
    moreModal.css("display", "block");
    modalImg.css("display", "none");
  });

  $(".follow").click(function () {
    $(this).text(function (_, text) {
      return text == "Follow" ? "Followed" : "Follow";
    });
  });

  $(".gallery_view").click(function () {
    $(".gallery_view").removeClass("active_view");
    $(this).toggleClass("active_view");
  });

  $(".add_photo").click(function () {
    const newWrp = $('<div class="photo_wrp"></div>');
    const newLink = $('<a data-fancybox="gallery"></a>');
    const newImage = $('<img class="gallery_item" alt="image">');
    const src = result[random(1, 100)].download_url;

    $(".photo_wrp:first-child").after(newWrp);
    newWrp.append(newLink);
    newLink.attr("href", `${src}.jpg`);
    newLink.append(newImage);
    newImage.attr("src", `${src}.jpg`);
  });

  setInterval(() => {
    msgCounterPlus();
    toggleAfter();
    $(".msg_counter").attr("data-counter", msgCounter);

    if (msgCounter === 99) {
      msgCounter = 0;
    }
  }, 5000);

  $(".msg_counter").click(function () {
    $(".msg_counter").attr("data-counter", "0");
    msgCounter = 0;
    toggleAfter();
  });

  taggs.hide();

  $("#togglePosts").click(function () {
    gallery.show();
    taggs.hide();
  });

  $("#toggleTagged").click(function () {
    gallery.hide();
    taggs.show();
  });

  $(".name").click(function () {
    let changeName = "";
    checkPrompt();

    function checkPrompt() {
      if (changeName) {
        name.text(changeName);
        nameDescr.text(changeName);
      } else {
        changeName = prompt("Введите новый ник: ", "name");
        checkPrompt();
      }
    }
  });

  function random(min, max) {
    return Math.floor(min + Math.random() * (max - min));
  }

  function toggleAfter() {
    if (msgCounter == "0") {
      $(".msg_counter").removeClass("toggleAfter");
    } else if (msgCounter > "0") {
      $(".msg_counter").addClass("toggleAfter");
    }
  }

  function msgCounterPlus() {
    msgCounter++;
    $(".animate__animated").toggleClass("animate__heartBeat");
    setTimeout(() => {
      $(".animate__animated").toggleClass("animate__heartBeat");
    }, 4000);
  }
});
