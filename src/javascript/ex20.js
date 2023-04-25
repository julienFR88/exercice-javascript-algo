function validateIpv4Address(address) {
  const IPV4_REGEX = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  if (IPV4_REGEX.test(address)) {
    console.log(`L'adresse IPv4 "${address}" est valide.`);
  } else {
    console.log(`L'adresse IPv4 "${address}" est invalide.`);
  }
}
console.log("ex20")
validateIpv4Address("192.168.0.1");
validateIpv4Address("300.168.0.1");

