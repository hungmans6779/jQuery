// tabs - jQuery plugin for accessible, unobtrusive tabs by Klaus Hartl
// http://stilbuero.de/tabs/
// Free beer and free speech. Enjoy!
$.tabs = function(containerId, start) {
    var ON_CLASS = 'on';
    var id = '#' + containerId;
    var i = (typeof start == "number") ? start - 1 : 0;
    $(id + '>div:lt(' + i + ')').add(id + '>div:gt(' + i + ')').hide();
    $(id + '>ul>li:nth-child(' + i + ')').addClass(ON_CLASS);
    $(id + '>ul>li>a').click(function() {
        if (!$(this.parentNode).is('.' + ON_CLASS)) {
            var re = /([_\-\w]+$)/i;
            var target = $('#' + re.exec(this.href)[1]);
            if (target.size() > 0) {
                $(id + '>div:visible').hide();
                target.show();
                $(id + '>ul>li').removeClass(ON_CLASS);
                $(this.parentNode).addClass(ON_CLASS);
            } else {
                alert('There is no such container.');
            }
        }
        return false;
    });
};


//$(document).ready(function() {
//    $.tabs("container");
//});
//$.tabs("container", 2); // second tab on
//<div id="container"> <ul> <li><a href="#section-1">Section 1</a></li> <li><a href="#section-2">Section 2</a></li> <li><a href="#section-3">Section 3</a></li> </ul> <div id="section-1"> ¡K </div> <div id="section-2"> ¡K </div> <div id="section-3"> ¡K </div> </div>