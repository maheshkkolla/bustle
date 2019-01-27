import $ from "jquery";
import moment from "moment";
import "timepicker/jquery.timepicker.min"


const options = {
    showDuration: true,
    timeFormat: "g:i A",
    maxTime: "11:59 PM",
    scrollDefault: 'now'
};

$(document).ready(() => {
    let fromSelector = $("input[name=from]");
    let toSelector = $("input[name=to]");

    fromSelector.timepicker(options);
    toSelector.timepicker(options);

    fromSelector.change((e) => {
       toSelector.timepicker('option', 'minTime', e.target.value);
    });
});
