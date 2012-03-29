Ext.define("TN.view.Main", {
    extend: 'Ext.Panel',
    requires: ['Ext.TitleBar', 'Ext.form.Panel', 'Ext.form.FieldSet', 'Ext.field.Email', 'Ext.field.Select'],
    
    config: {
        layout: 'vbox',
        fullscreen: true,
        scrollable: true,
        
        items: [
            {
                flex: 1,
                styleHtmlContent: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'WhyWait...'
                },
                
                html: [
                    "Welcome to the FourAthens Tech Night! Right now what you're using is a custom app built by <strong>StratOS</strong> ",
                    "just for this event. Let's go ahead and get a food order ready for you!"
                ].join("")
            },
            {
                xtype: 'formpanel',
                flex: 2,
                id: 'basicInfo',

                items: [
                    {
                        xtype: 'fieldset',
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
                        xtype: 'button',
                        text: 'On to the food!',
                        ui: 'confirm',
                        id: 'btnNext'
                    }
                ]
            }
        ]
    }
});