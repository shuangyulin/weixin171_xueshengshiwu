(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jiaoshi-add-or-update"],{"0044":function(r,e,i){var t=i("6e32");"string"===typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var a=i("4f06").default;a("1fb773e0",t,!0,{sourceMap:!1,shadowMode:!1})},"1af3":function(r,e,i){"use strict";var t=i("0044"),a=i.n(t);a.a},"572e":function(r,e,i){"use strict";var t,a=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("教师工号")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.jiaoshigonghao,placeholder:"教师工号"},model:{value:r.ruleForm.jiaoshigonghao,callback:function(e){r.$set(r.ruleForm,"jiaoshigonghao",e)},expression:"ruleForm.jiaoshigonghao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("密码")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.mima,placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("教师姓名")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.jiaoshixingming,placeholder:"教师姓名"},model:{value:r.ruleForm.jiaoshixingming,callback:function(e){r.$set(r.ruleForm,"jiaoshixingming",e)},expression:"ruleForm.jiaoshixingming"}})],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("性别")]),i("v-uni-picker",{attrs:{value:r.xingbieIndex,range:r.xingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.xingbieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(71, 177, 60, 1)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"dashed "}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.zhengjianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("证件")]),i("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.zhengjian?i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.zhengjian,mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0.25)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("联系电话")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(71, 177, 60, 1)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"dashed ",height:"88rpx"},attrs:{disabled:r.ro.lianxidianhua,placeholder:"联系电话"},model:{value:r.ruleForm.lianxidianhua,callback:function(e){r.$set(r.ruleForm,"lianxidianhua",e)},expression:"ruleForm.lianxidianhua"}})],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"0",backgroundColor:"rgba(71, 177, 60, 1)",borderColor:"rgba(71, 177, 60, 1)",borderRadius:"80rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},n=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return t}))},"6e32":function(r,e,i){var t=i("24fb");e=t(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-0b99a7a4]{padding:%?20?%}.content[data-v-0b99a7a4]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-0b99a7a4]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-0b99a7a4]{width:%?180?%}.avator[data-v-0b99a7a4]{width:%?150?%;height:%?60?%}.right-input[data-v-0b99a7a4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-0b99a7a4]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-0b99a7a4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-0b99a7a4]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-0b99a7a4]{border:0}.cu-form-group uni-input[data-v-0b99a7a4]{padding:0 %?30?%}.uni-input[data-v-0b99a7a4]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-0b99a7a4]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-0b99a7a4]::after{line-height:%?80?%}.select .uni-input[data-v-0b99a7a4]{line-height:%?80?%}.input .right-input[data-v-0b99a7a4]{line-height:%?88?%}',""]),r.exports=e},"6f91":function(r,e,i){"use strict";i.r(e);var t=i("c2b6"),a=i.n(t);for(var n in t)"default"!==n&&function(r){i.d(e,r,(function(){return t[r]}))}(n);e["default"]=a.a},"890f":function(r,e,i){"use strict";i.r(e);var t=i("572e"),a=i("6f91");for(var n in a)"default"!==n&&function(r){i.d(e,r,(function(){return a[r]}))}(n);i("1af3");var o,s=i("f0c5"),d=Object(s["a"])(a["default"],t["b"],t["c"],!1,null,"0b99a7a4",null,!1,t["a"],o);e["default"]=d.exports},c2b6:function(r,e,i){"use strict";var t=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a481"),i("c5f6"),i("f559"),i("ac6a"),i("28a5"),i("96cf");var a=t(i("3b8d")),n=t(i("e2b1")),o={data:function(){return{cross:"",ruleForm:{jiaoshigonghao:"",mima:"",jiaoshixingming:"",xingbie:"",zhengjian:"",lianxidianhua:"",sfsh:"",shhf:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{jiaoshigonghao:!1,mima:!1,jiaoshixingming:!1,xingbie:!1,zhengjian:!1,lianxidianhua:!1,sfsh:!1,shhf:!1}}},components:{wPicker:n.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(e){var i,t,a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(i);case 3:if(t=r.sent,this.user=t.data,this.ro.jiaoshixingming=!0,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=15;break}return this.ruleForm.id=e.id,r.next=13,this.$api.info("jiaoshi",this.ruleForm.id);case 13:t=r.sent,this.ruleForm=t.data;case 15:if(this.cross=e.cross,!e.cross){r.next=47;break}a=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(a);case 19:if((r.t1=r.t0()).done){r.next=47;break}if(n=r.t1.value,"jiaoshigonghao"!=n){r.next=25;break}return this.ruleForm.jiaoshigonghao=a[n],this.ro.jiaoshigonghao=!0,r.abrupt("continue",19);case 25:if("mima"!=n){r.next=29;break}return this.ruleForm.mima=a[n],this.ro.mima=!0,r.abrupt("continue",19);case 29:if("jiaoshixingming"!=n){r.next=33;break}return this.ruleForm.jiaoshixingming=a[n],this.ro.jiaoshixingming=!0,r.abrupt("continue",19);case 33:if("xingbie"!=n){r.next=37;break}return this.ruleForm.xingbie=a[n],this.ro.xingbie=!0,r.abrupt("continue",19);case 37:if("zhengjian"!=n){r.next=41;break}return this.ruleForm.zhengjian=a[n],this.ro.zhengjian=!0,r.abrupt("continue",19);case 41:if("lianxidianhua"!=n){r.next=45;break}return this.ruleForm.lianxidianhua=a[n],this.ro.lianxidianhua=!0,r.abrupt("continue",19);case 45:r.next=19;break;case 47:this.styleChange();case 48:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(r){this.xingbieIndex=r.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},zhengjianTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.zhengjian="upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(){var e,i,t,a,n,o,s,d,u,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.jiaoshigonghao){r.next=3;break}return this.$utils.msg("教师工号不能为空"),r.abrupt("return");case 3:if(this.ruleForm.mima){r.next=6;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 6:if(!this.ruleForm.lianxidianhua||this.$validate.isMobile(this.ruleForm.lianxidianhua)){r.next=9;break}return this.$utils.msg("联系电话应输入手机格式"),r.abrupt("return");case 9:if(!this.cross){r.next=25;break}if(a=uni.getStorageSync("statusColumnName"),n=uni.getStorageSync("statusColumnValue"),""==a){r.next=25;break}if(o=uni.getStorageSync("crossObj"),a.startsWith("[")){r.next=21;break}for(s in o)s==a&&(o[s]=n);return d=uni.getStorageSync("crossTable"),r.next=19,this.$api.update("".concat(d),o);case 19:r.next=25;break;case 21:e=Number(uni.getStorageSync("userid")),i=o["id"],t=uni.getStorageSync("statusColumnName"),t=t.replace(/\[/,"").replace(/\]/,"");case 25:if(!i||!e){r.next=47;break}return this.ruleForm.crossuserid=e,this.ruleForm.crossrefid=i,u={page:1,limit:10,crossuserid:e,crossrefid:i},r.next=31,this.$api.list("jiaoshi",u);case 31:if(l=r.sent,!(l.data.total>=t)){r.next=37;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 37:if(!this.ruleForm.id){r.next=42;break}return r.next=40,this.$api.update("jiaoshi",this.ruleForm);case 40:r.next=44;break;case 42:return r.next=44,this.$api.add("jiaoshi",this.ruleForm);case 44:this.$utils.msgBack("提交成功");case 45:r.next=55;break;case 47:if(!this.ruleForm.id){r.next=52;break}return r.next=50,this.$api.update("jiaoshi",this.ruleForm);case 50:r.next=54;break;case 52:return r.next=54,this.$api.add("jiaoshi",this.ruleForm);case 54:this.$utils.msgBack("提交成功");case 55:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,a=e.getDate();return"start"===r?i-=60:"end"===r&&(i+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(i,"-").concat(t,"-").concat(a)},toggleTab:function(r){this.$refs[r].show()}}};e.default=o}}]);