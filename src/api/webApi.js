import request from '@/utils/request'


export function Get_News_List(params) {
  return request({
    url: "/Api_Alumni_Union/News_List",
    method: "GET",
    params,
  });
}



