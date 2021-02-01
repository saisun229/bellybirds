
import * as WebSocket from "ws";
export function processMessage(payload : string) {

try {
    return JSON.parse(payload);

    } catch(e) {

  return "Failed parsing the message";
}

}

export interface CustomWebSocket extends WebSocket {
  connectionID : string;
}

export const JSON_SECRET_TOKEN = "sjhbvkab6987sDvbbf9969870^$&^%&^(*&()&($7fsbfb796795759jbmblknvlfv78i689689sd6vsdv"
