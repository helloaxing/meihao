function prevent(){
    // window.close(); //关闭当前窗口(防抽)
    window.location="about:blank"; //将当前窗口跳转置空白页
}
//查看控制台状态
function ck() {
    console.profile();
    console.profileEnd();
    //判断一下profiles里面有没有东西，如果有，肯定有人按F12了，没错！！
    if (console.clear) {
        console.clear() 
    };
    if (typeof console.profiles =="object"){
        return console.profiles.length > 0;
    }
}

function fire(){
    if((window.console && 
        (console.firebug || console.table && /firebug/i.test(console.table()) )) || 
        (typeof opera == 'object' && typeof opera.postError == 'function' && 
            console.profile.length > 0)){
        prevent();
    }

    if(typeof console.profiles =="object"&&console.profiles.length > 0){
        prevent();
    }
}
//执行
fire();

window.onresize = function(){
//判断当前窗口内页高度和窗口高度，如果差值大于200，那么呵呵
if((window.outerHeight-window.innerHeight)>200)
   prevent();
}