//Creating class
Ext.define("MyApp.session", { //session is class, define is use to create a class.
    config: {
        title: '',
        description: '',
        level: 'Beginner'
    },

    applyTitle: function(title) { //This function automatically getting call when we call set title
        console.log(title);
        return title;
    },
    
    /*constructor: function(config) { //optional
        this.initConfig(config);
    }*/

});

var session =  Ext.create("MyApp.session", { //creating object of session using create function
        
    });

    session.setTitle('Test');
    alert(session.getTitle());