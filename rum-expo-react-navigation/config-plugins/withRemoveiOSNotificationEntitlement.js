
// This file ensure that the push notification on ios doesn't get enabled 
// by default. It could cause signing problems if it's not required

const withEntitlementsPlist = require("@expo/config-plugins").withEntitlementsPlist;

const withRemoveiOSNotificationEntitlement = (config) => {
    return withEntitlementsPlist(config, mod => {
        mod.modResults = {...mod.modResults, "aps-environment": undefined};
        return mod;
    })
}

module.exports = withRemoveiOSNotificationEntitlement;
