export default function( server ) {

  // Princeton

  var princetonCompany = server.create('company', {name: "Princeton University"});

  server.create('network-site', {
    company: princetonCompany.id,
    name: "Princeton Campus",
    address: "Princeton, NJ 08544, United States",
    lat: 40.3467174,
    lng: -74.6568772
  });

  // Erickson

  // - Company
  var ericksonCompany = server.create('company', {name: "Erickson Living"});

  // --->Network Site
  var charlestown = server.create('network-site', {
    company: ericksonCompany.id,
    name: "Charlestown",
    address: "715 Maiden Choice Lane, Catonsville, MD, United States",
    lat: 39.2690103,
    lng: -76.7014073
  });

  // ------>Building
  server.create('building', {
    networkSite: charlestown.id,
    name: "Arborside",
    description: "A building description",
    portsActive: 65,
    portsTotal: 126,
    portsActivePercent: 51,
    lat: 39.2690101,
    lng: -76.7014071
  });

  // ------>Building
  server.create('building', {
    networkSite: charlestown.id,
    name: "Brookside",
    description: "A building description",
    portsActive: 66,
    portsTotal: 320,
    portsActivePercent: 21,
    lat: 39.2690102,
    lng: -76.7014072
  });

  // ------>Building
  server.create('building', {
    networkSite: charlestown.id,
    name: "Chapel Court",
    description: "A building description",
    portsActive: 133,
    portsTotal: 160,
    portsActivePercent: 83,
    lat: 39.2690103,
    lng: -76.7014073
  });

  // ------>Building
  server.create('building', {
    networkSite: charlestown.id,
    name: "Caton Ridge",
    description: "A building description",
    portsActive: 89,
    portsTotal: 96,
    portsActivePercent: 93,
    lat: 39.2690104,
    lng: -76.7014074
  });


  server.create('network-site', {
    company: ericksonCompany.id,
    name: "Lantern Hill",
    address: "603 Mountain Avenue, New Providence, NJ 07974, United States",
    lat: 40.687177,
    lng: -74.400954
  });

  server.create('network-site', {
    company: ericksonCompany.id,
    name: "Ashby Ponds",
    address: "21170 Ashby Ponds Boulevard, Ashburn, VA 20147, United States",
    lat: 39.0294136,
    lng: -77.4549737
  });

  server.create('network-site', {
    company: ericksonCompany.id,
    name: "Greenspring Valley",
    address: "7410 Spring Village Drive, Springfield, VA 22150, United States",
    lat: 38.7671371,
    lng: -77.2032638
  });
}
