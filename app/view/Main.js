Ext.define("TN.view.Main", {
    extend: 'Ext.Panel',
    alias: 'widget.mainForm',
    requires: ['Ext.TitleBar', 'Ext.form.Panel', 'Ext.form.FieldSet', 'Ext.field.Email', 'Ext.field.Select'],
    
    config: {
        layout: 'fit',
        fullscreen: true,
        scrollable: true,
        
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'WhyWait...'
            },
            {
                xtype: 'formpanel',
                id: 'mainForm',


                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Info',
                        defaults: {
                            labelWidth: '40%'
                        },
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'name',
                                label: 'Name'
                            },
                            {
                                xtype: 'emailfield',
                                name: 'email',
                                label: 'Email'
                            },
                            {
                                xtype: 'selectfield',
                                name: 'year',
                                label: 'Current Year',
                                options: [
                                    {text: 'Freshman',  value: 'freshman'},
                                    {text: 'Sophomore', value: 'sophomore'},
                                    {text: 'Junior',  value: 'junior'},
                                    {text: 'Senior', value: 'senior'},
                                    {text: 'Graduate', value: 'graduate'},
                                    {text: 'Professor', value: 'professor'}
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: 'Drinks',
                        defaults: {
                            labelWidth: '80%'
                        },
                        items: [
                            {
                                xtype: 'checkboxfield',
                                name : 'cocacola',
                                label: 'Coca-Cola',
                                value: 'Coca-Cola'
                            },
                            {
                                xtype: 'checkboxfield',
                                name : 'sprite',
                                label: 'Sprite',
                                value: 'Sprite'
                            },
                            {
                                xtype: 'checkboxfield',
                                name : 'dietcoke',
                                label: 'Diet Coke',
                                value: 'Diet Coke'
                            },
                            {
                                xtype: 'checkboxfield',
                                name : 'bottledwater',
                                label: 'Bottled Water',
                                value: 'bottled water'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: 'Food',
                        defaults: {
                            labelWidth: '80%'
                        },
                        items: [
                            {
                                xtype: 'checkboxfield',
                                name : 'veggiewrap',
                                label: 'Veggie Wrap Pinwheel',
                                value: 'Veggie Wrap'
                            },
                            {
                                xtype: 'checkboxfield',
                                name : 'clubwrap',
                                label: 'Club Wrap Pinwheel',
                                value: 'Club Wrap'
                            },
                            {
                                xtype: 'checkboxfield',
                                name : 'mediterraneanwrap',
                                label: 'Mediterranean Wrap Pinwheel',
                                value: 'Mediterranean Wrap'
                            },
                            {
                                xtype: 'checkboxfield',
                                name : 'freshfruit',
                                label: 'Seasonal Fresh Fruit',
                                value: 'Fresh Fruit'
                            },
                            {
                                xtype: 'checkboxfield',
                                name : 'cubedcheese',
                                label: 'Assorted Cubed Cheese',
                                value: 'cubed-cheese'
                            },
                            {
                                xtype: 'checkboxfield',
                                name : 'veggies',
                                label: 'Garden Fresh Veggies',
                                value: 'Veggies'
                            },
                            {
                                xtype: 'checkboxfield',
                                name : 'humus',
                                label: 'Roasted Red Pepper Hummus',
                                value: 'Humus'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        text: 'Submit!',
                        ui: 'confirm',
                        id: 'btnSubmit'
                    }
                ]
            }
        ]
    }
});