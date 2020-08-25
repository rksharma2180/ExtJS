var lastComponent = Ext.create('Ext.Component', {
    html: '<p>Click me too!</p>',
    listeners: {
        click: {
            element: 'el',
            fn: function() {
                this.hide();
            }

        }
    } 
});

Ext.application({ //This represents entire app
    name: 'MyApp',
    launch: function () {
        alert('Application created');
        Ext.create('Ext.container.Viewport', {
            items: [
                {
                    xtype: 'button',
                    text: 'Disable',
                    height: 70,
                    width: 70,
                    resizable: true,
                    style: {
                        padding: '10px',
                        border: '1px solid red'
                    },
                    handler: function () {
                        alert('disabled');
                        this.up().down("#myComponent").disable();
                    }
                },
                {
                    xtype: 'button',
                    text: 'Show',
                    height: 70,
                    width: 70,
                    resizable: true,
                    style: {
                        padding: '10px',
                        border: '1px solid red'
                    },
                    handler: function () {
                        this.up().down("#myComponent").show();
                    }
                },
                {
                    xtype: 'button',
                    text: 'Hide',
                    height: 70,
                    width: 70,
                    resizable: true,
                    style: {
                        padding: '10px',
                        border: '1px solid red'
                    },
                    handler: function () {
                        this.up().down("#myComponent").hide();
                    }
                },
                // All are component - who knows how to render html and also observable
                {
                    xtype: 'component',
                    itemId: 'myComponent',
                    html: '<p>If you click on me, I will disappear.</p>',
                    listeners: { //Registering events to observable
                        click: {
                            element: 'el',
                            fn: function() {
                                this.hide();
                            }

                        }
                    }       
                },
                {
                    //html: '<p>Click me away!</p>',
                    tpl: 'name {first} {last}',
                    data: {
                        first: 'ravi',
                        last: 'sharma'
                    },                    
                    width:200,
                    height:200,                    
                    style: {
                        border: '2px solid red'
                    },
                    resizable: true,
                    itemId: 'myComponentItemId',
                    listeners: {
                        click: {
                            element: 'el',
                            fn: function() {
                                this.hide();
                            }
                        },                        
                        resize: {                            
                            fn: function(component, width, height) {
                                alert('test');
                            }
                        }
                    } 
                },
                lastComponent
            ]            
        });
    }
});
/*
1. Creats a global variable called MyApp all of your Application's classes (such as its Models, 
    Views and Controllers) will reside under this single namespace.
2. When the page is ready and all of your JavaScript has loaded, your Application's launch function 
    is called, at which time you can run the code that starts your app. Usually this consists of creating 
    a Viewport. 
*/