function validateIpv4Address(address) { // function for validate ipv4 address
  const IPV4_REGEX = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
 // IPV4_REGEX is a regular expression for ipv4 address
  if (IPV4_REGEX.test(address)) { // test if address is a valid ipv4 address
    console.log(`L'adresse IPv4 "${address}" est valide.`);
    // if address is a valid ipv4 address, log it to the console
  } else {
    console.log(`L'adresse IPv4 "${address}" est invalide.`);
  }
}
console.log("ex20")
validateIpv4Address("192.168.0.1"); // result: L'adresse IPv4 est valide.
validateIpv4Address("300.168.0.1"); // result: L'adresse IPv4 est invalide.

