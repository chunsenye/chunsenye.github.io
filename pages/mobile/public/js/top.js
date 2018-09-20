document.writeln("        <style>");
document.writeln("            /*微信*/");
document.writeln("           body{padding-top:0.9rem !important;} .top_weixin{display:block; width:100%;max-width:640px; height: 0.9rem; position:fixed; top:0; left:50%;margin-left:-3.2rem;font-family:\'微软雅黑\';  z-index:9999999;overflow:hidden;-moz-box-shadow: #666 0 0.07rem 0.05rem -0.05rem; -webkit-box-shadow: #666 0 0.07rem 0.05rem -0.05rem;box-shadow: #666 0 0.07rem 0.05rem -0.05rem;}");
document.writeln("            .top_weixin a{ width:100%; height:100%; display:block; color:#fff;}");
document.writeln("            .top_weixin a img{ width:100%; height:100%;}");

document.writeln("        </style>");
document.writeln("        <div class=\'top_weixin\'>");
document.writeln("            <a href=\'javascript:void(0);\' onclick=\"openZoosUrl(\'chatwin\',\'&e=\'+escape(escape(\'手机站顶部微信弹窗\')));return false; \" >");
document.writeln("                <img src=\'/zt/public/images/top.gif\' />");
document.writeln("            </a>");
document.writeln("        </div>");

