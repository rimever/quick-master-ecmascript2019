var Counter = function () {
    var _this = this;
    _this.count = 0;
    setInterval(function () {
        _this.count++;
        console.log(_this.count);
    },1000);
};
var c = new Counter();