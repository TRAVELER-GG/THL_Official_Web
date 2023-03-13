import  axios  from '@/utils/labelManagement'

// 增加
export function addLable(data) {
  return axios({
    url: "/label/add",
    method: "post",
    data,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
// 分页查询
export function getTableList(params) {
  return axios({
    url: "/label/page",
    method: "get",
    params,
  });
}

// 更新
export function updateLable(data) {
  return axios({
    url: "/label/edit",
    method: "post",
    data,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
// 删除
export function delLable(data) {
  return axios({
    url: "/label/delete",
    method: "post",
    data,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// 获取标签树
export function getLableList(params) {
  return axios({
    url: "/label/tree",
    method: "get",
    params,
  });
}
// 获取字典类型下所有字典值
export function getsysDictType(params) {
    return axios({
      url: "/sysDictType/dropDown",
      method: "get",
      params,
    });
  }
// 添加组件上的标签

export function addComponentLabel(params) {
  return axios({
    url: "/action/addLabel",
    method: "get",
    params,
  });
}  
// 删除组件上的标签

export function delComponentLabel(params) {
  return axios({
    url: "/action/deleteLabel",
    method: "get",
    params,
  });
}
// 根据标签id,查询含有该标签的组件

export function searchComponentLabel(params) {
  return axios({
    url: "/action/actionLb",
    method: "get",
    params,
  });
}
// 根据组件id,查询含有该组件的标签

export function searchLabelComponent(params) {
  return axios({
    url: "/action/lbAction",
    method: "get",
    params,
  });
}