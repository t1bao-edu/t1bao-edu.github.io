"use strict";function onBackKeyDown(a){console.log("onbackkey"),a.preventDefault()}function versionUpdate(){if(localStorage){var a=localStorage.getItem("version");a&&a===version||localStorage.setItem("cart",JSON.stringify({})),localStorage.setItem("version",version)}}document.addEventListener("deviceready",function(){console.log("deviceready")},!1),document.addEventListener("backbutton",onBackKeyDown,!1),angular.module("t1baoApp",["ngRoute"]).config(["$routeProvider","$httpProvider","$sceProvider",function(a,b,c){b.defaults.useXDomain=!0,b.defaults.withCredentials=!0,window.errors=webErrors.errors,c.enabled(!1),a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/user/home",{templateUrl:"views/user/home.html",controller:"UserCtrl"}).when("/user/login",{templateUrl:"views/user/login.html",controller:"UserCtrl"}).when("/user/register",{templateUrl:"views/user/register.html",controller:"UserCtrl"}).when("/user/phone/register",{templateUrl:"views/phone/input.html",controller:"UserCtrl"}).when("/user/email/register",{templateUrl:"views/email/input.html",controller:"UserCtrl"}).when("/user/password/retrieve",{templateUrl:"views/password/retrieve.html",controller:"UserCtrl"}).when("/oauth/:id",{templateUrl:"views/oauth/info.html",controller:"OauthCtrl"}).when("/grocery",{templateUrl:"views/grocery/list.html",controller:"GroceryCtrl"}).when("/grocery/list",{templateUrl:"views/grocery/list.html",controller:"GroceryCtrl"}).when("/grocery/recent",{templateUrl:"views/grocery/list.html",controller:"GroceryCtrl"}).when("/grocery/favorite",{templateUrl:"views/grocery/list.html",controller:"GroceryCtrl"}).when("/grocery/list/:page",{templateUrl:"views/grocery/list.html",controller:"GroceryCtrl"}).when("/grocery/nearby",{templateUrl:"views/grocery/list.html",controller:"GroceryCtrl"}).when("/grocery/nearby/:page",{templateUrl:"views/grocery/list.html",controller:"GroceryCtrl"}).when("/grocery/info/:id",{templateUrl:"views/grocery/info.html",controller:"GroceryCtrl"}).when("/grocery/profile/:id",{templateUrl:"views/grocery/profile.html",controller:"GroceryCtrl"}).when("/grocery/comments/:id",{templateUrl:"views/grocery/comments.html",controller:"GroceryCtrl"}).when("/order/list",{templateUrl:"views/order/list.html",controller:"OrderCtrl"}).when("/order/list/:page",{templateUrl:"views/order/list.html",controller:"OrderCtrl"}).when("/order/confirm/:id",{templateUrl:"views/order/confirm.html",controller:"OrderCtrl"}).when("/order/make/:id",{templateUrl:"views/order/make.html",controller:"OrderCtrl"}).when("/order/pay/:id",{templateUrl:"views/pay/select.html",controller:"PayCtrl"}).when("/pay/alipay/:id",{templateUrl:"views/pay/alipay.html",controller:"PayCtrl"}).when("/pay/weixin/:id",{templateUrl:"views/pay/weixin.html",controller:"PayCtrl"}).when("/order/success/:id",{templateUrl:"views/order/sucess.html",controller:"OrderCtrl"}).when("/order/failed/:id",{templateUrl:"views/order/failed.html",controller:"OrderCtrl"}).when("/user/settings",{templateUrl:"views/user/settings.html",controller:"UserCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"SystemCtrl"}).when("/user/feedback",{templateUrl:"views/user/feedback.html",controller:"UserCtrl"}).when("/user/profile",{templateUrl:"views/user/profile.html",controller:"UserCtrl"}).when("/user/subscribe",{templateUrl:"views/user/subscribe.html",controller:"UserCtrl"}).when("/user/subscribe/:page",{templateUrl:"views/user/subscribe.html",controller:"UserCtrl"}).when("/address/list",{templateUrl:"views/address/list.html",controller:"AddressCtrl"}).when("/address/list/:page",{templateUrl:"views/address/list.html",controller:"AddressCtrl"}).when("/address/add",{templateUrl:"views/address/add.html",controller:"AddressCtrl"}).when("/address/edit/:id",{templateUrl:"views/address/edit.html",controller:"AddressCtrl"}).when("/cart",{templateUrl:"views/cart/list.html",controller:"CartCtrl"})}]);var app=angular.module("t1baoApp");app.run(["$rootScope",function(a){a.$on("$routeChangeStart",function(){if(console.log("on change start"),console.log(arguments),localStorage)switch(location.hash){case"#/user/phone/register":case"#/user/email/register":case"#/user/register":case"#/user/login":break;default:localStorage.setItem("referrer",location.hash.substring(2))}})}]);var version="0.0.1";versionUpdate(),angular.module("t1baoApp").service("register",["modal","messages","$location","user",function(a,b,c,d){return{username:function(){var b=new FormData($("form")[0]),e=$("input[name=username]").val(),f=$("input[name=password]").val(),g=$("input[name=confirm]").val(),h=$("input[name=phone]").val(),i=$("input[name=email]").val();return e?f?f!==g?void a.alert("密码不一致!"):h&&validator&&!validator.isMobilePhone(h,"zh-CN")?void a.alert("手机号不正确!"):i&&validator&&!validator.isEmail(i)?void a.alert("邮箱不正确!"):(a.startProgress("正在注册用户..."),void d.register(b,function(b){a.stopProgress(function(){b.code===errors.SUCCESS.code?a.alert("注册成功！",function(){c.path("user/login")}):a.alert(b.message)})})):void a.alert("请输入密码!"):void a.alert("请输入用户名!")},phone:function(d){return d.phone?validator.isMobilePhone(d.phone,"zh-CN")?d.captchaString?($(".btn-register").attr("disabled","disabled"),void b.captcha.register({phone:d.phone,captcha:d.captchaString},function(b){switch(b.code){case errors.SUCCESS.code:a.alert("注册成功！",function(){c.path("user/login")});break;default:a.alert(b.message),setTimeout(function(){$(".btn-register").removeAttr("disabled")},5e3)}})):void a.alert("请输入验证码!",function(){}):void a.alert("手机号不正确!",function(){}):void a.alert("请输入手机号！",function(){})},email:function(d){return d.email?validator.isEmail(d.email)?d.captchaString?($(".btn-register").attr("disabled","disabled"),void b.captcha.register({email:d.email,captcha:d.captchaString},function(b){switch(console.log(b),b.code){case errors.SUCCESS.code:a.alert("注册成功！",function(){c.path("user/login")});break;default:a.alert(b.message),setTimeout(function(){$(".btn-register").removeAttr("disabled")},1e3)}})):void a.alert("请输入验证码!",function(){}):void a.alert("电子邮箱格式不正确!",function(){}):void a.alert("请输入电子邮箱！",function(){})}}}]),angular.module("t1baoApp").service("api",["$http","$rootScope","$location","url","modal","fallback","prefix",function(a,b,c,d,e,f,g){function h(a){return d+g+a}function i(d,g,i,k,l){j=!0;var m;m=g?g instanceof FormData?a.post(h(d),g,{withCredentials:!0,headers:{"Content-Type":void 0},transformRequest:angular.identity}):a.post(h(d),g):a.post(h(d)),k=k||f,m.success(function(a){if(j=!1,"object"!=typeof a)i(a);else if("code"in a&&!a.code)i(a);else if(l)l(a);else switch(a.code){case errors.DATABASE_ERROR.code:case errors.INPUT_INVALID.code:case errors.EXISTED.code:case errors.NOT_FOUND.code:e.alert(a.message,function(){e.stopProgress()});break;default:e.alert(a.message,function(){console.log("inside ok 1"),console.log(k),e.stopProgress(),b.$apply(function(){c.path(k)})})}}).error(function(){j=!1,"user/profile"===d&&c.path(k)})}var j=!1;return{send:function(a,b,c,d,e){i(a,b,c,d,e)},auth:function(){i("user/profile",null,function(a){a&&"code"in a&&(a.code?c.path("/user/home"):c.path("/user/login"))})},logout:function(a){i("user/logout",null,function(b){a(b)})},list:function(a,b,c){i(a,b,function(a){c(a)})},upload:function(b,d,g){a.post(h(b),d,{withCredentials:!0,headers:{"Content-Type":void 0},transformRequest:angular.identity}).success(function(a){if("code"in a)if("code"in a&&!a.code)g(a);else switch(a.code){case errors.USER_NOT_LOGIN.code:c.path(f);break;default:e.alert(a.message)}else;}).error(function(){c.path(f)})},success:function(a,b,d,e){i(a,b,function(a){if(e)return d(a);switch(a.code===errors.SUCCESS.code&&d(a),a.code){case errors.USER_NOT_LOGIN.code:case errors.NOT_LOGIN.code:c.path(f)}})},selfSend:function(a,b,c){i(a,b,function(a){a.code===errors.SUCCESS.code&&c(a)},null,c)},text:function(a,b,c){i(a,b,function(a){c(a)})}}}]),angular.module("t1baoApp").service("dialog",function(){return{alert:function(){},confirm:function(){},toast:function(){}}});var url="http://weixin.t1bao.com/";window.localStorage&&window.localStorage.getItem("url")&&(url=window.localStorage.getItem("url")),angular.module("t1baoApp").constant("url",url).constant("fallback","user/login").constant("prefix","customer/").constant("weixinOAuth","http://weixin.t1bao.com/weixin/auth/"),angular.module("t1baoApp").service("messages",["api",function(a){return{user:{login:function(b,c){a.success("user/login",b,c)},logout:function(b){a.success("user/logout",{},b)},profile:function(b,c){c?a.selfSend("user/profile",{},b):a.success("user/profile",{},b)},register:function(b,c){a.selfSend("user/register",b,c)},update:function(b,c){a.success("user/update",b,c)},feedback:function(b,c){a.success("user/feedback",b,c)},subscribed:function(b,c){a.success("user/subscribed",b,c)}},location:{update:function(b,c){a.success("location/update",b,c)}},grocery:{list:function(b,c){a.success("store/list",b,c)},nearby:function(b,c){a.success("store/nearby",b,c)},search:function(b,c){a.success("store/search",b,c)},info:function(b,c){a.success("store/info",b,c)},subscribe:function(b,c){a.success("store/subscribe",b,c)},unsubscribe:function(b,c){a.success("store/unsubscribe",b,c)},issubscribed:function(b,c){a.selfSend("store/issubscribed",b,c)}},merchandise:{list:function(b,c){a.success("merchandise/list",b,c)},info:function(b,c){a.success("merchandise/info",b,c)}},order:{create:function(b,c){a.success("order/create",b,c)},list:function(b,c){a.success("order/list",b,c)}},pay:{alipay:function(b,c){a.text("pay/alipay",b,c)}},address:{add:function(b,c){a.success("address/add",b,c)},list:function(b,c){a.success("address/list",b,c)},update:function(b,c){a.success("address/update",b,c)},remove:function(b,c){a.success("address/remove",b,c)}},category:{list:function(b,c){a.success("category/list",b,c)},merchandise:function(b,c){a.success("category/merchandise/list",b,c)}},captcha:{check:function(b,c){a.selfSend("captcha/check",b,c)},phone:function(b,c){a.selfSend("captcha/phone",b,c)},email:function(b,c){a.selfSend("captcha/email",b,c)},register:function(b,c){a.selfSend("captcha/register",b,c)}},password:{retrieve:function(b,c){a.selfSend("password/retrieve",b,c)}},oauth:{session:function(b,c){a.selfSend("weixin/session",{id:b},c)}}}}]),angular.module("t1baoApp").service("storage",function(){var a={};return{set:function(b,c){a[b]=c,window.localStorage&&window.localStorage.setItem(b,JSON.stringify(c))},get:function(b){if(a[b])return a[b];if(window.localStorage){var c=window.localStorage.getItem(b);try{c=JSON.parse(c)}catch(d){window.localStorage.setItem(b,null)}return c}}}}),angular.module("t1baoApp").service("images",function(){return{preview:function(a,b){function c(a){var c=new FileReader;c.readAsDataURL(a),c.onload=function(a){b(a.target.result)}}if(a)for(var d=0;d<a.length;d++)c(a[d])}}}),angular.module("t1baoApp").service("user",["messages","$location","modal",function(a,b,c){var d=a.user,e=null,f=!1;return{isLogin:function(){return f},profile:function(a,b){return e?void a(e):void d.profile(function(b){switch(e=b.data,console.log(b),b.code){case errors.SUCCESS.code:f=!0;break;default:f=!1}a(e)},b)},login:function(b,c){a.user.login(b,function(a){f=!0,c(a)})},logout:function(){a.user.logout(function(){f=!1,b.path("user/login")})},register:function(b,c){a.user.register(b,c)},update:function(d){a.user.update(d,function(){c.alert("更新成功！",function(){e=null,b.path("user/home")})})},feedback:function(b,c){a.user.feedback(b,c)},subscribed:function(b,c){a.user.subscribed(b,c)}}}]),angular.module("t1baoApp").service("merchandise",["messages",function(a){return{list:function(b,c,d){a.merchandise.list({id:b,page:c},d)}}}]),angular.module("t1baoApp").service("store",["messages",function(a){return{profile:a.store.profile,update:a.store.update}}]),angular.module("t1baoApp").service("lbs",["storage",function(a){return{getPos:function(b){if(navigator.geolocation){var c={enableHighAccuracy:!0,timeout:5e3,maximumAge:0},d=function(c){console.log(c);var d={latitude:c.coords.latitude,longitude:c.coords.longitude};console.log(d),a.set("pos",d),b(!0,c.coords)},e=function(a){b(!1,a)};navigator.geolocation.getCurrentPosition(d,e,c)}else console.log("not supported"),b(!1)}}}]),angular.module("t1baoApp").service("grocery",["messages",function(a){var b=a.grocery,c=null;return{subscribe:function(a,c){b.subscribe({id:a},c)},unsubscribe:function(a,c){b.unsubscribe({id:a},c)},list:function(a,d){b.list({page:a},function(a){c=a.data.results,d(a.data)})},search:function(a,d,e){b.search({page:d,q:a},function(a){c=a.data.results,e(a.data)})},nearby:function(a,d,e){b.nearby({latitude:a.latitude,longitude:a.longitude,page:d},function(a){c=a.data.results,e(a.data)})},getItem:function(a){if(!c)return null;for(var b=0;b<c.length;b++){var d=c[b];if(d&&d.id===a)return d}return null},info:b.info}}]),angular.module("t1baoApp").service("modal",["$timeout",function(a){return{alert:function(b,c){$("#modal-alert").modal("show"),$(".modal-body",$("#modal-alert")).html(b),$(".ok",$("#modal-alert")).unbind(),$(".ok",$("#modal-alert")).click(function(){$("#modal-alert").modal("hide"),$("#modal-progress").modal("hide"),a(function(){c&&c()},300)})},confirm:function(b,c,d){$("#modal-confirm").modal("show"),$(".modal-body",$("#modal-confirm")).html(b),$(".ok",$("#modal-confirm")).unbind(),$(".cancel",$("#modal-confirm")).unbind(),$(".ok",$("#modal-confirm")).click(function(){$("#modal-confirm").modal("hide"),a(function(){c&&c()},300)}),$(".cancel",$("#modal-confirm")).click(function(){$("#modal-confirm").modal("hide"),$("#modal-progress").modal("hide"),a(function(){d&&d()},300)})},startProgress:function(a){console.log(a),$("#modal-progress").modal("show"),$(".note",$("#modal-progress")).html(a)},stopProgress:function(b){$("#modal-progress").modal("hide"),b&&a(b,300)}}}]),angular.module("t1baoApp").service("address",["messages",function(a){return{add:a.address.add,list:a.address.list,update:a.address.update,remove:a.address.remove}}]),angular.module("t1baoApp").service("weixin",["$window","api",function(a,b){var c,d=["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","startRecord","stopRecord","onVoiceRecordEnd","playVoice","pauseVoice","stopVoice","onVoicePlayEnd","uploadVoice","downloadVoice","chooseImage","previewImage","uploadImage","downloadImage","translateVoice","getNetworkType","openLocation","getLocation","hideOptionMenu","showOptionMenu","hideMenuItems","showMenuItems","hideAllNonBaseMenuItem","showAllNonBaseMenuItem","closeWindow","scanQRCode","chooseWXPay","openProductSpecificView","addCard","chooseCard","openCard"],e=!1,f={error:function(a){console.log("inside error"),console.log(a)},ready:function(a){console.log("weixin ready"),e=!0,a&&a()},sign:function(a){var e=window.location.href,g=window.location.hash,h=e.indexOf(g)||e.length,i=e.substr(0,h);b.selfSend("weixin/sign",{url:i},function(b){console.log(b),0===b.code&&(c=b.data,c.jsApiList=d,c.debug=!0,wx.config(c),console.log("weixin config"),wx.ready(function(){f.ready(a)}),wx.error(f.error))})},pay:function(a,c){f.sign(function(){b.selfSend("weixin/pay",{id:a},function(a){if(0===a.code){var b=a.data;alert(JSON.stringify(b)),alert("new api 1"),WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:b.appId,timeStamp:b.timeStamp,"package":b["package"],nonceStr:b.nonceStr,signType:"MD5",sign:b.sign},function(a){WeixinJSBridge.log(a.err_msg),alert(a.err_code+a.err_desc+a.err_msg),c()})}else alert(JSON.stringify(a))})})},session:function(a,c){b.selfSend("weixin/session",{id:a},c)}};return f}]),angular.module("t1baoApp").filter("currency",function(){return function(a){return a=parseFloat(a||0).toFixed(2),(isNaN(a)||!a)&&(a=0),parseFloat(a).toFixed(2)}}),angular.module("t1baoApp").filter("distance",["storage",function(a){return function(b){function c(a){return a*(Math.PI/180)}function d(a,b){var d=6371;console.log(a),console.log(b);var e=c(a.latitude-b.latitude),f=c(a.longitude-b.longitude);console.log(e),console.log(f);var g=Math.sin(e/2)*Math.sin(e/2)+Math.cos(c(a.latitude))*Math.cos(c(b.latitude))*Math.sin(f/2)*Math.sin(f/2),h=2*Math.atan2(Math.sqrt(g),Math.sqrt(1-g)),i=d*h;return i}var e=a.get("pos");if(!(e&&b&&e.latitude&&e.longitude&&b.latitude&&b.longitude))return"～km";var f=d(e,b);return 1>f?f.toFixed(2)+"km":f.toFixed(0)+"km"}}]),angular.module("t1baoApp").filter("delivery",function(){return function(a){return a&&50>=a?a+"公里":1001===a?"市区":1002===a?"二环内":1003===a?"三环内":1004===a?"四环内":1005===a?"五环内":1006===a?"六环内":1007===a?"七环内":"未设定"}}),angular.module("t1baoApp").controller("MainCtrl",["$scope","$location","messages","dialog",function(a,b,c,d){var e=!1;a.login=function(){if(!e){e=!0;var a=new FormData($("form")[0]);c.user.login(a,function(){e=!1,d.toast("登录成功！"),b.path("user/home")})}},a.toRegister=function(){b.path("user/register")},b.path("grocery")}]),angular.module("t1baoApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("t1baoApp").controller("UserCtrl",["$scope","$route","$timeout","url","$location","messages","register","api","modal","storage","user","images",function(a,b,c,d,e,f,g,h,i,j,k,l){a.isEditing=!1,a.logined=!1,a.retrievePhone=!0,a.url=d;var m="user";switch(a.$on("$includeContentLoaded",function(){a.module=m}),b.current.$$route.originalPath){case"/user/login":break;case"/user/logout":case"/user/password/retrieve":case"/user/register":case"/user/phone/register":case"/user/email/register":case"/registration/success":break;case"/user/subscribe":case"/user/subscribe/:page":k.profile(function(){console.log("profile"),$(".progress-bar").hide();var c=b.current.params.page;c||(c=1),k.subscribed({page:c},function(b){a.groceries=b.data.results})});break;case"/user/profile":k.profile(function(b){console.log("profile"),$(".progress-bar").hide(),a.user=b,b.extra.logo&&(a.logo=b.extra.logo.url)}),a.edit=function(){a.isEditing=!0,$("input[disabled]").removeAttr("disabled"),$("textarea[disabled]").removeAttr("disabled")},a.update=function(){var b=new FormData($("form")[0]);k.update(b,function(){a.isEditing=!1,i.alert("更新成功！",function(){e.path("user/home")})})};break;default:k.profile(function(b){console.log("profile"),$(".progress-bar").hide(),a.logined=!0,a.user=b,b.extra.logo&&(a.logo=b.extra.logo.url),a.$$phase||(console.log("inside digest"),a.$apply())})}a.login=function(){var b=new FormData($("form")[0]);i.startProgress("正在登录..."),k.login(b,function(b){console.log(b),a.user=b.data,a.$$phase||a.$apply(),i.stopProgress(function(){e.path(localStorage.getItem("referrer")?localStorage.getItem("referrer"):"user/home")})})},a.logout=function(){k.logout()},a.register=function(){g.username()},a.toRegister=function(){e.path("user/phone/register")},a.toLogin=function(){e.path("user/login")},a.goAbout=function(){e.path("about")},a.goProfile=function(){e.path("user/profile")},a.goFeedback=function(){e.path("user/feedback")},a.feedback=function(){var a=new FormData($("form")[0]);console.log(a),i.startProgress("正在发送反馈信息..."),k.feedback(a,function(){i.stopProgress(function(){i.alert("反馈成功！",function(){e.path("user/home")})})})},a.fileChanged=function(){l.preview($("input[type=file][name=image]")[0].files,function(a){$("img[name=image-logo]").attr("src",a)})},a.saveProfile=function(){var a=new FormData($("form")[0]);console.log(a),i.startProgress("正在保存用户信息..."),k.update(a,function(){i.stopProgress(),c(function(){i.alert("更新成功！",function(){e.path("user/home")})},1e3)})},a.goAddresses=function(){e.path("address/list")},a.goOrders=function(){e.path("order/list")},a.goSubscribed=function(){e.path("user/subscribe")},a.goReceiver=function(){e.path("receivers/list")},a.getCaptcha=function(){return a.phone?validator.isMobilePhone(a.phone,"zh-CN")?($(".btn-get-sms-captcha").attr("disabled","disabled"),$(".btn-get-sms-captcha").html("正在发送..."),void f.captcha.phone({phone:a.phone},function(a){switch(a.code){case errors.SUCCESS.code:var b=60;$(".btn-register").removeAttr("disabled"),$(".btn-get-sms-captcha").html(b--+"秒后重新发送");var c=setInterval(function(){return 0>=b?($(".btn-get-sms-captcha").removeAttr("disabled"),$(".btn-get-sms-captcha").html("重新获取验证码"),void clearInterval(c)):void $(".btn-get-sms-captcha").html(b--+"秒后重新发送")},1e3)}})):void i.alert("手机号不正确",function(){}):void i.alert("请输入手机号！",function(){})},a.checked=!1,a.captcha=!1;var n;$(".btn-get-sms-captcha").attr("disabled","disabled"),$(".btn-get-email-captcha").attr("disabled","disabled"),$(".btn-register").attr("disabled","disabled"),$("[name=captchaImage]").keydown(function(){console.log("captcha"),n&&clearTimeout(n),n=setTimeout(function(){var b=$("[name=captchaImage]").val();f.captcha.check({captcha:b},function(b){switch(a.captcha=!0,b.code){case errors.SUCCESS.code:a.checked=!0,console.log("inside enabled"),$(".btn-get-sms-captcha").removeAttr("disabled"),$(".btn-get-email-captcha").removeAttr("disabled");break;default:a.checked=!1}})},1e3)}),a.updateImage=function(){var a=$("#image-captcha > span"),b=d+"captcha/image?t="+new Date;a.html('<img src="'+b+'"/>')},a.phoneRegister=function(){g.phone(a)},$(".btn-get-email-captcha").attr("disabled","disabled"),a.toEmailRegister=function(){e.path("/user/email/register")},a.getEmailCaptcha=function(){return a.email?validator.isEmail(a.email)?($(".btn-get-email-captcha").attr("disabled","disabled"),$(".btn-get-email-captcha").html("正在发送..."),void f.captcha.email({email:a.email},function(a){switch(a.code){case errors.SUCCESS.code:var b=60;$(".btn-register").removeAttr("disabled"),$(".btn-get-email-captcha").html(b--+"秒后重新发送");var c=setInterval(function(){return 0>=b?($(".btn-get-email-captcha").removeAttr("disabled"),$(".btn-get-email-captcha").html("重新获取验证码"),void clearInterval(c)):void $(".btn-get-email-captcha").html(b--+"秒后重新发送")},1e3)}})):void i.alert("电子邮箱地址不正确",function(){}):void i.alert("请输入电子邮箱地址！",function(){})},a.emailRegister=function(){g.email(a)},a.toLogin=function(){e.path("user/login")},a.retrieve=function(b){if(b){if(!a.phone)return void i.alert("请输入手机号！",function(){});if(!validator.isMobilePhone(a.phone,"zh-CN"))return void i.alert("手机格式不正确!",function(){});f.password.retrieve({phone:a.phone},function(a){switch(console.log(a),a.code){case errors.SUCCESS.code:i.alert("密码重置成功!"),c(function(){e.path("user/login")},3e3);break;default:i.alert("密码重置失败!原因:"+a.message)}})}else{if(!a.email)return void i.alert("请输入电子邮箱！",function(){});if(!validator.isEmail(a.email))return void i.alert("电子邮箱格式不正确!",function(){});f.password.retrieve({email:a.email},function(a){switch(console.log(a),a.code){case errors.SUCCESS.code:i.alert("密码重置成功!"),c(function(){e.path("user/login")},1e3);break;default:i.alert("密码重置失败!原因:"+a.message)}})}},a.retrieveSwitch=function(b){a.retrievePhone=b}}]),angular.module("t1baoApp").controller("StoreCtrl",["$scope","$location","api","dialog","store",function(a,b,c,d,e){a.isEditing=!1,e.profile(function(b){a.store=b.data,$(".progress-bar").hide()}),a.back=function(){b.path("user/home")},a.edit=function(){a.isEditing=!0,$("input[disabled]").removeAttr("disabled"),$("textarea[disabled]").removeAttr("disabled")},a.update=function(){var c=new FormData($("form")[0]);e.update(c,function(){a.isEditing=!1,d.toast("更新成功！"),setTimeout(function(){b.path("user/home")},1e3)})}}]),angular.module("t1baoApp").controller("ScanCtrl",["$scope","$location","$timeout","dialog","storage","barcode","api","hardware","images","merchandise",function(a,b,c,d,e,f,g,h,i,j){a.barcode=e.get("barcode"),a.back=function(){b.path("user/home")};var k=j.getList($(".progress-bar"),function(b,c){a.merchandises=b.results,a.total=b.total,a.page=b.page,a.lastPage=c});k.list(),a.next=function(){k.next()},a.prev=function(){k.prev()},a.add=function(){b.path("/scan/add/"+a.barcode.id)},a.backBarcode=function(){b.path("/scan/barcode")},a.save=function(){var a=new FormData($("form")[0]);g.success("merchandise/add",a,function(){d.toast("添加成功!"),setTimeout(function(){b.path("scan/barcode")},1e3)})},a.startCapture=function(){console.log("camera"),h.camera.start(function(a,b){$("input[type=file][name=image]").attr("src",b)})},a.fileChanged=function(){a.images=[],i.preview($("input[type=file][name=image]")[0].files,function(b){console.log(b),a.images.push(b),a.$apply()})},a.bind=function(a){var c=e.get("barcode");f.bind(c.id,a.id,function(){console.log(a),b.path("/barcode/list")})}}]),angular.module("t1baoApp").controller("GroceryCtrl",["$scope","$timeout","$interval","$route","$location","$filter","grocery","merchandise","storage","messages","user","modal","lbs","scroll","cart",function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){function p(){a.loading=!1,a.failedPos=!1,a.positioning=!1,a.searching=!1,a.startsearch=!1}var q=!1,r=d.current.params.page;r||(r=1),n.bottom(".grocery-list",function(){console.log("bottom"),q||(a.loading=!0,r++,g.list(r,function(b){p(),console.log(b),a.loading=!1,a.data=b,b.results.length<1&&(q=!0),a.groceries=a.groceries.concat(b.results)}))});var s="grocery",t=null;switch(a.fetched=!1,a.listed=!1,a.column="default",a.infoList=!0,a.loggined=k.isLogin(),k.profile(function(){},!0),p(),a.$on("$includeContentLoaded",function(){a.module=s}),d.current.$$route.originalPath){case"/grocery/recent":a.type="recent";var u=i.get("groceries")||[];a.groceries=u,console.log(u);break;case"/grocery":case"/grocery/list":case"/grocery/list/:page":p(),a.loading=!0,g.list(r,function(b){p(),console.log(b),a.loading=!1,a.data=b,a.groceries=b.results}),a.type="default";break;case"/grocery/comments":break;case"/grocery/nearby":case"/grocery/nearby/:page":p(),a.positioning=!0,a.type="nearby",m.getPos(function(b,c){p(),b?(a.loading=!0,g.nearby(c,r,function(b){console.log(b),a.loading=!1,a.data=b,a.groceries=b.results,a.$$phase||a.$apply()})):a.failedPos=!0,a.$$phase||a.$apply()});break;case"/grocery/favorite":case"/grocery/favorite/:page":a.type="favorite",k.subscribed({page:r},function(b){a.groceries=b.data.results});break;case"/grocery/info/:id":case"/grocery/info/:id/:page":var v=d.current.params.id;j.grocery.issubscribed({id:v},function(c){console.log(c),c.code===errors.SUCCESS.code?b(function(){a.fetched=!0,a.subscribed=c.data.subscribed,a.$$phase||a.$apply()},1e3):b(function(){a.fetched=!0,a.subscribed=!1,a.$$phase||a.$apply()},1e3)}),j.category.list({id:v,page:r},function(b){a.categories=b.data.results}),g.info({id:v},function(b){console.log(b),a.grocery=b.data,a.getFullMerchandise()})}a.count=0,a.order=function(){var a=d.current.params.id,b=i.get("cart");if(!b)return void l.alert("请添加商品到购物车!");var c=b[a];return!c||c.total<1?void l.alert("请添加商品到购物车!"):void(k.isLogin()?e.path("order/confirm/"+a):e.path("user/login"))},a.subscribe=function(b){console.log(b),a.subscribed?g.unsubscribe(b.id,function(b){console.log(b),a.subscribed=!1,a.$$phase||a.$apply()}):g.subscribe(b.id,function(b){console.log(b),a.subscribed=!0,a.$$phase||a.$apply()})},a.getCategory=function(c){function e(d,e){q||j.category.merchandise({id:g,page:d,category:c.id},function(c){c.data.results.length<1&&(q=!0),a.merchandises=a.merchandises.concat(c.data.results),o.notify(),b(function(){$(".grocery-merchandise-list").scrollTop(e)},500)})}q=!1;var f=1;a.merchandises=[];var g=d.current.params.id;$("#list-category > a").removeClass("active"),$("#list-category > a").each(function(){var a=$(this).attr("id");a==="category-"+c.id&&$(this).addClass("active")}),e(f),n.bottom(".grocery-merchandise-list",function(a){console.log("bottom"),e(f++,a)})},a.getFullMerchandise=function(){function b(b){$("#list-category > a").removeClass("active"),$("#list-category > a#category-0").addClass("active"),q||h.list(v,b,function(b){console.log(b),b.data.results.length<1&&(q=!0),a.merchandises||(a.merchandises=[]),a.merchandises=a.merchandises.concat(b.data.results),a.listed=!0,o.notify()})}q=!1,a.listed=!1,r=1,b(r++),n.bottom(".grocery-merchandise-list",function(){console.log("bottom"),b(r++)})},a.goShoppingCart=function(){e.path("cart")},a.nearby=function(){r=1,e.path("/grocery/nearby")},a.list=function(){r=1,a.listed=!1,a.loading=!1,e.path("/grocery/list")},a.recent=function(){r=1,e.path("/grocery/recent")},a.favorite=function(){r=1,e.path("/grocery/favorite")},a.selectGrocery=function(a){var b=i.get("groceries");b||(b=[]);for(var c=0;c<b.length;c++){var d=b[c];if(d.id===a.id)return void e.path("grocery/info/"+a.id)}b.push(a),i.set("groceries",b),e.path("grocery/info/"+a.id)},a.search=function(){function d(){var b=f.val();b&&b!==e&&(a.searching=!0,e=b,a.listed=!1,g.search(b,r,function(b){a.searching=!1,console.log(b),a.data=b,a.groceries=b.results}))}if(a.startsearch=!a.startsearch,a.startsearch){var e=null,f=$("#search-input");t=c(d,1e3),b(function(){f.focus()},500)}else $("#search-input").unbind(),c.cancel(t),t=null},a.closeSearch=function(){$("#search-input").val()?$("#search-input").val(""):a.startsearch=!1,a.loading=!0,g.list(r,function(b){a.loading=!1,a.data=b,a.groceries=b.results}),a.type="default"},a.showProfile=function(){a.column="profile",a.profiled=!0,a.infoList=!1,a.comments=!1},a.showInfo=function(){a.column="default",a.profiled=!1,a.infoList=!0,a.comments=!1},a.showComments=function(){a.column="comments",a.profiled=!1,a.infoList=!1,a.comments=!0}}]),angular.module("t1baoApp").controller("OrderCtrl",["$scope","$route","$timeout","messages","address","modal","storage","$location","scroll","cart",function(a,b,c,d,e,f,g,h,i,j){function k(){a.carts=j.get(),console.log("carts"),console.log(a.carts)}function l(b){o||d.order.list({page:b},function(b){return b.data.results.length<1?void(o=!0):(a.orders=a.orders||[],a.orders=a.orders.concat(b.data.results),a.total=b.data.total,void(a.page=b.data.page))})}function m(a){console.log("keydown 1");var b=$("#order-"+a.id);$(".cancel",b).removeClass("hidden").show(),$(".delete",b).removeClass("hidden").show(),v=!1}function n(a){console.log("keyup 1");var b=$("#order-"+a.id);$(".cancel",b).hide(),$(".delete",b).hide(),v=!0}var o=!1,p="order";a.$on("$includeContentLoaded",function(){a.module=p});var q=b.current.params.page;q||(q=1);var r=b.current.params.id;switch(b.current.$$route.originalPath){case"/order/confirm/:id":var s=j.get(r);a.carts=[s],console.log(a.carts),k(),j.register("cart",k);break;case"/order/make/:id":e.list({page:q},function(b){a.addresses=b.data.results;var c=j.get(r);a.grocery=c.grocery});break;case"/order/list":break;case"/order/list/:page":}l(q++),i.bottom(".order-main",function(){console.log("on bottom"),l(q++)});var t=[{name:"今天",value:1},{name:"一周内",value:7},{name:"10天内",value:10},{name:"30天内",value:30},{name:"3个月内",value:90},{name:"6个月内",value:180},{name:"1年内",value:365}];a.days=t;var u=null,v=!0;a.mouseup=function(a){console.log(a),u},a.mousedown=function(a){console.log("keydown"),console.log(a),u||(u=c(function(){v?m(a):n(a),u=null},1e3))},a.createOrder=function(){function b(a,b,c){var e=j.makeAnOrder(a,b);return e?void d.order.create({json:JSON.stringify(e)},c):void f.alert("请选择商品")}if(console.log("insdie"),!a.order)return void f.alert("订单信息缺失！");if(!a.order.receiver)return void f.alert("收货人未指定！");if(!a.order.address)return void f.alert("地址未指定！");if(!a.order.phone)return void f.alert("手机号未指定！");if(!validator.isMobilePhone(a.order.phone,"zh-CN"))return void f.alert("手机号格式错误！");var c=a.order;b(r,c,function(){$("form").each(function(){this.reset()});var a=g.get("cart");delete a[r],g.set("cart",a),h.path("order/list")})},$(".select-address").change(function(){console.log("inside change"),a.order=$(".select-address").find(":selected").text()}),a.selectAddress=function(b){console.log("inside change"),a.order=b},a.pay=function(a){a&&a.no&&h.path("order/pay/"+a.no)}}]),angular.module("t1baoApp").controller("SystemCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("t1baoApp").controller("AddressCtrl",["$scope","$route","$location","address","storage","modal",function(a,b,c,d,e,f){var g=b.current.params.page;g||(g=1);var h="user";switch(a.$on("$includeContentLoaded",function(){
a.module=h}),b.current.$$route.originalPath){case"/address/list":d.list({page:g},function(b){a.addresses=b.data.results});break;case"/address/add":break;case"/address/edit/:id":var i=b.current.params.id;if(i){var j=e.get("address");a.id=j.id,console.log(a.id),a.address=j.address,a.receiver=j.receiver,a.phone=j.phone}else c.path("address/list")}a.add=function(){var a=new FormData($("form")[0]);console.log(a),d.add(a,function(){f.alert("添加成功！",function(){c.path("address/list")})})},a.select=function(a){e.set("address",a),c.path("address/edit/"+a.id)},a.save=function(){var a=new FormData($("form")[0]);console.log(a),d.update(a,function(){f.alert("更新成功！",function(){c.path("address/list")})})},a.remove=function(a){f.confirm("操作不可能撤销，确定要删除吗？",function(){d.remove({id:a},function(){f.alert("删除成功！",function(){c.path("address/list")})})})}}]),angular.module("t1baoApp").controller("CartCtrl",["$scope","cart",function(a,b){function c(){a.carts=b.get(),console.log("carts"),console.log(a.carts)}var d="cart";a.$on("$includeContentLoaded",function(){a.module=d,b.notify()}),c(),b.register("cart",c)}]),angular.module("t1baoApp").controller("PayCtrl",["$scope","$route","$location","messages","weixin","url",function(a,b,c,d,e,f){var g=b.current.params.id;switch(a.module="order",b.current.$$route.originalPath){case"/order/pay/:id":break;case"/pay/weixin/:id":e.pay(g,function(a){console.log(a)});break;case"/pay/alipay/:id":d.pay.alipay({id:g},function(a){$(".text").html(a)});break;case"/order/list/:page":}a.back=function(){c.path("/order/pay/"+g)},a.alipay=function(){c.path("/pay/alipay/"+g)},a.weixinpay=function(){location.href=f+"weixin/pay/init/?id="+g+"&type=JSAPI"}}]),angular.module("t1baoApp").controller("OauthCtrl",["$scope","$route","$window","$location","weixin","weixinOAuth",function(a,b,c,d,e,f){var g=b.current.params.id;g?e.session(g,function(a){0===a.code?d.path("/grocery"):c.location=f}):c.location=f}]),angular.module("t1baoApp").service("cart",["storage",function(a){var b=a.get("cart"),c={item:null,grocery:null,cart:null};return b||(b={}),{get:function(a){if(a)return angular.copy(b[a]);var c=b,d=[];for(var e in c){var f=c[e],g=angular.copy(f),h=0,i=0;for(var j in g.merchandises){var k=g.merchandises[j];i+=(k.count-1+1)*(k.price-1+1),h+=k.count-1+1}g.total=i,g.summary=i,d.push(g)}return d},getCount:function(a,c){return b&&b[a]&&b[a].merchandises[c]?b[a].merchandises[c].count||0:0},restore:function(a){if(b&&b[a]){var c=0,d=0;for(var e in b[a].merchandises){c+=b[a].merchandises[e].count-1+1;var f=(b[a].merchandises[e].price||0)-1+1;d+=(b[a].merchandises[e].count-1+1)*f}return{total:c,summary:d}}},remove:function(c,d){if(console.log(c,d),console.log(b),!b)return void console.log("inside 1");if(!b[c]||!b[c].merchandises||!b[c].merchandises[d])return void console.log("inside 2");console.log("removed"),delete b[c].merchandises[d];var e=!1;for(var f in b[c].merchandises)if(b[c].merchandises[f]){e=!0;break}e||delete b[c],a.set("cart",b),this.notify()},inc:function(c,d,e,f){var g=c.id;b[g]||(b[g]={grocery:c,merchandises:{}}),b[g].merchandises[d.id]?b[g].merchandises[d.id].count++:b[g].merchandises[d.id]={count:1,merchandise:d,price:e,images:f},this.notify(),a.set("cart",b)},dec:function(c,d){var e=c.id;if(b[e]){if(!b[e].merchandises||!b[e].merchandises[d.id]||!b[e].merchandises[d.id].count)return void delete b[e];b[e].merchandises[d.id].count--,b[e].merchandises[d.id].count<=0&&delete b[e].merchandises[d.id];var f=!1;for(var g in b[e].merchandises)if(b[e].merchandises[g]){f=!0;break}f||delete b[e],this.notify(),a.set("cart",b)}},clear:function(){b={},this.notify(),a.set("cart",{})},order:function(a){var b=this.restore(a);if(!b)return!1;var c=this.get(a);return c.fee={delivery:c.grocery.delivery_fee,summary:b.summary,total:b.summary+c.grocery.delivery_fee},c.orderable=!0,c},register:function(a,b){for(var d=Object.keys(c),e=0;e<d.length;e++)a===d[e]&&(c[a]=b)},notify:function(){c.item&&c.item(),c.grocery&&c.grocery(),c.cart&&c.cart()},makeAnOrder:function(a,c){var d=b[a];if(!a||!d)return!1;var e={};e.store=a;var f=0,g=0,h=[];for(var i in d.merchandises){var j=d.merchandises[i];f+=(j.count-1+1)*(j.price-1+1),g+=j.count-1+1;var k={id:i,name:j.merchandise.name,brand:j.merchandise.brand,desc:j.merchandise.desc,number:j.count,price:j.price};j.images&&j.images.length&&(k.url=j.images[0].url),h.push(k)}return h.length?(e.summary=f,e.merchandises=h,e.total=g,e.receiver=c.receiver,e.address=c.address,e.phone=c.phone,e.payment=c.payment,e.delivery=c.delivery,e.delivery_fee=d.grocery.delivery_fee,e):!1}}}]),angular.module("t1baoApp").service("scroll",function(){return{bottom:function(a,b){$(a).unbind(),$(a).on("scroll",function(){var a=this.scrollHeight-this.scrollTop,c=this.clientHeight;a===c&&b&&b(this.scrollTop)})}}}),angular.module("t1baoApp").directive("merchandise",function(){return{templateUrl:"views/merchandise/item.html",restrict:"E",link:function(){}}}),angular.module("t1baoApp").directive("merchandiseCounter",["cart",function(a){return{templateUrl:"views/merchandise/counter.html",restrict:"C",link:function(b){var c=b.grocery||b.cart.grocery;b.count=a.getCount(c.id,b.merchandise.merchandise.id),b.inc=function(){b.count++,a.inc(c,b.merchandise.merchandise,b.merchandise.price,b.merchandise.images)},b.dec=function(){var c=b.grocery||b.cart.grocery;b.count<1||(b.count--,a.dec(c,b.merchandise.merchandise))}}}}]),angular.module("t1baoApp").directive("merchandiseGrocery",function(){return{templateUrl:"views/merchandise/grocery.html",restrict:"C",link:function(){}}}),angular.module("t1baoApp").directive("merchandiseGroceryList",function(){return{template:"<div></div>",restrict:"E",link:function(){}}}),angular.module("t1baoApp").directive("groceryCart",["cart",function(a){return{templateUrl:"views/cart/bar.html",restrict:"E",link:function(b){function c(){if(b.grocery){var c=a.restore(b.grocery.id);console.log(c),c?(b.cartTotal=c.total,b.cartSummary=c.summary):(b.cartTotal=0,b.cartSummary=0)}}a.register("grocery",c)}}}]),angular.module("t1baoApp").directive("merchandiseCart",["cart",function(a){return{templateUrl:"views/merchandise/cart.html",restrict:"C",link:function(b,c){b.remove=function(b,d){a.remove(b,d),a.notify(),angular.element(c).remove()}}}}]),angular.module("t1baoApp").directive("cartGroceryItem",["cart","$timeout","modal","user","$location",function(a,b,c,d,e){return{templateUrl:"views/cart/item.html",restrict:"C",link:function(f,g){function h(){if(f.cart){var b=a.restore(f.cart.grocery.id);console.log(b),console.log(f.cart.grocery),b?(f.cart.status=b,f.cart.status.deliveryFee=f.cart.grocery.delivery_fee):angular.element(g).remove()}}console.log("inside item"),console.log(g),a.register("item",h),h(),f.cart&&f.cart.grocery&&f.cart.grocery.id||b(h,1e3),f.order=function(b){var f=a.order(b);return console.log(b),console.log(!f),f&&f.orderable?void(d.isLogin()?e.path("order/make/"+b):e.path("user/login")):void c.alert("购物车好象是空的？")}}}}]);