


var adminButton = document.querySelector(".admin-settings-button");

adminButton.addEventListener('click', function() {
  toggleClass(adminButton.parentNode, '.menu-show')
});

function toggleClass(element, className) {
  var currentClasses = element.className;

  if (currentClasses.indexOf(className) >= 0) {
    element.className = currentClasses.replace(className, '').trim();
  } else {
    element.className += ' ' + className;
  };
};




// adminButton.onclick = toggleClass(, ".admin-settings-list");




//
// stuff from online
// function toggleContent() {
//   var toggleID = document.querySelector("admin-settings-list");
//   toggleID.style.display = "block" ? toggleID.style.display = toggleID.style.display =
//   "block";
// };
