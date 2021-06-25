browser.storage.local.get({xueshu:"y"},(res)=>{document.querySelector("#open").checked=(res.xueshu==="y");})
function submit(){inp=document.querySelector("#open");browser.storage.local.set({xueshu:inp.checked?"y":"n"},()=>{alert("ok");});}
document.querySelector("#submit").addEventListener("click",submit);
//论box3与前端的关系
