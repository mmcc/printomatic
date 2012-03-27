Ext.define('TN.model.Order', {

    extend: 'Ext.data.Model',

    config: {
        fields: ['id', 'name', 'email', 'year'],
        proxy: {
            type: 'rest',
            url : 'data/users',
            reader: {
                type: 'json',
                rootProperty: 'users'
            }
        },

        hasMany: 'Item'
    }
});

