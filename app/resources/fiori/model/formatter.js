sap.ui.define([] , function () {
	"use strict";

	return {

		/**
		 * Rounds the number unit value to 2 digits
		 * @public
		 * @param {string} sValue the number string to be rounded
		 * @returns {string} sValue with 2 digits rounded
		 */
		src: function (value) {
			if (value != undefined) {
				return `/odata/v4/incident/IncidentPhotos(${value})/image`;
			} else {
				return "";
			}
		},
	state: function (value) {
			if (value == "critical") {
				return "Error";
			}
			return "Success";
		}

	};

});