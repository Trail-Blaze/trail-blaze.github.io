getHTML("https://raw.githubusercontent.com/Trail-Blaze/marketplace/main/featuredContent/announcements/partials/announcement.html", "ann_container");
setTimeout(()=>{
    if(announcement_type.innerText == "DEFAULT"){
        getHTML("https://raw.githubusercontent.com/Trail-Blaze/marketplace/main/featuredContent/announcements/partials/placeholder.html", "ann_container");
    }
}, 300)
