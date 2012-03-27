Ext.define("TN.controller.Main", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            btnNext: "#btnNext",
            infoForm: '#basicInfo'
        },
        control: {
            btnNext: {
                tap: "onNext"
            }
        }
    },
    onNext: function () {
        console.log("The next button has been tapped.");
        var values = this.getInfoForm().getValues();
        console.log(values);

        // We don't have a store, so create one on the fly, throw the values in there, and save it
        var Order = Ext.ModelMgr.getModel('TN.model.Order');
        var newOrder = Ext.create('TN.model.Order', {
            name: values.name,
            email: values.email,
            year: values.year,
        });
        Ext.Viewport.setActiveItem(Ext.create('TN.view.Items')); // This will eventually need to be inside the success stuff, but we just want to test the new page
        newOrder.save({
            success: function(ed) {
                console.log("Saved the order! Its ID is "+ newOrder.getId());
            }
        });
    },
    launch: function () {
        this.callParent();
        console.log("App launch");
    },
    init: function () {
        this.callParent();
        console.log("App init");
    }
});