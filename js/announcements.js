getHTML(
   "https://raw.githubusercontent.com/Trail-Blaze/marketplace/main/featuredContent/announcements/partials/announcement.html",
   "ann_container"
);

try {
   if (announcement_type.innerText == "DEFAULT") {
      ann_container.style.opacity = 0;
      getHTML(
         "https://raw.githubusercontent.com/Trail-Blaze/marketplace/main/featuredContent/announcements/partials/placeholder.html",
         "ann_container"
      );
   }
} catch (error) {
   ann_container.style.opacity = 0;
   getHTML(
      "https://raw.githubusercontent.com/Trail-Blaze/marketplace/main/featuredContent/announcements/partials/announcement.html",
      "ann_container"
   );
}

setTimeout(() => {
   ann_container.style.opacity = 1;
}, 425);
