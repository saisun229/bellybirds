"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSON_SECRET_TOKEN = exports.processMessage = void 0;
function processMessage(payload) {
    try {
        return JSON.parse(payload);
    }
    catch (e) {
        return "Failed parsing the message";
    }
}
exports.processMessage = processMessage;
exports.JSON_SECRET_TOKEN = "sjhbvkab6987sDvbbf9969870^$&^%&^(*&()&($7fsbfb796795759jbmblknvlfv78i689689sd6vsdv";
