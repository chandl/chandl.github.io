$(document).ready(function() {
    // check query param, filter if needed
    $(window).on("load", function() { 
        const params = (new URL(document.location)).searchParams;
        const category = params.get("category");
        if(!category) {
            document.getElementById("category-selector-all").className += "selected-category";
            return;
        }
        const posts = document.querySelectorAll('[class*="blog-post"]')
        posts.forEach(post => {
                if(!post.classList.contains('category-' + category)) {
                    post.style.visibility = "hidden";
                    post.style.display = "none";
                } 
            });
        const sidebarCategory = document.getElementById("category-selector-" + category);
        sidebarCategory.className += "selected-category";
    });
});