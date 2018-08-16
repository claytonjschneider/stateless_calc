const statelessPrices = [
  {name: 'Hardware Cost', value: 86104},
  {name: 'Cost per Mb', value: 0.3},
  {name: 'Cost per Tenant', value: 30}
];

export const statelessResults = (tenantNumber, tenantThroughput) => {
  return Math.round(((statelessPrices[0].value/48)+(statelessPrices[1].value*tenantThroughput)+(statelessPrices[2].value*tenantNumber)));
}
