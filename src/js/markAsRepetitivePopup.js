import $ from 'jquery';
console.log("Came here");

$(document).ready(() => {
    $("input.of").change((e) => {
        const value = e.target.value;
        console.log("Value", value);
        if(value === 'Week') {
            $("#weekDays").removeClass('u-hidden');
        } else {
            $("#weekDays").addClass('u-hidden');
        }
    });
});
