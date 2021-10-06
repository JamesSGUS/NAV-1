const $siteList=$(".siteList"),$lastLi=$siteList.find("li.last"),x=localStorage.getItem("x"),xObject=JSON.parse(x),hashMap=xObject||[{logo:"A",url:"https://developer.mozilla.org/zh-CN/docs"},{logo:"B",url:"https://www.bilibili.com/"},{logo:"C",url:"https://www.ctrip.com/"}],simplifyUrl=o=>o.replace("https://","").replace("http://","").replace("www.","").replace(/\/.*/,""),render=()=>{$siteList.find("li:not(.last)").remove(),hashMap.forEach(((o,s)=>{const e=$(`<li>           \n            <div class="site">\n                <div class="logo">${o.logo}</div>\n                <div class="link">${simplifyUrl(o.url)}</div>\n                <div class="close">\n                    <svg class="icon">\n                        <use xlink:href="#icon-close"></use>\n                    </svg>\n                </div>\n            </div>          \n        </li>`).insertBefore($lastLi);e.on("click",(()=>{window.open(o.url)})),e.on("click",".close",(o=>{o.stopPropagation(),hashMap.splice(s,1),render()}))}))};render(),$(".addButton").on("click",(()=>{let o=window.prompt("Which address do you want to add? 你想增加什么网站？");0!==o.indexOf("https")&&(o="https://"+o),hashMap.push({logo:simplifyUrl(o)[0].toUpperCase(),url:o}),render()})),window.onbeforeunload=()=>{console.log("page will be close");const o=JSON.stringify(hashMap);localStorage.setItem("x",o)},$(document).on("keypress",(o=>{const{key:s}=o;for(let o=0;o<hashMap.length;o++)hashMap[o].logo.toLowerCase()===s&&window.open(hashMap[o].url)}));
//# sourceMappingURL=index.751d0fd4.js.map
