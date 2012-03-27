Ext.define("TN.view.Items", {
    extend: 'Ext.form.FormPanel',
    requires: ['Ext.TitleBar'],
    
    config: {
        layout: 'vbox',
        fullscreen: true,
        scrollable: true,
        
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'WhyWait...'
            },
            {
                xtype: 'fieldset',
                title: 'Drinks',
                items: [
                    {
                        xtype: 'checkboxfield',
                        name : 'coca-cola',
                        label: 'Coca-Cola',
                        value: 'coca-cola'
                    },
                    {
                        xtype: 'checkboxfield',
                        name : 'sprite',
                        label: 'Sprite',
                        value: 'sprite'
                    },
                    {
                        xtype: 'checkboxfield',
                        name : 'diet-coke',
                        label: 'Diet Coke',
                        value: 'diet-coke'
                    },
                    {
                        xtype: 'checkboxfield',
                        name : 'bottled-water',
                        label: 'Bottled Water',
                        value: 'bottled-water'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Food',
                items: [
                    {
                        xtype: 'checkboxfield',
                        name : 'veggie-wrap',
                        label: 'Veggie Wrap Pinwheel',
                        value: 'veggie-wrap'
                    },
                    {
                        xtype: 'checkboxfield',
                        name : 'club-wrap',
                        label: 'Club Wrap Pinwheel',
                        value: 'club-wrap'
                    },
                    {
                        xtype: 'checkboxfield',
                        name : 'mediterranean-wrap',
                        label: 'Mediterranean Wrap Pinwheel',
                        value: 'mediterranean-wrap'
                    },
                    {
                        xtype: 'checkboxfield',
                        name : 'fresh-fruit',
                        label: 'Seasonal Fresh Fruit',
                        value: 'fresh-fruit'
                    },
                    {
                        xtype: 'checkboxfield',
                        name : 'cubed-cheese',
                        label: 'Assorted Cubed Cheese',
                        value: 'cubed-cheese'
                    },
                    {
                        xtype: 'checkboxfield',
                        name : 'veggies',
                        label: 'Garden Fresh Veggies',
                        value: 'veggies'
                    },
                    {
                        xtype: 'checkboxfield',
                        name : 'humus',
                        label: 'Roasted Red Pepper Hummus',
                        value: 'humus'
                    }
                ]
            }
        ]
    }
});