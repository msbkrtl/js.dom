var addBanner = function() {
  let banner = document.querySelector(".ProductNavigation-logoSlogan");
  if (document.querySelector("html").lang == "ar") {
    banner.innerHTML = "عنوان الأناقة الفاخرة";
  }
  let beforeThis = document.querySelector(".CategoryNavigation-wrapper");
  let newDiv = document.createElement("div");
  newDiv.appendChild(banner);
  let parent = document.querySelector(".Base-content");
  parent.insertBefore(newDiv, beforeThis);
  newDiv.style.cssText =
    "background-color : #2d2d2d; color: white; text-align = center; margin: auto; font-size : 5px; height: 20px; text-align : center; vertical-align: middle;";
  banner.style.cssText =
    "display: inline-block; vertical-align: middle; line-height : 20px; margin : auto;";
};
