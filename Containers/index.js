/*
    Container & Layout Management
*/
var component1 = Ext.create('Ext.Component', {
    html: 'Component1'
});

var component2 = Ext.create('Ext.Component', {
    html: 'Component2'
});

var component3 = Ext.create('Ext.Component', {
    html: 'Component3'
});

var customContainer = Ext.create('Ext.container.Container', {
    items: [
        component1,
        component2,
        component3
    ],
    layout: 'vbox'
});

Ext.application({ //This represents entire app
    name: 'MyApp',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            items: [
                customContainer               
            ]            
        });
    }
});
