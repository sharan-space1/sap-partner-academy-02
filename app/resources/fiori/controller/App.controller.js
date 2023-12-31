sap.ui.define([
    "./BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("incidentspa49930u00ui.controller.App", {

        onInit : function () {
            // apply content density mode to root view
            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        },
        toCreate: function () {
            // apply content density mode to root view
            this.getOwnerComponent()
            .getRouter()
            .navTo("RouteCreate", {});
        }
    });

});