# 编程猫学术模式chrome版

开启学术模式后，将会隐藏大部分劳逸结合的功能。  
目前效果：将会隐藏发在论坛 Python 乐园板块、源码精灵板块、灌水池塘板块的帖子和源码精灵。   
[Firefox版源代码](https://github.com/86135/xueshu)  
[Chrome版源代码](https://github.com/86135/xueshu-chrome)  
Firefox 安装方法（调试版）： 
1. 下载源代码
1. 进入 about:debugging#/runtime/this-firefox 。
1. 点击“临时载入附加组件…”按钮。
1. 选择源代码中的 manifest.json 文件并点击“打开”按钮。  

使用效果：  
开启学术模式后，扩展将把发在论坛 Python 乐园板块、源码精灵板块、灌水池塘板块的帖子和源码精灵通过注入 CSS 代码屏蔽。  
CSS代码如下：
```css
html{display:none!important;}
```
注：学术模式默认开启，可以关闭。
