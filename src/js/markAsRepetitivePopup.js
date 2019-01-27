import $ from 'jquery';

$(document).ready(() => {
    // $("input.of").change((e) => {
    //     const value = e.target.value;
    //     if(value === 'Week') {
    //         $("#weekDays").removeClass('u-hidden');
    //     } else {
    //         $("#weekDays").addClass('u-hidden');
    //     }
    // });
    $('input[type=radio][name=of]').change(function() {
        if (this.value === 'week') {
            $("#weekDays").removeClass('u-hidden');
        } else  {
            $("#weekDays").addClass('u-hidden');
        }
    });
});
