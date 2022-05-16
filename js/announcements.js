getHTML(
   "https://raw.githubusercontent.com/Trail-Blaze/marketplace/main/featuredContent/announcements/partials/announcement.html",
   "ann_container"
);
ann_container.style.opacity = 0;
setTimeout(() => {
   try {
      if (announcement_type.innerText == "DEFAULT") {
         getHTML(
            "https://raw.githubusercontent.com/Trail-Blaze/marketplace/main/featuredContent/announcements/partials/placeholder.html",
            "ann_container"
         );
         ann_container.style.opacity = 1;
      }
   } catch (error) {
      getHTML(
         "https://raw.githubusercontent.com/Trail-Blaze/marketplace/main/featuredContent/announcements/partials/announcement.html",
         "ann_container"
      );
   }
}, 425);
