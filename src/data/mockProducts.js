function getFileShop(fileName){
    let  request = new XMLHttpRequest();
    request.open('GET', fileName, false);
    request.send(null);
    return  JSON.parse(request.responseText);
}
let sityData = getFileShop('https://admin.luxeshop-kg.ru/api/list')

export default sityData;
