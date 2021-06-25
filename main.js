function func(tabId,changeInfo,tab){let url=new URL(tab.url);
//if((url.hostname==="shequ.codemao.cn")&&((url.pathname.replace("/community")==="/"||url.pathname.replace("/community")==="")||(url.pathname.replace("/wiki")==="/"||url.pathname.replace("/wiki")===""))&&((url.search.includes("board=11")||url.search.includes("board=26"))||url.search.includes("board=7"))){browser.tabs.insertCSS(tabId,{code:"html{display:none!important;}"});return;}
/*else*/ if(url.hostname==="trainer-pc.codemao.cn"){browser.tabs.insertCSS(tabId,{code:"html{display:none!important;}"});return;}
else if(url.hostname==="shequ.codemao.cn"&&url.pathname.includes("/community/")&&url.pathname!="/community/"){let tie=url.pathname.replace("/community/",'').replace("/",'');
let xhr=new XMLHttpRequest();xhr.open("GET","https://api.codemao.cn/web/forums/posts/?/details".replace('?',tie),false);xhr.send();if(xhr.status===200){
let json=JSON.parse(xhr.responseText);if((json.board_id==="11"||json.board_id==="26")||json.board_id==="7")browser.tabs.insertCSS(tabId,{code:"html{display:none!important;}"});return;}}
else if(url.hostname==="shequ.codemao.cn"&&url.pathname.includes("/wiki/forum/")){let tie=url.pathname.replace("/wiki/forum/",'').replace("/",'');
let xhr=new XMLHttpRequest();xhr.open("GET","https://api.codemao.cn/web/forums/posts/?/details".replace('?',tie),false);xhr.send();if(xhr.status===200){
let json=JSON.parse(xhr.responseText);if((json.board_id==="11"||json.board_id==="26")||json.board_id==="7")browser.tabs.insertCSS(tabId,{code:"html{display:none!important;}"});return;}}}
browser.tabs.onUpdated.addListener(func);
browser.storage.onChanged.addListener((changes,areaName)=>{browser.storage.local.get({xueshu:"y"},(res)=>{if(res.xueshu==="y")browser.tabs.onUpdated.addListener(func);else browser.tabs.onUpdated.removeListener(func);});})
//论box3与前端的关系
