import customersData from "./DataStore/customers.json";
import suppliersData from "./DataStore/suppliers.json";
import productsData from "./DataStore/products.json";
import selectCustomerData from "./DataStore/select_customer.json";
import employeesData from "./DataStore/employees.json";
import regionData from "./DataStore/regions.json";

export default function GetTableInfo(data) {
  let infoStore = null;
  if (data === 1) {
    infoStore = customersData;
  } else if (data === 2) {
    infoStore = suppliersData;
  } else if (data === 3) {
    infoStore = productsData;
  } else if (data === 4) {
    infoStore = selectCustomerData;
  } else if (data===5){
    infoStore = employeesData;
  }
  else if (data===6){
    infoStore = regionData;
  }
  let tableHeaders = [];
  let tableRows = [];
  for (var i = 0; i < infoStore.length; i++) {
    const row = infoStore[i];
    if (i === 0) {
      for (const item in row) {
        tableHeaders.push(row[item]);
      }
    } else {
      let temp = [];
      for (const item in row) {
        temp.push(row[item]);
      }
      tableRows.push(temp);
    }
  }
  return { tableHeaders, tableRows };
}
