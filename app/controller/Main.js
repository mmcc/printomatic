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
        var Order = Ext.ModelMgr.getModel('TN.model.Order');
        var newOrder = Ext.create('TN.model.Order', {
            name: values.name,
            email: values.email,
            year: values.year,
        });
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