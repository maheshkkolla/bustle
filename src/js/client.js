TrelloPowerUp.initialize({
    'card-buttons': function(t, options) {
        var context = t.getContext();
        return [{
            text: 'Repetitive task',
            callback: function(t, opts) {
                return t.popup({
                    title: 'Mark as repetitive task',
                    url: './html/markAsRepetitivePopup.html'
                });
            }
        }];
    },
});
