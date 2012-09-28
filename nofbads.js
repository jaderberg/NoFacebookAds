function remove_ads() {
    $(".adsCategoryTitleLink").closest("div .ego_column").remove();
}

remove_ads();
setInterval(remove_ads, 500);