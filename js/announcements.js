getHTML(
   "https://raw.githubusercontent.com/Trail-Blaze/marketplace/main/featuredContent/announcements/partials/announcement.html",
   "ann_container"
);

setTimeout(() => {
   try {
      if (announcement_type.innerText == "DEFAULT") {
         ann_container.style.opacity = 0.85;
         getHTML(
            "https://raw.githubusercontent.com/Trail-Blaze/marketplace/main/featuredContent/announcements/partials/placeholder.html",
            "ann_container"
         );
      }
   } catch (error) {
      console.log(error);
      ann_container.style.opacity = 0.85;
      getHTML(
         "https://raw.githubusercontent.com/Trail-Blaze/marketplace/main/featuredContent/announcements/partials/announcement.html",
         "ann_container"
      );
   }
}, 425);

setTimeout(() => {
   ann_container.style.opacity = 1;
}, 825);
