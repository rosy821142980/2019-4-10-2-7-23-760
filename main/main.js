module.exports = function main(inputs) {
    // write your code here...
    var dis = inputs.distance;
    var time = inputs.parkTime;
    var start = 6, long_p = 1.2, park_p = 0.25, p = 0.8;
    var price = 0;
    if (dis<=2) {
        price = Math.round(start + time * park_p);
    } else if(dis>=8){
        price = Math.round(10.8+ (dis-8)*long_p + time * park_p);
    } else{
        price = Math.round(6 + (dis-2)*p + time * park_p);
    }
    return price;
};	
