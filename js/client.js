TrelloPowerUp.initialize({
    'card-buttons': function(t, options) {
        var context = t.getContext();
        return [{
            text: 'Make repetitive task',
            callback: function() {
                console.log('Marked ' + context.card + 'as repetitive task');
                console.log(JSON.stringify(context));
            }
        }];
    },
});
