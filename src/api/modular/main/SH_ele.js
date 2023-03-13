import request from "@/utils/SH_Electric";

// =====Adapter====
export function GetMethodList(params) {
  return request({
    url: "/api/Adapter/GetMethodList",
    method: "get",
    params,
  });
}

export function GetLabel(params) {
  return request({
    url: "/api/Adapter/GetLabel",
    method: "get",
    params,
  });
}

export function GetComponentLabels(params) {
  return request({
    url: "/api/Adapter/GetComponentLabels",
    method: "get",
    params,
  });
}

export function GetComponentList(params) {
  return request({
    url: "/api/Adapter/GetComponentList",
    method: "get",
    params,
  });
}

export function ResourceParse(params) {
  return request({
    url: "/api/Parser/ResourceParse",
    method: "get",
    params,
  });
}

export function RefreshMethodResource(params) {
  return request({
    url: "/api/Adapter/RefreshMethodResource",
    method: "put",
    params,
  });
}

export function RefreshComponentResource(params) {
  return request({
    url: "/api/Adapter/RefreshComponentResource",
    method: "put",
    params,
  });
}

export function QueryComponentList(data) {
  return request({
    url: "/api/Adapter/QueryComponentList",
    method: "Post",
    data,
  });
}


// =====Analyzer====

export function ExecuteFile(params) {
  return request({
    url: "/api/Analyzer/ExecuteFile",
    method: "get",
    params,
  });
}

export function ExecuteModel(data) {
  return request({
    url: "/api/Analyzer/ExecuteModel",
    method: "post",
    data,
  });
}

export function MakeModel(data) {
  return request({
    url: "/api/Analyzer/MakeModel",
    method: "Post",
    data,
  });
}

export function DiffActions(data) {
  return request({
    url: "/api/Analyzer/DiffActions",
    method: "Post",
    data,
  });
}


// =====DirectoryNode====
export function GetDirectoryNode(data) {
  return request({
    url: "/api/DirectoryNode/Get",
    method: "Get",
    data,
  });
}


// =====Recommend====
export function GetOrderContext(data) {
  return request({
    url: "/api/Recommend/GetOrderContext", //获取排序字典
    method: "Get",
    data,
  });
}

export function SetOrderContext(data) {
  return request({
    url: "​/api​/Recommend​/SetOrderContext",   //设置排序字典
    method: "PUT",
    data,
  });
}

export function ComponentRecommend(params) {
  return request({
    url: "/api/Recommend/ComponentRecommend", //获取推荐组件列表
    method: "Get",
    params,
  });
}


export function GetCategory(data) {
  return request({
    url: "/api/Recommend/GetCategory", //获取特定类型的组件
    method: "Get",
    data,
  });
}



// =====Trace====

export function SetTrace(data) {
  return request({
    url: "/api/Trace/SetTrace",   //设置断点
    method: "put",
    data,
  });
}

export function GetResult(data) {
  return request({
    url: "/api/Trace/Watch",   //查看结果
    method: "PUT",
    data,
  });
}

export function SetPlay(data) {
  return request({
    url: "/api/Trace/Play",   //开始执行
    method: "PUT",
    data,
  });
}

export function SetContinue(data) {
  return request({
    url: "/api/Trace/Continue",   //继续执行
    method: "PUT",
    data,
  });
}

export function SetFinish(data) {
  return request({
    url: "/api/Trace/Stop",   //结束执行
    method: "PUT",
    data,
  });
}
