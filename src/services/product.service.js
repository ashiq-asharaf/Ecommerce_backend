const express = require('express');
const db = require('../db');





const s_addProduct = async (data) => {
    const args = [];
    const argVals = [];
    let argCount = 1;

    if ("name" in data) {
        args.push(`l_name => $${argCount} :: text`);
        argVals.push(data.name);
        argCount += 1;
      }
      if ("category" in data) {
        args.push(`l_category => $${argCount} :: text`);
        argVals.push(data.category);
        argCount += 1;
      }
      if ("image" in data) {
        args.push(`l_image => $${argCount} :: text`);
        argVals.push(data.image);
        argCount += 1;
      }
      if ("new_price" in data) {
        args.push(`l_new_price => $${argCount} :: numeric`);
        argVals.push(data.new_price);
        argCount += 1;
      }
      if ("old_price" in data) {
        args.push(`l_old_price => $${argCount} :: numeric`);
        argVals.push(data.old_price);
        argCount += 1;
      }
      if ("user_id" in data) {
        args.push(`l_user_id => $${argCount} :: bigint`);
        argVals.push(data.user_id);
        argCount += 1;
      }
      if ("available_size" in data) {
        args.push(`l_available_size => $${argCount} :: text[]`);
        argVals.push(data.available_size);
        argCount += 1;
      }
      if ("tags" in data) {
        args.push(`l_tags => $${argCount} :: text[]`);
        argVals.push(data.tags);
        argCount += 1;
      }
      if ("description" in data) {
        args.push(`l_description => $${argCount} :: text`);
        argVals.push(data.description);
        argCount += 1;
      }
      if ("quantity" in data) {
        args.push(`l_quantity => $${argCount} :: json`);
        argVals.push(data.quantity);
        argCount += 1;
      }
      if ("header_name" in data) {
        args.push(`l_header_name => $${argCount} :: text`);
        argVals.push(data.header_name);
        argCount += 1;
      }
      if ("summary" in data) {
        args.push(`l_summary => $${argCount} :: text`);
        argVals.push(data.summary);
        argCount += 1;
      }
    
      const response = await db.any(
        `SELECT * FROM fn_ec_insert_update_products(${args.join(
          ", "
        )})`,
        argVals
      )
            console.log(response);
    return response;

}


const s_getProductDetails = async (data) => {
  const args = [];
  const argVals = [];
  let argCount = 1;

  if ('userId' in data) {
    args.push(`l_user_id => $${argCount} :: bigint`);
    argVals.push(data.userId);
    argCount += 1;
  }

  if ('category' in data) {
    args.push(`l_category => $${argCount} :: text`);
    argVals.push(data.category);
    argCount += 1;
  }

  const response = await db.any(`SELECT * FROM fn_ec_get_all_products(${args.join(', ')})`, argVals);
  return response;
};


module.exports = {
    s_addProduct,
    s_getProductDetails
}