import {axios} from "@/utils/axiosPlus";

// ==================Label=================
export function Label_Add(data) {
  return axios({
    url: "/api/Label/Add",
    method: "post",
    data,
  });
}

export function Label_Update(data) {
  return axios({
    url: "/api/Label/Update",
    method: "put",
    data,
  });
}

export function Label_Get(params) {
  return axios({
    url: "/api/Label/Get",
    method: "get",
    params,
  });
}

export function Label_GetAll(params) {
  return axios({
    url: "/api/Label/GetAll",
    method: "get",
    params,
  });
}

export function Label_Delete(params) {
  return axios({
    url: "/api/Label/Delete",
    method: "delete",
    params,
  });
}

// ==================Label=================

// ==================Component=================
export function Comp_Add(data) {
  return axios({
    url: "/api/Component/Add",
    method: "post",
    data,
  });
}

export function Comp_AddDefault(data) {
  return axios({
    url: "/api/Component/AddDefault",
    method: "post",
    data,
  });
}

export function Comp_AddProperties(data) {
  return axios({
    url: "/api/Component/AddProperties",
    method: "post",
    data,
  });
}

export function Comp_Delete(params) {
  return axios({
    url: "/api/Component/Delete",
    method: "delete",
    params,
  });
}

export function Comp_DeleteProperties(data) {
  return axios({
    url: "/api/Component/DeleteProperties",
    method: "delete",
    data,
  });
}

export function Comp_DeleteResource(data) {
  return axios({
    url: "/api/Component/DeleteResource",
    method: "delete",
    data,
  });
}

export function Comp_UpdateRank(data) {
  return axios({
    url: "/api/Component/UpdateRank",
    method: "put",
    data,
  });
}

export function Comp_Update(data) {
  return axios({
    url: "/api/Component/Update",
    method: "put",
    data,
  });
}

export function Comp_Get(params) {
  return axios({
    url: "/api/Component/Get",
    method: "get",
    params,
  });
}

export function Comp_GetDefault(params) {
  return axios({
    url: "/api/Component/GetDefault",
    method: "get",
    params,
  });
}
// ==================Component=================

// ==================ComponentContainer=================

export function CompCon_AddResource(data) {
  return axios({
    url: "/api/ComponentContainer/AddResource",
    method: "post",
    data,
  });
}

export function CompCon_AddDefaultAs(data) {
  return axios({
    url: "/api/ComponentContainer/AddDefaultAs",
    method: "post",
    data,
  });
}

export function CompCon_Delete(params) {
  return axios({
    url: "/api/ComponentContainer/Delete",
    method: "delete",
    params,
  });
}

export function CompCon_DeleteResource(data) {
  return axios({
    url: "/api/ComponentContainer/DeleteResource",
    method: "delete",
    data,
  });
}

export function CompCon_UpdateBatch(data) {
  return axios({
    url: "/api/ComponentContainer/UpdateBatch",
    method: "put",
    data,
  });
}

export function CompCon_Update(data) {
  return axios({
    url: "/api/ComponentContainer/Update",
    method: "put",
    data,
  });
}
export function CompCon_Get(params) {
  return axios({
    url: "/api/ComponentContainer/Get",
    method: "get",
    params,
  });
}

// ==================ComponentContainer=================

// ==================Account=================
export function Account_Add(data) {
  return axios({
    url: "/api/Account/Add",
    method: "post",
    data,
  });
}

export function Account_Delete(data) {
  return axios({
    url: "/api/Account/Delete",
    method: "delete",
    data,
  });
}

export function Account_DeleteBatch(data) {
  return axios({
    url: "/api/Account/DeleteBatch",
    method: "delete",
    data,
  });
}

export function Account_Update(data) {
  return axios({
    url: "/api/Account/Update",
    method: "put",
    data,
  });
}

export function Account_UpdateStatus(data) {
  return axios({
    url: "/api/Account/UpdateStatus",
    method: "put",
    data,
  });
}

export function Account_UpdatePassword(data) {
  return axios({
    url: "/api/Account/UpdatePassword",
    method: "put",
    data,
  });
}

export function Account_Get(params) {
  return axios({
    url: "/api/Account/Get",
    method: "get",
    params,
  });
}

export function Account_GetAll(params) {
  return axios({
    url: "/api/Account/GetAll",
    method: "get",
    params,
  });
}
// ==================Account=================

// ==================Default=================

// ==================Default=================

// ==================Department=================
export function Department_Add(data) {
  return axios({
    url: "/api/Department/Add",
    method: "post",
    data,
  });
}

export function Department_Delete(params) {
  return axios({
    url: "/api/Department/Delete/",
    method: "delete",
    params,
  });
}

export function Department_UpdateRank(data) {
  return axios({
    url: "/api/Department/UpdateRank",
    method: "put",
    data,
  });
}

export function Department_Update(data) {
  return axios({
    url: "/api/Department/Update",
    method: "put",
    data,
  });
}

export function Department_Get(params) {
  return axios({
    url: "/api/Department/Get",
    method: "get",
    params,
  });
}

// ==================Department=================

// ==================Team=================
export function Team_Add(data) {
  return axios({
    url: "/api/Team/Add",
    method: "post",
    data,
  });
}

export function Team_Delete(params) {
  return axios({
    url: "/api/Team/Delete",
    method: "delete",
    params,
  });
}

export function Team_UpdateRank(data) {
  return axios({
    url: "/api/Team/UpdateRank",
    method: "put",
    data,
  });
}

export function Team_Update(data) {
  return axios({
    url: "/api/Team/Update",
    method: "put",
    data,
  });
}

export function Team_Get(params) {
  return axios({
    url: "/api/Team/Get",
    method: "get",
    params,
  });
}

// ==================Team=================

// ==================Product=================
export function Product_Add(data) {
  return axios({
    url: "/api/Product/Add",
    method: "post",
    data,
  });
}

export function Product_AddProperties(data) {
  return axios({
    url: "/api/Product/AddProperties",
    method: "post",
    data,
  });
}

export function Product_Delete(params) {
  return axios({
    url: "/api/Product/Delete",
    method: "delete",
    params,
  });
}

export function Product_UpdateRank(data) {
  return axios({
    url: "/api/Product/UpdateRank",
    method: "put",
    data,
  });
}

export function Product_Update(data) {
  return axios({
    url: "/api/Product/Update",
    method: "put",
    data,
  });
}

export function Product_Get(params) {
  return axios({
    url: "/api/Product/Get",
    method: "get",
    params,
  });
}
// ==================Product=================

// ==================Action=================

export function Action_Add(data) {
  return axios({
    url: "/api/Action/Add",
    method: "post",
    data,
  });
}

export function Action_AddProperties(data) {
  return axios({
    url: "/api/Action/AddProperties",
    method: "post",
    data,
  });
}

export function Action_Delete(params) {
  return axios({
    url: "/api/Action/Delete",
    method: "delete",
    params,
  });
}

export function Action_UpdateRank(data) {
  return axios({
    url: "/api/Action/UpdateRank",
    method: "put",
    data,
  });
}

export function Action_Update(data) {
  return axios({
    url: "/api/Action/Update",
    method: "put",
    data,
  });
}

export function Action_Get(params) {
  return axios({
    url: "/api/Action/Get",
    method: "get",
    params,
  });
}
// ==================Action=================

// ==================Property=================
export function Property_Add(data) {
  return axios({
    url: "/api/Property/Add",
    method: "post",
    data,
  });
}

export function Property_Delete(data) {
  return axios({
    url: "/api/Property/Delete",
    method: "delete",
    data,
  });
}

export function Property_DeleteBatch(data) {
  return axios({
    url: "/api/Property/DeleteBatch",
    method: "delete",
    data,
  });
}

export function Property_Update(data) {
  return axios({
    url: "/api/Property/Update",
    method: "put",
    data,
  });
}

export function Property_Import(data) {
  return axios({
    url: "/api/Property/Import",
    method: "put",
    data,
  });
}

export function Property_Get(params) {
  return axios({
    url: "/api/Property/Get",
    method: "get",
    params,
  });
}

export function Property_GetAll(params) {
  return axios({
    url: "/api/Property/GetAll",
    method: "get",
    params,
  });
}

// ==================Property=================

// ==================ArgumentLibrary=================
export function ArgumentLibrary_Add(data) {
  return axios({
    url: "/api/ArgumentLibrary/Add",
    method: "post",
    data,
  });
}

export function ArgumentLibrary_AddProperties(data) {
  return axios({
    url: "/api/ArgumentLibrary/AddProperties",
    method: "post",
    data,
  });
}

export function ArgumentLibrary_Delete(params) {
  return axios({
    url: "/api/ArgumentLibrary/Delete",
    method: "delete",
    params,
  });
}

export function ArgumentLibrary_UpdateRank(data) {
  return axios({
    url: "/api/ArgumentLibrary/UpdateRank",
    method: "put",
    data,
  });
}

export function ArgumentLibrary_Update(data) {
  return axios({
    url: "/api/ArgumentLibrary/Update",
    method: "put",
    data,
  });
}

export function ArgumentLibrary_Get(params) {
  return axios({
    url: "/api/ArgumentLibrary/Get",
    method: "get",
    params,
  });
}
// ==================ArgumentLibrary=================

// ==================ProductLibrary=================
export function ProductLibrary_Add(data) {
  return axios({
    url: "/api/ProductLibrary/Add",
    method: "post",
    data,
  });
}

export function ProductLibrary_AddProperties(data) {
  return axios({
    url: "/api/ProductLibrary/AddProperties",
    method: "post",
    data,
  });
}

export function ProductLibrary_Delete(params) {
  return axios({
    url: "/api/ProductLibrary/Delete",
    method: "delete",
    params,
  });
}

export function ProductLibrary_UpdateRank(data) {
  return axios({
    url: "/api/ProductLibrary/UpdateRank",
    method: "put",
    data,
  });
}

export function ProductLibrary_Update(data) {
  return axios({
    url: "/api/ProductLibrary/Update",
    method: "put",
    data,
  });
}

export function ProductLibrary_Get(params) {
  return axios({
    url: "/api/ProductLibrary/Get",
    method: "get",
    params,
  });
}

// ==================ProductLibrary=================

// ==================ActionLibrary=================
export function ActionLibrary_Add(data) {
  return axios({
    url: "/api/ActionLibrary/Add",
    method: "post",
    data,
  });
}

export function ActionLibrary_AddProperties(data) {
  return axios({
    url: "/api/ActionLibrary/AddProperties",
    method: "post",
    data,
  });
}

export function ActionLibrary_Delete(params) {
  return axios({
    url: "/api/ActionLibrary/Delete",
    method: "delete",
    params,
  });
}

export function ActionLibrary_UpdateRank(data) {
  return axios({
    url: "/api/ActionLibrary/UpdateRank",
    method: "put",
    data,
  });
}

export function ActionLibrary_Update(data) {
  return axios({
    url: "/api/ActionLibrary/Update",
    method: "put",
    data,
  });
}

export function ActionLibrary_Get(params) {
  return axios({
    url: "/api/ActionLibrary/Get",
    method: "get",
    params,
  });
}

// ==================ActionLibrary=================

// ==================Method=================
export function Method_Add(data) {
  return axios({
    url: "/api/Method/Add",
    method: "post",
    data,
  });
}
export function Method_AddDefault(data) {
  return axios({
    url: "/api/Method/AddDefault",
    method: "post",
    data,
  });
}
export function Method_AddProperties(data) {
  return axios({
    url: "/api/Method/AddProperties",
    method: "post",
    data,
  });
}

export function Method_AddResource(params) {
  return axios({
    url: "/api/Method/AddResource",
    method: "post",
    params,
  });
}

export function Method_Delete(params) {
  return axios({
    url: "/api/Method/Delete",
    method: "delete",
    params,
  });
}

export function Method_DeleteProperties(params) {
  return axios({
    url: "/api/Method/DeleteProperties",
    method: "delete",
    params,
  });
}

export function Method_DeleteResource(params) {
  return axios({
    url: "/api/Method/DeleteResource",
    method: "delete",
    params,
  });
}

export function Method_UpdateRank(data) {
  return axios({
    url: "/api/Method/UpdateRank",
    method: "put",
    data,
  });
}

export function Method_Update(data) {
  return axios({
    url: "/api/Method/Update",
    method: "put",
    data,
  });
}

export function Method_Get(params) {
  return axios({
    url: "/api/Method/Get",
    method: "get",
    params,
  });
}

export function Method_GetDefault(params) {
  return axios({
    url: "/api/Method/GetDefault",
    method: "get",
    params,
  });
}

// ==================Method=================

// ==================System=================
export function System_Add(data) {
  return axios({
    url: "/api/System/Add",
    method: "post",
    data,
  });
}

export function System_Switch(data) {
  return axios({
    url: "/api/System/Switch",
    method: "post",
    data,
  });
}

export function System_Delete(params) {
  return axios({
    url: "/api/System/Delete",
    method: "delete",
    params,
  });
}

export function System_DeleteBatch(data) {
  return axios({
    url: "/api/System/DeleteBatch",
    method: "delete",
    data,
  });
}

export function System_Update(data) {
  return axios({
    url: "/api/System/Update",
    method: "put",
    data,
  });
}

export function System_Get(params) {
  return axios({
    url: "/api/System/Get",
    method: "get",
    params,
  });
}

export function System_GetAll(params) {
  return axios({
    url: "/api/System/GetAll",
    method: "get",
    params,
  });
}

// ==================System=================

// ==================Role=================
export function Role_Add(data) {
  return axios({
    url: "/api/Role/Add",
    method: "post",
    data,
  });
}

export function Role_Delete(params) {
  return axios({
    url: "/api/Role/Delete",
    method: "delete",
    params,
  });
}

export function Role_DeleteBatch(data) {
  return axios({
    url: "/api/Role/DeleteBatch",
    method: "delete",
    data,
  });
}

export function Role_Update(data) {
  return axios({
    url: "/api/Role/Update",
    method: "put",
    data,
  });
}

export function Role_Get(params) {
  return axios({
    url: "/api/Role/Get",
    method: "get",
    params,
  });
}

export function Role_GetAll(params) {
  return axios({
    url: "/api/Role/GetAll",
    method: "get",
    params,
  });
}

// ==================Role=================
