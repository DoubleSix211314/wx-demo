//预处理导演、影人展示数据
function convertToCastString(casts){
  var castsjoin = ""
  for (var idx in casts) {
    castsjoin = castsjoin + casts[idx].name + "/";
  }
  return castsjoin.substring(0, castsjoin.length-2);
}

//预处理影人模块中的数据
function convertToCastInfos(casts){
  var castsArray = []
  for (var idx in casts) {
    var cast = {
      img: casts[idx].avatars ? casts[idx].avatars.large : "",
      name: casts[idx].name
    }
    castsArray.push(cast)
  }
  return castsArray
}

//导出方法使用
export {
  convertToCastString,
  convertToCastInfos
}