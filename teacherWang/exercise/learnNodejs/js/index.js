var modelIndex=function () {
    var arr=[1,2,3]
    function set(param) {
        arr=param;
      }
    function get() {
        return arr
      }
    return {get,set}
  }()