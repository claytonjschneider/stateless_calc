{/*
  V1 = Cisco
  V2 = Juniper
  V3 = Palo Alto
  V4 = Fortinet

  T1 = 100 Mbps
  T2 = 1 Gbps
  T3 = 2 Gbps
  T4 = 4 Gbps
*/}

const fwPrices = [
  [
    2400,
    2700,
    10800,
    21600
  ],
  [
    305,
    1027,
    2700,
    5980
  ],
  [
    540,
    1080,
    4320,
    8640
  ],
  [
    1100,
    2700,
    7800,
    15700
  ]
];

const lbPrices = [
  [
    1050,
    5250,
    10495,
    20989
  ],
  [
    1030,
    3539,
    7078,
    14156
  ],
  [
    949,
    3452,
    6881,
    15181
  ],
  [
    768,
    1569,
    3072,
    10399
  ]
];

const rPrices = [
  [
    900,
    2625,
    5250,
    10500
  ],
  [
    1300,
    3800,
    7599,
    11000
  ],
  [
    1100,
    3000,
    6000,
    10000
  ],
  [
    1100,
    3000,
    6000,
    10000
  ]
];

export const nfvResults = (firewall, loadBalancer, router, tenantNumber, tenantThroughput, Vendor, ) => {
  const data = {[
    {name: "Hardware", value: 0, desc: "Traditional network functions require you to purchase specialized hardware, with significant limitations to performance, scalability, and uptime. We calculate this expense with an average hardware lifetime of 4 years."},
    {name: "Power and Resources", value: 0, desc: "Because Stateless NFs require so much less hardware, the savings in power, cooling, and other resource consumption really adds up. We're calculating this based on average wattage use of each tenant."},
    {name: "Licensing", value: 0, desc: "Other vendors require you to make large recurring license purchases in order to run their software on top of the hardware you already purchased. Average cost of license * number of NFs needed."},
    {name: "Network Downtime", value: 14000, desc: "Downtime is one of the costliest events in any network... By switching to Stateless for your network functions, you could save thousands every month, depending on the size of your data center."},
    {name: "Other", value: 921, desc: "On top of all this, there are still other ways Stateless can save you money. Fewer cables throughout your network, fewer support tickets, etc. Continue to the next page to get your advanced results from us."}
  ]}

  /* Set Bandwidth */
  var bw = (this.tenantNumber * this.tenantThroughput);

  /* 1. Hardware Appliances */
    /* Firewall */
    if(this.firewall) {
      this.data[0].value +=
      ((this.bw / 48)*(
        (0.6*{fwPrices[this.Vendor][0]}/0.1) +
        (0.2*{fwPrices[this.Vendor][1]}/1) +
        (0.1*{fwPrices[this.Vendor][2]}/2) +
        (0.1*{fwPrices[this.Vendor][3]}/4)
      ));
    }

    /* Load Balancer */
    if(this.loadBalancer) {
      this.data[0].value +=
      ((this.bw / 48)*(
        (0.6*{lbPrices[this.Vendor][0]}/0.1) +
        (0.2*{lbPrices[this.Vendor][1]}/1) +
        (0.1*{lbPrices[this.Vendor][2]}/2) +
        (0.1*{lbPrices[this.Vendor][3]}/4)
      ));
    }

    /* Router */
    if(this.router) {
      this.data[0].value +=
      ((this.bw / 48)*(
        (0.6*{rPrices[this.Vendor][0]}/0.1) +
        (0.2*{rPrices[this.Vendor][1]}/1) +
        (0.1*{rPrices[this.Vendor][2]}/2) +
        (0.1*{rPrices[this.Vendor][3]}/4)
      ));
    }

  /* 2. Power and Resources */
  this.data[1].value = (43200)*(0.001)*(this.tenantNumber)*(this.firewall + this.loadBalancer + this.router);

  /* 3. Licensing */
  this.data[2].value = 421*(this.firewall + this.loadBalancer + this.router);

  /* 4. Network Downtime */
  this.data[3].value = 140*(this.tenantNumber);

  /* 5. Others */
  this.data[4].value = 300*(this.firewall + this.loadBalancer + this.router);

  return (this.data);
};
