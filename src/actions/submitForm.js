const statelessPrices = [
  {name: 'Hardware Cost', value: 86104},
  {name: 'Cost per Mb', value: 0.3},
  {name: 'Cost per Tenant', value: 30}
];

export const SUBMIT_FORM = "SUBMIT_FORM";

export const submitForm = (data) => ({
  type: 'SUBMIT_FORM',
  payload: data
})
