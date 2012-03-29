Ext.define('TN.view.Main', {
    extend: 'Ext.Panel',
    id: 'mainView',
    alias: 'widget.main',
    requires: [
        'TN.view.User',
        'TN.view.Items'
    ],
    config: {
        fullscreen: true,

        layout: {
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'left',
                duration: 250
            }
        },

        items: [{
            xtype: 'checkIn'
        }, {
            xtype: 'foodOrder'
        }]
    }
});