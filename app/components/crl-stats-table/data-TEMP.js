
let data = [];
let dataHeadings = [];
// Expected format below is auto-populated
// based on data[0] further below
// [
//   {
//     source: "BLDG",
//     target: "Building"
//   },
//   ...
//  ]

export function getData() {
	console.log("getting data...", data);
	return data;
}

export function getDataHeadings() {
	console.log("getting column names...", dataHeadings);
	return dataHeadings;
}



  
data = [
  {
    "BLDG":"Charlestown",
    "Bldgs":18,
    "OLTs":1,
    "PON Cards":5,
    "FDHs":13,
    "Splitters":50,
    "RDTs":390,
    "ONTs":986,
    "WAPs":719,
    "Rooms":1505,
    "Active Channels":986,
    "Standby Channels":614,
    "Active PON Ports":50,
    "Spare Feeder Fibers":106,
    "Active Distribution Ports":986,
    "Spare Distribution Ports":1006,
    "Actual RDT Count":null
  },
  {
    "BLDG":"HR",
    "Bldgs":1,
    "OLTs":1,
    "PON Cards":1,
    "FDHs":1,
    "Splitters":8,
    "RDTs":58,
    "ONTs":68,
    "WAPs":129,
    "Rooms":291,
    "Active Channels":68,
    "Standby Channels":188,
    "Active PON Ports":8,
    "Spare Feeder Fibers":4,
    "Active Distribution Ports":68,
    "Spare Distribution Ports":256,
    "Actual RDT Count":27
  },
  {
    "BLDG":"St. Ch",
    "Bldgs":1,
    "OLTs":1,
    "PON Cards":1,
    "FDHs":1,
    "Splitters":5,
    "RDTs":39,
    "ONTs":59,
    "WAPs":110,
    "Rooms":160,
    "Active Channels":59,
    "Standby Channels":101,
    "Active PON Ports":5,
    "Spare Feeder Fibers":7,
    "Active Distribution Ports":59,
    "Spare Distribution Ports":157,
    "Actual RDT Count":18
  },
  {
    "BLDG":"BS",
    "Bldgs":1,
    "OLTs":1,
    "PON Cards":1,
    "FDHs":1,
    "Splitters":7,
    "RDTs":57,
    "ONTs":66,
    "WAPs":121,
    "Rooms":260,
    "Active Channels":66,
    "Standby Channels":158,
    "Active PON Ports":7,
    "Spare Feeder Fibers":5,
    "Active Distribution Ports":66,
    "Spare Distribution Ports":258,
    "Actual RDT Count":27
  },
  {
    "BLDG":"HV",
    "Bldgs":1,
    "OLTs":1,
    "PON Cards":2,
    "FDHs":1,
    "Splitters":4,
    "RDTs":37,
    "ONTs":116,
    "WAPs":48,
    "Rooms":116,
    "Active Channels":116,
    "Standby Channels":12,
    "Active PON Ports":4,
    "Spare Feeder Fibers":8,
    "Active Distribution Ports":116,
    "Spare Distribution Ports":16,
    "Actual RDT Count":11
  },
  {
    "BLDG":"CR",
    "Bldgs":1,
    "OLTs":1,
    "PON Cards":1,
    "FDHs":1,
    "Splitters":3,
    "RDTs":23,
    "ONTs":89,
    "WAPs":41,
    "Rooms":89,
    "Active Channels":89,
    "Standby Channels":7,
    "Active PON Ports":3,
    "Spare Feeder Fibers":9,
    "Active Distribution Ports":89,
    "Spare Distribution Ports":43,
    "Actual RDT Count":11
  },
  {
    "BLDG":"CC",
    "Bldgs":1,
    "OLTs":1,
    "PON Cards":1,
    "FDHs":1,
    "Splitters":5,
    "RDTs":23,
    "ONTs":133,
    "WAPs":59,
    "Rooms":133,
    "Active Channels":133,
    "Standby Channels":27,
    "Active PON Ports":5,
    "Spare Feeder Fibers":7,
    "Active Distribution Ports":133,
    "Spare Distribution Ports":11,
    "Actual RDT Count":12
  },
  {
    "BLDG":"PV",
    "Bldgs":1,
    "OLTs":1,
    "PON Cards":1,
    "FDHs":1,
    "Splitters":4,
    "RDTs":28,
    "ONTs":122,
    "WAPs":48,
    "Rooms":122,
    "Active Channels":122,
    "Standby Channels":6,
    "Active PON Ports":4,
    "Spare Feeder Fibers":8,
    "Active Distribution Ports":122,
    "Spare Distribution Ports":22,
    "Actual RDT Count":12
  },
  {
    "BLDG":"FH",
    "Bldgs":1,
    "OLTs":1,
    "PON Cards":1,
    "FDHs":1,
    "Splitters":2,
    "RDTs":19,
    "ONTs":41,
    "WAPs":25,
    "Rooms":41,
    "Active Channels":41,
    "Standby Channels":23,
    "Active PON Ports":2,
    "Spare Feeder Fibers":10,
    "Active Distribution Ports":41,
    "Spare Distribution Ports":55,
    "Actual RDT Count":8
  },
  {
    "BLDG":"MT",
    "Bldgs":1,
    "OLTs":1,
    "PON Cards":1,
    "FDHs":1,
    "Splitters":2,
    "RDTs":17,
    "ONTs":41,
    "WAPs":20,
    "Rooms":41,
    "Active Channels":41,
    "Standby Channels":23,
    "Active PON Ports":2,
    "Spare Feeder Fibers":10,
    "Active Distribution Ports":41,
    "Spare Distribution Ports":55,
    "Actual RDT Count":8
  },
  {
    "BLDG":"EW",
    "Bldgs":1,
    "OLTs":1,
    "PON Cards":1,
    "FDHs":1,
    "Splitters":2,
    "RDTs":17,
    "ONTs":55,
    "WAPs":37,
    "Rooms":55,
    "Active Channels":55,
    "Standby Channels":9,
    "Active PON Ports":2,
    "Spare Feeder Fibers":10,
    "Active Distribution Ports":55,
    "Spare Distribution Ports":41,
    "Actual RDT Count":8
  },
  {
    "BLDG":"CyCr",
    "Bldgs":1,
    "OLTs":1,
    "PON Cards":1,
    "FDHs":1,
    "Splitters":2,
    "RDTs":17,
    "ONTs":58,
    "WAPs":20,
    "Rooms":58,
    "Active Channels":58,
    "Standby Channels":6,
    "Active PON Ports":2,
    "Spare Feeder Fibers":10,
    "Active Distribution Ports":58,
    "Spare Distribution Ports":38,
    "Actual RDT Count":8
  },
  {
    "BLDG":"AB",
    "Bldgs":1,
    "OLTs":1,
    "PON Cards":1,
    "FDHs":1,
    "Splitters":3,
    "RDTs":19,
    "ONTs":65,
    "WAPs":29,
    "Rooms":65,
    "Active Channels":65,
    "Standby Channels":31,
    "Active PON Ports":3,
    "Spare Feeder Fibers":9,
    "Active Distribution Ports":65,
    "Spare Distribution Ports":31,
    "Actual RDT Count":8
  },
  {
    "BLDG":"GTC",
    "Bldgs":1,
    "OLTs":1,
    "PON Cards":1,
    "FDHs":1,
    "Splitters":3,
    "RDTs":36,
    "ONTs":73,
    "WAPs":32,
    "Rooms":74,
    "Active Channels":73,
    "Standby Channels":23,
    "Active PON Ports":3,
    "Spare Feeder Fibers":9,
    "Active Distribution Ports":73,
    "Spare Distribution Ports":23,
    "Actual RDT Count":8
  }
];

// populate data headings map
Object.keys(data[0]).forEach(function(value){
	dataHeadings.pushObject({
		source: value,
		target: value
	});
});