function mobileAccountViewInit() {
    var listviews = this.element.find("ul.km-listview");

    $("#settings-view").kendoMobileButtonGroup({
        select: function() {
            listviews.hide()
                     .eq(this.selectedIndex)
                     .show();
        },
        index: 0
    });
}