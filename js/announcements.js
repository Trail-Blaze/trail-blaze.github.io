getHTML(
   "https://raw.githubusercontent.com/Trail-Blaze/marketplace/main/featuredContent/announcements/partials/announcement.html",
   "ann_container"
);
setTimeout(() => {
   ann_container.style.opacity = 0;
   try {
      if (announcement_type.innerText == "DEFAULT") {
         getHTML(
            "https://raw.githubusercontent.com/Trail-Blaze/marketplace/main/featuredContent/announcements/partials/placeholder.html",
            "ann_container"
         );
      }
   } catch (error) {
      getHTML(
         "https://raw.githubusercontent.com/Trail-Blaze/marketplace/main/featuredContent/announcements/partials/announcement.html",
         "ann_container"
      );
   }
}, 425);
ann_container.style.opacity = 1;
