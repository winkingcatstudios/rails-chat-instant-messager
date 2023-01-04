// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
import * as jquery from "jquery";
import "semantic-ui";

window.scroll_bottom = function () {
  if ($("#messages").length > 0) {
    $("#messages").scrollTop($("#messages")[0].scrollHeight);
  }
};

var textfield = document.getElementById("message_body");

textfield.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.target.value = "";
  }
});

$(document).on("turbo:load", function () {
  $(".ui.dropdown").dropdown();
 
  scroll_bottom();
});
import "channels";
