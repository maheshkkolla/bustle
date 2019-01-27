import $ from 'jquery';

$(document).ready(() => {
    $('input[type=radio][name=of]').change(function() {
        if (this.value === 'week') {
            $("#weekDays").removeClass('u-hidden');
        } else  {
            $("#weekDays").addClass('u-hidden');
        }
    });
});
