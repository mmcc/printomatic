Ext.define("TN.controller.Main", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            btnNext: "#btnNext",
            btnSubmit: "#btnSubmit",
            infoForm: "#basicInfo",
            orderForm: "#orderForm"
        },
        control: {
            btnNext: {
                tap: "onNext"
            },
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

        // Let's check to make sure they filled in at least their name.
        if (!values.name) {
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
                Ext.Viewport.setActiveItem(Ext.create('TN.view.Items'));
            },
            failure: function(form, result) {
                Ext.Msg.alert("Oh no! Sign-in failed!");
            }
        });
    },
    onSubmit: function () {
        console.log("The submit button has been tapped.");

        // getInfoForm() is declared in the Main controller.
        var form = this.getOrderForm()
        var values = form.getValues();

        console.log(values);

        // Submit this stuff.
        form.submit({
            url: '/print',
            method: 'POST',
            success: function() {
                Ext.Msg.alert('WhyWait...', 'Order placed!');
                Ext.Viewport.setActiveItem('TN.view.Main');
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