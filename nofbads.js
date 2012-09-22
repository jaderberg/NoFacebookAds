function remove_ads() {
    $("div .ego_column").remove();
}

remove_ads();
setInterval(remove_ads, 500);