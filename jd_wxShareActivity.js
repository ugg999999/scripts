/*
活动名称：分享有礼 · 超级无线
活动链接：https://lzkjdz-isv.isvjd.com/wxShareActivity/activity/activity?activityId=<活动id>
环境变量：jd_wxShareActivity_activityId // 活动id
         jd_wxShareActivity_helpnum // 需要助力的账号数量
				 jd_wxShareActivity_blacklist="" // 黑名单 用&隔开 pin值
				 JD_LZ_OPEN="false" //关闭LZ相关活动运行
				 
				 建议只跑助力数量变量不要太多，会黑ip

cron:10 10 10 10 *
============Quantumultx===============
[task_local]
#LZ分享有礼
10 10 10 10 * jd_wxShareActivity.js, tag=LZ分享有礼, enabled=true
*/

const $ = new Env("分享有礼-加密");

var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxeda75=["\x69\x73\x4E\x6F\x64\x65","\x2E\x2F\x6A\x64\x43\x6F\x6F\x6B\x69\x65","","\x2E\x2F\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79","\x2E\x2F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x2F\x6B\x72\x67\x65\x74\x54\x6F\x6B\x65\x6E","\x61\x63\x74\x69\x76\x69\x74\x79\x45\x6E\x64","\x6A\x64\x5F\x77\x78\x53\x68\x61\x72\x65\x41\x63\x74\x69\x76\x69\x74\x79\x5F\x68\x65\x6C\x70\x6E\x75\x6D","\x65\x6E\x76","\x6A\x64\x5F\x77\x78\x53\x68\x61\x72\x65\x41\x63\x74\x69\x76\x69\x74\x79\x5F\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x4A\x44\x5F\x44\x45\x42\x55\x47","\x66\x61\x6C\x73\x65","\x6C\x6F\x67","\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44","\x67\x65\x74\x64\x61\x74\x61","\x5B\x5D","\x70\x61\x72\x73\x65","\x63\x6F\x6F\x6B\x69\x65","\x6D\x61\x70","\x72\x65\x76\x65\x72\x73\x65","\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32","\x43\x6F\x6F\x6B\x69\x65\x4A\x44","\x66\x69\x6C\x74\x65\x72","\x4A\x44\x5F\x4C\x5A\x5F\x4F\x50\x45\x4E","\x74\x72\x75\x65","\x77\x68\x69\x74\x65\x6C\x69\x73\x74","\x6A\x64\x5F\x77\x78\x53\x68\x61\x72\x65\x41\x63\x74\x69\x76\x69\x74\x79\x5F\x77\x68\x69\x74\x65\x6C\x69\x73\x74","\x62\x6C\x61\x63\x6B\x6C\x69\x73\x74","\x6A\x64\x5F\x77\x78\x53\x68\x61\x72\x65\x41\x63\x74\x69\x76\x69\x74\x79\x5F\x62\x6C\x61\x63\x6B\x6C\x69\x73\x74","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\u274C\x20","\x6E\x61\x6D\x65","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x21","\x63\x61\x74\x63\x68","\x0A\u274C\x20\x20\u5DF2\u8BBE\u7F6E\u5168\u5C40\u5173\u95ED\x4C\x5A\u76F8\u5173\u6D3B\u52A8\x0A","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x6D\x73\x67","\x6D\x61\x78\x53\x68\x61\x72\x65\x54\x69\x6D\x65\x73","\u6D3B\u52A8\u5165\u53E3\uFF1A\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x6B\x6A\x64\x7A\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x64\x2E\x63\x6F\x6D\x2F\x77\x78\x53\x68\x61\x72\x65\x41\x63\x74\x69\x76\x69\x74\x79\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x3F\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D","\x55\x73\x65\x72\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x69\x6E\x64\x65\x78","\x69\x73\x4C\x6F\x67\x69\x6E","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x0A\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7","\u3011","\u83B7\u53D6\u52A9\u529B\u7801\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x0A","\u3010\u63D0\u793A\u3011\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548","\u4EAC\u4E1C\u8D26\u53F7","\x20","\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x5C\x6E\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x62\x65\x61\x6E","\x41\x44\x49\x44","\x78\x78\x78\x78\x78\x78\x78\x78\x2D\x78\x78\x78\x78\x2D\x78\x78\x78\x78\x2D\x78\x78\x78\x78\x2D\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78","\x55\x55\x49\x44","\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78","\x61\x75\x74\x68\x6F\x72\x43\x6F\x64\x65","\x6C\x65\x6E\x67\x74\x68","\x61\x75\x74\x68\x6F\x72\x4E\x75\x6D","\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64","\x61\x63\x74\x69\x76\x69\x74\x79\x55\x72\x6C","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x6B\x6A\x64\x7A\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x77\x78\x53\x68\x61\x72\x65\x41\x63\x74\x69\x76\x69\x74\x79\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x3F\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D","\x77\x61\x69\x74","\x63\x75\x73\x74\x6F\x6D\x65\x72\x2F\x67\x65\x74\x53\x69\x6D\x70\x6C\x65\x41\x63\x74\x49\x6E\x66\x6F\x56\x6F","\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D","\x64\x72\x61\x77\x43\x6F\x6E\x74\x65\x6E\x74\x56\x4F\x73","\u2756\x20\u5206\u4EAB","\x73\x68\x61\x72\x65\x54\x69\x6D\x65\x73","\u4EBA\u9886\u53D6\x20\xB7\x20","\x0A","\x65\x72\x72\x6F\x72\x4D\x65\x73\x73\x61\x67\x65","\u52A9\u529B\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x0A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x6B\x6A\x64\x7A\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x77\x78\x53\x68\x61\x72\x65\x41\x63\x74\x69\x76\x69\x74\x79\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x2F","\x3F\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D","\x68\x65\x6C\x70\x52\x65\x73\x75\x6C\x74","\u53BB\u52A9\u529B\x20\u279C\x20","\u6D3B\u52A8\u592A\u706B\u7206\uFF0C\u8FD8\u662F\u53BB\u4E70\u4E70\u4E70\u5427","\x0A\u52A9\u529B\u6B21\u6570\u5DF2\u6EE1\u8DB3\u6700\u9AD8\u5956\u54C1\u8981\u6C42\uFF0C\u76F4\u63A5\u5F00\u59CB\u9886\u53D6\u5956\u54C1","\u9886\u53D6\u5956\u52B1\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x0A","\x73\x65\x63\x72\x65\x74\x50\x69\x6E","\x63\x6F\x6D\x6D\x6F\x6E\x2F\x61\x63\x63\x65\x73\x73\x4C\x6F\x67\x57\x69\x74\x68\x41\x44","\x76\x65\x6E\x64\x65\x72\x49\x64\x3D","\x76\x65\x6E\x64\x65\x72\x49\x64","\x26\x63\x6F\x64\x65\x3D\x32\x35\x26\x70\x69\x6E\x3D","\x26\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D","\x26\x70\x61\x67\x65\x55\x72\x6C\x3D","\x26\x73\x75\x62\x54\x79\x70\x65\x3D\x61\x70\x70\x26\x61\x64\x53\x6F\x75\x72\x63\x65\x3D\x6E\x75\x6C\x6C","\x61\x63\x74\x69\x76\x69\x74\x79\x43\x6F\x6E\x74\x65\x6E\x74","\x26\x70\x69\x6E\x3D","\x26\x66\x72\x69\x65\x6E\x64\x55\x75\x69\x64\x3D","\u6CA1\u6709\u6210\u529F\u83B7\u53D6\u5230\u7528\u6237\u4FE1\u606F","\x67\x65\x74\x50\x72\x69\x7A\x65","\x26\x64\x72\x61\x77\x49\x6E\x66\x6F\x49\x64\x3D","\x64\x72\x61\x77\x49\x6E\x66\x6F\x49\x64","\x72\x65\x73\x75\x6C\x74","\x64\x61\x74\x61","\u52A9\u529B\u7801\uFF1A","\x6D\x79\x55\x75\x69\x64","\uD83C\uDF89\x20\u83B7\u5F97\uFF1A","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x73\x74\x61\x74\x75\x73","\x70\x6F\x73\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x6B\x6A\x64\x7A\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x6B\x6A\x64\x7A\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x77\x78\x53\x68\x61\x72\x65\x41\x63\x74\x69\x76\x69\x74\x79\x2F","\x6C\x7A\x6B\x6A\x64\x7A\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x58\x4D\x4C\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74","\x7A\x68\x2D\x63\x6E","\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x6B\x6A\x64\x7A\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x6D","\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x39\x2E\x35\x2E\x34\x3B\x31\x33\x2E\x36\x3B","\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x77\x69\x66\x69\x3B\x41\x44\x49\x44\x2F","\x3B\x6D\x6F\x64\x65\x6C\x2F\x69\x50\x68\x6F\x6E\x65\x31\x30\x2C\x33\x3B\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2F\x30\x3B\x61\x70\x70\x42\x75\x69\x6C\x64\x2F\x31\x36\x37\x36\x36\x38\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x33\x5F\x36\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x3B\x49\x73\x76\x54\x6F\x6B\x65\x6E\x3D","\x54\x6F\x6B\x65\x6E","\x3B\x41\x55\x54\x48\x5F\x43\x5F\x55\x53\x45\x52\x3D","\x41\x55\x54\x48\x5F\x43\x5F\x55\x53\x45\x52","\x74\x6F\x6B\x65\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x6B\x6A\x64\x7A\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x64\x2E\x63\x6F\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x6B\x6A\x64\x7A\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x63\x75\x73\x74\x6F\x6D\x65\x72\x2F\x67\x65\x74\x4D\x79\x50\x69\x6E\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x6B\x6A\x64\x7A\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D","\x75\x73\x65\x72\x49\x64\x3D","\x26\x74\x6F\x6B\x65\x6E\x3D","\x26\x66\x72\x6F\x6D\x54\x79\x70\x65\x3D\x41\x50\x50","\x6E\x69\x63\x6B\x6E\x61\x6D\x65","\x3B\x20\x41\x55\x54\x48\x5F\x43\x5F\x55\x53\x45\x52\x3D","\u4EAC\u4E1C\u8FD4\u56DE\u4E86\u7A7A\u6570\u636E","\u6CA1\u6709\u6210\u529F\u83B7\u53D6\u5230\u7528\u6237\u9274\u6743\u4FE1\u606F","\x4A\x44\x5F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x2E\x2F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54\x53","\x4A\x44\x55\x41","\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x39\x2E\x34\x2E\x34\x3B\x31\x34\x2E\x33\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x34\x67\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31","\u6D3B\u52A8\u5DF2\u7ED3\u675F","\x67\x65\x74","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\u5F53\u524D\u5DF2\u8BBE\u7F6E\u9ED1\u540D\u5355\uFF1A","\x26","\x73\x70\x6C\x69\x74","\x66\x72\x6F\x6D","\x6A\x6F\x69\x6E","\x73\x70\x6C\x69\x63\x65","\x75\x6E\x73\x68\x69\x66\x74","\x74\x6F\x53\x74\x72","\x74\x6F\x4F\x62\x6A","\u5F53\u524D\u5DF2\u8BBE\u7F6E\u767D\u540D\u5355\uFF1A","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x73\x65\x74\x2D\x63\x6F\x6F\x6B\x69\x65","\x68\x65\x61\x64\x65\x72\x73","\x3D","\x69\x6E\x64\x65\x78\x4F\x66","\x3B","\x73\x75\x62\x73\x74\x72","\x78","\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65","\x72\x65\x70\x6C\x61\x63\x65","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];const jdCookieNode=$[__Oxeda75[0x0]]()?require(__Oxeda75[0x1]):__Oxeda75[0x2];const notify=$[__Oxeda75[0x0]]()?require(__Oxeda75[0x3]):__Oxeda75[0x2];const getToken=require(__Oxeda75[0x4]);let cookiesArr=[],cookie=__Oxeda75[0x2],message=__Oxeda75[0x2];let authorCodeList=[];let ownCookieNum=1;let isGetAuthorCodeList=true;let activityId=__Oxeda75[0x2];$[__Oxeda75[0x5]]= false;let lz_cookie={};if(process[__Oxeda75[0x7]][__Oxeda75[0x6]]&& process[__Oxeda75[0x7]][__Oxeda75[0x6]]!= __Oxeda75[0x2]){ownCookieNum= process[__Oxeda75[0x7]][__Oxeda75[0x6]]};if(process[__Oxeda75[0x7]][__Oxeda75[0x8]]&& process[__Oxeda75[0x7]][__Oxeda75[0x8]]!= __Oxeda75[0x2]){activityId= process[__Oxeda75[0x7]][__Oxeda75[0x8]]};if($[__Oxeda75[0x0]]()){Object[__Oxeda75[0xb]](jdCookieNode)[__Oxeda75[0xa]]((_0x8a5bxc)=>{cookiesArr[__Oxeda75[0x9]](jdCookieNode[_0x8a5bxc])});if(process[__Oxeda75[0x7]][__Oxeda75[0xc]]&& process[__Oxeda75[0x7]][__Oxeda75[0xc]]=== __Oxeda75[0xd]){console[__Oxeda75[0xe]]= ()=>{}}}else {let cookiesData=$[__Oxeda75[0x10]](__Oxeda75[0xf])|| __Oxeda75[0x11];cookiesData= JSON[__Oxeda75[0x12]](cookiesData);cookiesArr= cookiesData[__Oxeda75[0x14]]((_0x8a5bxc)=>{return _0x8a5bxc[__Oxeda75[0x13]]});cookiesArr[__Oxeda75[0x15]]();cookiesArr[__Oxeda75[0x9]](...[$[__Oxeda75[0x10]](__Oxeda75[0x16]),$[__Oxeda75[0x10]](__Oxeda75[0x17])]);cookiesArr[__Oxeda75[0x15]]();cookiesArr= cookiesArr[__Oxeda75[0x18]]((_0x8a5bxc)=>{return !!_0x8a5bxc})};let lzopen=process[__Oxeda75[0x7]][__Oxeda75[0x19]]?process[__Oxeda75[0x7]][__Oxeda75[0x19]]:__Oxeda75[0x1a];let whitelist=__Oxeda75[0x2];let blacklist=__Oxeda75[0x2];$[__Oxeda75[0x1b]]= process[__Oxeda75[0x7]][__Oxeda75[0x1c]]|| whitelist;$[__Oxeda75[0x1d]]= process[__Oxeda75[0x7]][__Oxeda75[0x1e]]|| blacklist;getWhitelist();getBlacklist();!(async ()=>{if(lzopen=== __Oxeda75[0xd]){console[__Oxeda75[0xe]](__Oxeda75[0x26]);return};if(!cookiesArr[0x0]){$[__Oxeda75[0x29]]($[__Oxeda75[0x22]],__Oxeda75[0x27],__Oxeda75[0x28],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxeda75[0x28]});return};isGetAuthorCodeList= true;$[__Oxeda75[0x2a]]= 0;console[__Oxeda75[0xe]](__Oxeda75[0x2b]+ activityId);for(let _0x8a5bx12=0;_0x8a5bx12< ownCookieNum;_0x8a5bx12++){if(cookiesArr[_0x8a5bx12]){cookie= cookiesArr[_0x8a5bx12];originCookie= cookiesArr[_0x8a5bx12];$[__Oxeda75[0x2c]]= decodeURIComponent(cookie[__Oxeda75[0x2d]](/pt_pin=(.+?);/)&& cookie[__Oxeda75[0x2d]](/pt_pin=(.+?);/)[0x1]);$[__Oxeda75[0x2e]]= _0x8a5bx12+ 1;$[__Oxeda75[0x2f]]= true;$[__Oxeda75[0x30]]= __Oxeda75[0x2];console[__Oxeda75[0xe]](__Oxeda75[0x31]+ $[__Oxeda75[0x2e]]+ __Oxeda75[0x32]+ ($[__Oxeda75[0x30]]|| $[__Oxeda75[0x2c]])+ __Oxeda75[0x33]);if(!$[__Oxeda75[0x2f]]){$[__Oxeda75[0x29]]($[__Oxeda75[0x22]],`${__Oxeda75[0x34]}`,`${__Oxeda75[0x35]}${$[__Oxeda75[0x2e]]}${__Oxeda75[0x36]}${$[__Oxeda75[0x30]]|| $[__Oxeda75[0x2c]]}${__Oxeda75[0x37]}`,{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxeda75[0x28]});continue};$[__Oxeda75[0x38]]= 0;$[__Oxeda75[0x39]]= getUUID(__Oxeda75[0x3a],1);$[__Oxeda75[0x3b]]= getUUID(__Oxeda75[0x3c]);$[__Oxeda75[0x3d]]= authorCodeList[random(0,authorCodeList[__Oxeda75[0x3e]])];$[__Oxeda75[0x3f]]= `${__Oxeda75[0x2]}${random(1000000,9999999)}${__Oxeda75[0x2]}`;$[__Oxeda75[0x40]]= activityId;$[__Oxeda75[0x41]]= `${__Oxeda75[0x42]}${$[__Oxeda75[0x40]]}${__Oxeda75[0x2]}`; await getFirstLZCK();if($[__Oxeda75[0x5]]=== true){return}; await $[__Oxeda75[0x43]](1500);if($[__Oxeda75[0x2e]]== 1){ await task(__Oxeda75[0x44],`${__Oxeda75[0x45]}${$[__Oxeda75[0x40]]}${__Oxeda75[0x2]}`,1); await $[__Oxeda75[0x43]](500)}; await getMyPing(); await $[__Oxeda75[0x43]](1500); await share();if($[__Oxeda75[0x2e]]== 1){console[__Oxeda75[0xe]](__Oxeda75[0x2]);for(let _0x8a5bx13=0;_0x8a5bx13< $[__Oxeda75[0x46]][__Oxeda75[0x3e]];_0x8a5bx13++){console[__Oxeda75[0xe]](`${__Oxeda75[0x47]}${$[__Oxeda75[0x46]][_0x8a5bx13][__Oxeda75[0x48]]}${__Oxeda75[0x49]}${$[__Oxeda75[0x46]][_0x8a5bx13][__Oxeda75[0x22]]}${__Oxeda75[0x2]}`);if(_0x8a5bx13== 0){$[__Oxeda75[0x2a]]= $[__Oxeda75[0x46]][_0x8a5bx13][__Oxeda75[0x48]]}else {if($[__Oxeda75[0x46]][_0x8a5bx13][__Oxeda75[0x48]]> $[__Oxeda75[0x2a]]){$[__Oxeda75[0x2a]]= $[__Oxeda75[0x46]][_0x8a5bx13][__Oxeda75[0x48]]}}}};if($[__Oxeda75[0x5]]){break}}};isGetAuthorCodeList= false;$[__Oxeda75[0x48]]= 0;console[__Oxeda75[0xe]](__Oxeda75[0x4a]);for(let _0x8a5bx12=0;_0x8a5bx12< cookiesArr[__Oxeda75[0x3e]];_0x8a5bx12++){if(cookiesArr[_0x8a5bx12]){cookie= cookiesArr[_0x8a5bx12];originCookie= cookiesArr[_0x8a5bx12];$[__Oxeda75[0x2c]]= decodeURIComponent(cookie[__Oxeda75[0x2d]](/pt_pin=(.+?);/)&& cookie[__Oxeda75[0x2d]](/pt_pin=(.+?);/)[0x1]);$[__Oxeda75[0x2e]]= _0x8a5bx12+ 1;$[__Oxeda75[0x2f]]= true;$[__Oxeda75[0x30]]= __Oxeda75[0x2];$[__Oxeda75[0x4b]]= __Oxeda75[0x2];console[__Oxeda75[0xe]](__Oxeda75[0x31]+ $[__Oxeda75[0x2e]]+ __Oxeda75[0x32]+ ($[__Oxeda75[0x30]]|| $[__Oxeda75[0x2c]])+ __Oxeda75[0x4c]);if(!$[__Oxeda75[0x2f]]){$[__Oxeda75[0x29]]($[__Oxeda75[0x22]],`${__Oxeda75[0x34]}`,`${__Oxeda75[0x35]}${$[__Oxeda75[0x2e]]}${__Oxeda75[0x36]}${$[__Oxeda75[0x30]]|| $[__Oxeda75[0x2c]]}${__Oxeda75[0x37]}`,{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxeda75[0x28]});continue};$[__Oxeda75[0x38]]= 0;$[__Oxeda75[0x39]]= getUUID(__Oxeda75[0x3a],1);$[__Oxeda75[0x3b]]= getUUID(__Oxeda75[0x3c]);$[__Oxeda75[0x3d]]= authorCodeList[random(0,authorCodeList[__Oxeda75[0x3e]])];$[__Oxeda75[0x3f]]= `${__Oxeda75[0x2]}${random(1000000,9999999)}${__Oxeda75[0x2]}`;$[__Oxeda75[0x40]]= activityId;$[__Oxeda75[0x41]]= `${__Oxeda75[0x4d]}${$[__Oxeda75[0x40]]}${__Oxeda75[0x4e]}${$[__Oxeda75[0x40]]}${__Oxeda75[0x2]}`; await getFirstLZCK(); await $[__Oxeda75[0x43]](1500); await getMyPing();$[__Oxeda75[0x4f]]= false;for(let _0x8a5bx11=0;_0x8a5bx11< authorCodeList[__Oxeda75[0x3e]];_0x8a5bx11++){if((_0x8a5bx11+ 1)== $[__Oxeda75[0x2e]]){continue};$[__Oxeda75[0x3d]]= authorCodeList[_0x8a5bx11]; await $[__Oxeda75[0x43]](1500);console[__Oxeda75[0xe]](__Oxeda75[0x50]+ $[__Oxeda75[0x3d]]); await share();if($[__Oxeda75[0x4b]]=== __Oxeda75[0x51]){break}};if($[__Oxeda75[0x4f]]){$[__Oxeda75[0x48]]+= 1};if($[__Oxeda75[0x48]]>= ($[__Oxeda75[0x2a]]+ 1)){console[__Oxeda75[0xe]](__Oxeda75[0x52]);break}}};console[__Oxeda75[0xe]](__Oxeda75[0x4a]);for(let _0x8a5bx12=0;_0x8a5bx12< ownCookieNum;_0x8a5bx12++){if(cookiesArr[_0x8a5bx12]){cookie= cookiesArr[_0x8a5bx12];originCookie= cookiesArr[_0x8a5bx12];$[__Oxeda75[0x2c]]= decodeURIComponent(cookie[__Oxeda75[0x2d]](/pt_pin=(.+?);/)&& cookie[__Oxeda75[0x2d]](/pt_pin=(.+?);/)[0x1]);$[__Oxeda75[0x2f]]= true;$[__Oxeda75[0x30]]= __Oxeda75[0x2];console[__Oxeda75[0xe]](__Oxeda75[0x31]+ $[__Oxeda75[0x2e]]+ __Oxeda75[0x32]+ ($[__Oxeda75[0x30]]|| $[__Oxeda75[0x2c]])+ __Oxeda75[0x53]);$[__Oxeda75[0x3d]]= authorCodeList[0x0];$[__Oxeda75[0x40]]= activityId; await getFirstLZCK(); await $[__Oxeda75[0x43]](1500); await getMyPing(); await $[__Oxeda75[0x43]](1500); await getPrize(); await $[__Oxeda75[0x43]](1500)}}})()[__Oxeda75[0x25]]((_0x8a5bx11)=>{$[__Oxeda75[0xe]](__Oxeda75[0x2],`${__Oxeda75[0x21]}${$[__Oxeda75[0x22]]}${__Oxeda75[0x23]}${_0x8a5bx11}${__Oxeda75[0x24]}`,__Oxeda75[0x2])})[__Oxeda75[0x20]](()=>{$[__Oxeda75[0x1f]]()});async function share(){if($[__Oxeda75[0x54]]){ await task(__Oxeda75[0x55],`${__Oxeda75[0x56]}${$[__Oxeda75[0x57]]}${__Oxeda75[0x58]}${encodeURIComponent($[__Oxeda75[0x54]])}${__Oxeda75[0x59]}${$[__Oxeda75[0x40]]}${__Oxeda75[0x5a]}${$[__Oxeda75[0x41]]}${__Oxeda75[0x5b]}`,1); await task(__Oxeda75[0x5c],`${__Oxeda75[0x45]}${$[__Oxeda75[0x40]]}${__Oxeda75[0x5d]}${encodeURIComponent($[__Oxeda75[0x54]])}${__Oxeda75[0x5e]}${encodeURIComponent($[__Oxeda75[0x3d]])}${__Oxeda75[0x2]}`)}else {$[__Oxeda75[0xe]](__Oxeda75[0x5f])}}async function getPrize(){if($[__Oxeda75[0x54]]){ await task(__Oxeda75[0x5c],`${__Oxeda75[0x45]}${$[__Oxeda75[0x40]]}${__Oxeda75[0x5d]}${encodeURIComponent($[__Oxeda75[0x54]])}${__Oxeda75[0x5e]}${encodeURIComponent($[__Oxeda75[0x3d]])}${__Oxeda75[0x2]}`);for(let _0x8a5bx16 in $[__Oxeda75[0x46]]){ await task(__Oxeda75[0x60],`${__Oxeda75[0x45]}${$[__Oxeda75[0x40]]}${__Oxeda75[0x5d]}${encodeURIComponent($[__Oxeda75[0x54]])}${__Oxeda75[0x61]}${$[__Oxeda75[0x46]][_0x8a5bx16][__Oxeda75[0x62]]}${__Oxeda75[0x2]}`)}}else {$[__Oxeda75[0xe]](__Oxeda75[0x5f])}}function task(_0x8a5bx18,_0x8a5bx19,_0x8a5bx1a= 0){return  new Promise((_0x8a5bx1b)=>{$[__Oxeda75[0x6a]](taskUrl(_0x8a5bx18,_0x8a5bx19,_0x8a5bx1a),async (_0x8a5bx1c,_0x8a5bx1d,_0x8a5bx1e)=>{try{if(_0x8a5bx1c){$[__Oxeda75[0xe]](_0x8a5bx1c)}else {if(_0x8a5bx1e){_0x8a5bx1e= JSON[__Oxeda75[0x12]](_0x8a5bx1e);if(_0x8a5bx1e[__Oxeda75[0x63]]){switch(_0x8a5bx18){case __Oxeda75[0x44]:$[__Oxeda75[0x57]]= _0x8a5bx1e[__Oxeda75[0x64]][__Oxeda75[0x57]];break;case __Oxeda75[0x5c]:$[__Oxeda75[0x5c]]= _0x8a5bx1e[__Oxeda75[0x64]];if(isGetAuthorCodeList){console[__Oxeda75[0xe]](__Oxeda75[0x65]+ _0x8a5bx1e[__Oxeda75[0x64]][__Oxeda75[0x66]]);authorCodeList[__Oxeda75[0x9]](_0x8a5bx1e[__Oxeda75[0x64]][__Oxeda75[0x66]])};$[__Oxeda75[0x4f]]= true;$[__Oxeda75[0x46]]= _0x8a5bx1e[__Oxeda75[0x64]][__Oxeda75[0x46]];break;case __Oxeda75[0x60]:console[__Oxeda75[0xe]](__Oxeda75[0x67]+ _0x8a5bx1e[__Oxeda75[0x64]][__Oxeda75[0x22]]);break}}else {if(_0x8a5bx1e[__Oxeda75[0x4b]]){console[__Oxeda75[0xe]](_0x8a5bx1e[__Oxeda75[0x4b]])}else {console[__Oxeda75[0xe]](JSON[__Oxeda75[0x68]](_0x8a5bx1e))}}};if(_0x8a5bx1d[__Oxeda75[0x69]]== 200){setActivityCookie(_0x8a5bx1d)}}}catch(error){$[__Oxeda75[0xe]](error)}finally{_0x8a5bx1b()}})})}function taskUrl(_0x8a5bx18,_0x8a5bx19,_0x8a5bx1a){return {url:_0x8a5bx1a?`${__Oxeda75[0x6b]}${_0x8a5bx18}${__Oxeda75[0x2]}`:`${__Oxeda75[0x6c]}${_0x8a5bx18}${__Oxeda75[0x2]}`,headers:{Host:__Oxeda75[0x6d],Accept:__Oxeda75[0x6e],'\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68':__Oxeda75[0x6f],'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxeda75[0x70],'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxeda75[0x71],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxeda75[0x72],Origin:__Oxeda75[0x73],'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':`${__Oxeda75[0x74]}${$[__Oxeda75[0x3b]]}${__Oxeda75[0x75]}${$[__Oxeda75[0x39]]}${__Oxeda75[0x76]}`,Connection:__Oxeda75[0x77],Referer:$[__Oxeda75[0x41]],Cookie:activityCookie+ __Oxeda75[0x78]+ $[__Oxeda75[0x79]]+ __Oxeda75[0x7a]+ $[__Oxeda75[0x7b]]},body:_0x8a5bx19}}async function getMyPing(){$[__Oxeda75[0x7c]]= null;$[__Oxeda75[0x54]]= null;$[__Oxeda75[0x7c]]=  await getToken(originCookie,__Oxeda75[0x7d]);if($[__Oxeda75[0x7c]]){let _0x8a5bx21={url:`${__Oxeda75[0x7e]}`,headers:{Host:__Oxeda75[0x6d],Accept:__Oxeda75[0x6e],'\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68':__Oxeda75[0x6f],'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxeda75[0x70],'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxeda75[0x71],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxeda75[0x72],Origin:__Oxeda75[0x7f],'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':`${__Oxeda75[0x74]}${$[__Oxeda75[0x3b]]}${__Oxeda75[0x75]}${$[__Oxeda75[0x39]]}${__Oxeda75[0x76]}`,Connection:__Oxeda75[0x77],Referer:$[__Oxeda75[0x41]],Cookie:cookie},body:`${__Oxeda75[0x80]}${$[__Oxeda75[0x57]]}${__Oxeda75[0x81]}${$[__Oxeda75[0x7c]]}${__Oxeda75[0x82]}`};return  new Promise((_0x8a5bx1b)=>{$[__Oxeda75[0x6a]](_0x8a5bx21,(_0x8a5bx1c,_0x8a5bx1d,_0x8a5bx1e)=>{try{if(_0x8a5bx1c){$[__Oxeda75[0xe]](_0x8a5bx1c)}else {if(_0x8a5bx1d[__Oxeda75[0x69]]== 200){setActivityCookie(_0x8a5bx1d)};if(_0x8a5bx1e){_0x8a5bx1e= JSON[__Oxeda75[0x12]](_0x8a5bx1e);if(_0x8a5bx1e[__Oxeda75[0x63]]){$[__Oxeda75[0x30]]= _0x8a5bx1e[__Oxeda75[0x64]][__Oxeda75[0x83]];$[__Oxeda75[0x54]]= _0x8a5bx1e[__Oxeda75[0x64]][__Oxeda75[0x54]];cookie= `${__Oxeda75[0x2]}${cookie}${__Oxeda75[0x84]}${_0x8a5bx1e[__Oxeda75[0x64]][__Oxeda75[0x54]]}${__Oxeda75[0x2]}`}else {$[__Oxeda75[0x4b]]= _0x8a5bx1e[__Oxeda75[0x4b]];$[__Oxeda75[0xe]]($[__Oxeda75[0x4b]])}}else {$[__Oxeda75[0xe]](__Oxeda75[0x85])}}}catch(error){$[__Oxeda75[0xe]](error)}finally{_0x8a5bx1b()}})})}else {$[__Oxeda75[0xe]](__Oxeda75[0x86])}}function getFirstLZCK(){return  new Promise((_0x8a5bx1b)=>{$[__Oxeda75[0x8d]]({url:$[__Oxeda75[0x41]],headers:{"\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74":$[__Oxeda75[0x0]]()?(process[__Oxeda75[0x7]][__Oxeda75[0x87]]?process[__Oxeda75[0x7]][__Oxeda75[0x87]]:(require(__Oxeda75[0x89])[__Oxeda75[0x88]])):($[__Oxeda75[0x10]](__Oxeda75[0x8a])?$[__Oxeda75[0x10]](__Oxeda75[0x8a]):__Oxeda75[0x8b])}},(_0x8a5bx1c,_0x8a5bx1d,_0x8a5bx1e)=>{try{if(_0x8a5bx1c){console[__Oxeda75[0xe]](_0x8a5bx1c)}else {let _0x8a5bx23=_0x8a5bx1e[__Oxeda75[0x2d]](/(活动已经结束)/)&& _0x8a5bx1e[__Oxeda75[0x2d]](/(活动已经结束)/)[0x1]|| __Oxeda75[0x2];if(_0x8a5bx23){$[__Oxeda75[0x5]]= true;console[__Oxeda75[0xe]](__Oxeda75[0x8c])};if(_0x8a5bx1d[__Oxeda75[0x69]]== 200){setActivityCookie(_0x8a5bx1d)}}}catch(error){console[__Oxeda75[0xe]](error)}finally{_0x8a5bx1b()}})})}function random(_0x8a5bx25,_0x8a5bx26){return Math[__Oxeda75[0x8f]](Math[__Oxeda75[0x8e]]()* (_0x8a5bx26- _0x8a5bx25))+ _0x8a5bx25}function getBlacklist(){if($[__Oxeda75[0x1d]]== __Oxeda75[0x2]){return};console[__Oxeda75[0xe]](__Oxeda75[0x90]);const _0x8a5bx28=Array[__Oxeda75[0x93]]( new Set($[__Oxeda75[0x1d]][__Oxeda75[0x92]](__Oxeda75[0x91])));console[__Oxeda75[0xe]](_0x8a5bx28[__Oxeda75[0x94]](__Oxeda75[0x91])+ __Oxeda75[0x4a]);let _0x8a5bx29=_0x8a5bx28;let _0x8a5bx2a=[];let _0x8a5bx2b=false;for(let _0x8a5bx12=0;_0x8a5bx12< cookiesArr[__Oxeda75[0x3e]];_0x8a5bx12++){let _0x8a5bx2c=decodeURIComponent((cookiesArr[_0x8a5bx12][__Oxeda75[0x2d]](/pt_pin=([^; ]+)(?=;?)/)&& cookiesArr[_0x8a5bx12][__Oxeda75[0x2d]](/pt_pin=([^; ]+)(?=;?)/)[0x1])|| __Oxeda75[0x2]);if(!_0x8a5bx2c){break};let _0x8a5bx2d=false;for(let _0x8a5bx2e of _0x8a5bx29){if(_0x8a5bx2e&& _0x8a5bx2e== _0x8a5bx2c){_0x8a5bx2d= true;break}};if(!_0x8a5bx2d){_0x8a5bx2b= true;_0x8a5bx2a[__Oxeda75[0x95]](_0x8a5bx12,-1,cookiesArr[_0x8a5bx12])}};if(_0x8a5bx2b){cookiesArr= _0x8a5bx2a}}function toFirst(_0x8a5bx2a,_0x8a5bx30){if(_0x8a5bx30!= 0){_0x8a5bx2a[__Oxeda75[0x96]](_0x8a5bx2a[__Oxeda75[0x95]](_0x8a5bx30,1)[0x0])}}function getWhitelist(){if($[__Oxeda75[0x1b]]== __Oxeda75[0x2]){helpCookiesArr= $[__Oxeda75[0x98]]($[__Oxeda75[0x97]](cookiesArr,cookiesArr));return};console[__Oxeda75[0xe]](__Oxeda75[0x99]);const _0x8a5bx28=Array[__Oxeda75[0x93]]( new Set($[__Oxeda75[0x1b]][__Oxeda75[0x92]](__Oxeda75[0x91])));console[__Oxeda75[0xe]](_0x8a5bx28[__Oxeda75[0x94]](__Oxeda75[0x91])+ __Oxeda75[0x4a]);let _0x8a5bx2a=[];let _0x8a5bx32=_0x8a5bx28;for(let _0x8a5bx12 in cookiesArr){let _0x8a5bx2c=decodeURIComponent((cookiesArr[_0x8a5bx12][__Oxeda75[0x2d]](/pt_pin=([^; ]+)(?=;?)/)&& cookiesArr[_0x8a5bx12][__Oxeda75[0x2d]](/pt_pin=([^; ]+)(?=;?)/)[0x1])|| __Oxeda75[0x2]);if(_0x8a5bx32[__Oxeda75[0x9a]](_0x8a5bx2c)){_0x8a5bx2a[__Oxeda75[0x9]](cookiesArr[_0x8a5bx12])}};helpCookiesArr= _0x8a5bx2a;if(_0x8a5bx32[__Oxeda75[0x3e]]> 1){for(let _0x8a5bx2e in _0x8a5bx32){let _0x8a5bx33=_0x8a5bx32[_0x8a5bx32[__Oxeda75[0x3e]]- 1- _0x8a5bx2e];if(!_0x8a5bx33){continue};for(let _0x8a5bx12 in helpCookiesArr){let _0x8a5bx2c=decodeURIComponent(helpCookiesArr[_0x8a5bx12][__Oxeda75[0x2d]](/pt_pin=([^; ]+)(?=;?)/)&& helpCookiesArr[_0x8a5bx12][__Oxeda75[0x2d]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);if(_0x8a5bx33== _0x8a5bx2c){toFirst(helpCookiesArr,_0x8a5bx12)}}}}}function setActivityCookie(_0x8a5bx1d){if(_0x8a5bx1d[__Oxeda75[0x9c]][__Oxeda75[0x9b]]){cookie= `${__Oxeda75[0x2]}${originCookie}${__Oxeda75[0x2]}`;for(let _0x8a5bx35 of _0x8a5bx1d[__Oxeda75[0x9c]][__Oxeda75[0x9b]]){lz_cookie[_0x8a5bx35[__Oxeda75[0x92]](__Oxeda75[0x9f])[0x0][__Oxeda75[0xa0]](0,_0x8a5bx35[__Oxeda75[0x92]](__Oxeda75[0x9f])[0x0][__Oxeda75[0x9e]](__Oxeda75[0x9d]))]= _0x8a5bx35[__Oxeda75[0x92]](__Oxeda75[0x9f])[0x0][__Oxeda75[0xa0]](_0x8a5bx35[__Oxeda75[0x92]](__Oxeda75[0x9f])[0x0][__Oxeda75[0x9e]](__Oxeda75[0x9d])+ 1)};for(const _0x8a5bx36 of Object[__Oxeda75[0xb]](lz_cookie)){cookie+= _0x8a5bx36+ __Oxeda75[0x9d]+ lz_cookie[_0x8a5bx36]+ __Oxeda75[0x9f]};activityCookie= cookie}}function getUUID(_0x8a5bx38= __Oxeda75[0x3c],_0x8a5bx39= 0){return _0x8a5bx38[__Oxeda75[0xa3]](/[xy]/g,function(_0x8a5bx3a){var _0x8a5bx3b=Math[__Oxeda75[0x8e]]()* 16| 0,_0x8a5bx3c=_0x8a5bx3a== __Oxeda75[0xa1]?_0x8a5bx3b:(_0x8a5bx3b& 0x3| 0x8);if(_0x8a5bx39){uuid= _0x8a5bx3c.toString(36)[__Oxeda75[0xa2]]()}else {uuid= _0x8a5bx3c.toString(36)};return uuid})}(function(_0x8a5bx3d,_0x8a5bx3a,_0x8a5bx3e,_0x8a5bx3f,_0x8a5bx2d,_0x8a5bx40){_0x8a5bx40= __Oxeda75[0xa4];_0x8a5bx3f= function(_0x8a5bx33){if( typeof alert!== _0x8a5bx40){alert(_0x8a5bx33)};if( typeof console!== _0x8a5bx40){console[__Oxeda75[0xe]](_0x8a5bx33)}};_0x8a5bx3e= function(_0x8a5bx41,_0x8a5bx3d){return _0x8a5bx41+ _0x8a5bx3d};_0x8a5bx2d= _0x8a5bx3e(__Oxeda75[0xa5],_0x8a5bx3e(_0x8a5bx3e(__Oxeda75[0xa6],__Oxeda75[0xa7]),__Oxeda75[0xa8]));try{_0x8a5bx3d= __encode;if(!( typeof _0x8a5bx3d!== _0x8a5bx40&& _0x8a5bx3d=== _0x8a5bx3e(__Oxeda75[0xa9],__Oxeda75[0xaa]))){_0x8a5bx3f(_0x8a5bx2d)}}catch(e){_0x8a5bx3f(_0x8a5bx2d)}})({})
	
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
