exports.randInt = function (from, to){
    return Math.floor(Math.random()*(to-from+1)+from);
}

exports.area = function (radius){
    return Math.PI * radius * radius;
}