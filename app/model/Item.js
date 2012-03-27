Ext.define('TN.model.Item', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['id', 'order_id', 'name'],

        proxy: {
            type: 'rest',
            url : 'data/posts',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        },

        belongsTo: 'Order'
    }
});