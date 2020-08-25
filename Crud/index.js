var sessionModel = Ext.define('SessionModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' }, 
        { name: 'title', type: 'string' },
        { name: 'sessionLevel', type: 'int' }, 
        { name: 'approved', type: 'boolean' }
    ],
    validations: [
        { type: 'length', field: 'title', min: 3},
        { type: 'inclusion', field: 'sessionLevel', list: [1,2,3] },
    ]
});

var sessionObject = Ext.create('SessionModel', {
    title: 'Ja', //invalid title lenght
    sessionLevel: 2
});
debugger;
    if(!sessionObject.isValid()) {
        var errors =  sessionObject.validate();
        errors.each(function(rec){
            console.log(rec);
        });  
    } else {
        debugger;
    }