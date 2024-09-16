var _duration = (60 * 60 * 1) - 1;

function getDuration(inp, callback) {
    var myVideos = [];
    window.URL   = window.URL || window.webkitURL;
    var files    = inp.files;
    myVideos.push(files[0]);
    var video     = document.createElement('video');
    video.preload = 'metadata';

    video.onloadedmetadata = function () {
        window.URL.revokeObjectURL(video.src);
        var duration                           = video.duration;
        myVideos[myVideos.length - 1].duration = duration;
        // Set global _duration to use on new blocks
        _duration                              = duration;
        typeof callback === 'function' && callback(duration);
    };

    video.src = URL.createObjectURL(files[0]);
}

function initSlider($block, duration) {
    duration = duration || _duration;

    // Set the input values
    $block.find('.time-from').val(secondToTime(0));
    $block.find('.time-to').val(secondToTime(duration));

    $block.find(".slider-range").slider({
        range : true,
        min   : 0,
        max   : duration,
        step  : 1,
        values: [0, duration],
        slide : function (e, ui) {
            $(e.target).closest('.list_var').find('.time-from').val(secondToTime(ui.values[0]));
            $(e.target).closest('.list_var').find('.time-to').val(secondToTime(ui.values[1]));
        }
    });
}


$(document)
    .on('change', '.time-from , .time-to', applyInputs)
    .on('click', '.time-from , .time-to', applyInputs)
    .on('keyup', '.time-from , .time-to', applyInputs);

function applyInputs(e) {
    var $timeFrom = e ? $(e.currentTarget).closest('.list_var').find('.time-from') : $('.time-from');
    var $timeTo   = e ? $(e.currentTarget).closest('.list_var').find('.time-to') : $('.time-to');
    $(".slider-range").slider('values',
        [timeToSeconds($timeFrom.val()),
            timeToSeconds($timeTo.val())]);
}

function secondToTime(second) {
    var h = parseInt(second / (60 * 60));
    var m = parseInt((second - (h * 60 * 60)) / 60);
    var s = parseInt(second % 60);
    h     = h < 10 ? ("0" + h) : h;
    m     = m < 10 ? ("0" + m) : m;
    s     = s < 10 ? ("0" + s) : s;
    return h + ":" + m + ":" + s;
}

function timeToSeconds(time) {
    var timeArr = time.split(":");
    if (timeArr.length === 2) {
        timeArr.push("00");
    }
    return parseInt(timeArr[0]) * 60 * 60 + parseInt(timeArr[1]) * 60 + parseInt(timeArr[2]);
}