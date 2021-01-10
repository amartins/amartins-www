//
// Alessandro Martins's Proxy PAC 
//
function FindProxyForURL(url, host) {

// Var
proxy = "PROXY alpha.martins.eng.br:3128";

// First start with the exceptions that need to be proxied
if (shExpMatch(url,"*mininova.com*") ||
    shExpMatch(url,"*martins.eng.br*") ||
    shExpMatch(url,"*blackberry.com*") ||
    shExpMatch(url,"*demonoid.com*")) {
         return proxy;
    }
  else {
         return "DIRECT";
        }
}
