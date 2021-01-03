var modelCommon=function () {
    var arr=[4,5,6]
    function set(param) {
        arr=param;
      }
    function get() {
        return arr
      }
    return {get,set}
  }()