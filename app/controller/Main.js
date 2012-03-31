Ext.define("TN.controller.Main", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            btnSubmit: "#btnSubmit",
            mainForm: {
                selector: "#mainForm",
                xtype: "mainForm"
            }
        },
        control: {
            btnSubmit: {
                tap: "onSubmit"
            }
        }
    },
    onNext: function () {
        console.log("The next button has been tapped.");

        // getInfoForm() is declared in the Main controller.
        var form = this.getInfoForm()
        var values = form.getValues();

        // Let's check to make sure they filled in their name and email.
        if (!values.name || !values.email) {
            Ext.Msg.alert("WhyWait...", "We at least need a name!");
            return;
        }

        console.log(values);

        // Submit this stuff.
        form.submit({
            url: '/signin',
            method: 'POST',
            success: function() {
                Ext.Msg.alert('Checked in successfully!');
                //Ext.Viewport.setActiveItem(Ext.create('TN.view.Items'));
                // Ext.Viewport.setActiveItem({
                //     xtype: 'foodOrder'
                // });
                // form.remove();
                // this.destroy();
                //var oldItem = Ext.Viewport.getActiveItem();
                // Ext.Viewport.add({xtype: 'foodOrder'});
                Ext.Viewport.setActiveItem({
                    xtype: 'foodOrder'
                });
                // oldItem.destroy();
            },
            failure: function(form, result) {
                Ext.Msg.alert("Oh no! Sign-in failed!");
            }
        });
    },
    onSubmit: function () {
        console.log("The submit button has been tapped.");

        // getInfoForm() is declared in the Main controller.
        var form = this.getMainForm()
        var values = form.getValues();

        if ((!values.name) || (!values.email)) {
            Ext.Msg.alert("WhyWait...", "We at least need a name and an email!");
            return;
        }

        console.log(values);

        // Submit this stuff.
        form.submit({
            url: '/signin',
            method: 'POST',
            success: function() {
                Ext.Msg.alert('WhyWait...', 'Order placed!');
                form.reset();
                // Ext.Viewport.setActiveItem({
                //     xtype: 'checkIn'
                // });
                //Ext.Viewport.remove('TN.view.');
                //this.destroy();
                //var oldItem = Ext.Viewport.getActiveItem();
                // Ext.Viewport.setActiveItem(Ext.create('TN.view.Main'));
                // mainView.setActiveItem({
                //     xtype: 'checkIn'
                // });
                //Ext.Viewport.add(Ext.create('TN.view.Main'));
                console.log('Form submitted. Clearing Form...')
            },
            failure: function(form, result) {
                Ext.Msg.alert('WhyWait...', 'Oh no! Sign-in failed!');
            }
        });
    },
    launch: function () {
        this.callParent();
        console.log('App launch');
    },
    init: function () {
        this.callParent();
        console.log('App init');
    }
});