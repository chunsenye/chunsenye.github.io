document.writeln(`<div class="register">
<div class="registerTitle">
    <div>
        <img src="../images/guahao.png">
    </div>
    <div class="ttt">
        <span> 预约挂号</span>&nbsp;&nbsp;
        <b>预约当天就诊治疗 无需排队 免挂号费</b>
    </div>
</div>
<div class="registerContainer">
    <div class="registerContext">
        <div class="yuyueBox">
            <span>您的名字：</span>
            <input type="text" name="" id="user" maxlength="8">
        </div>
        <div class="yuyueBox">
            <span>电话号码：</span>
            <input type="text" name="" id="user" maxlength="11">
        </div>
        <div class="yuyueBox">
            <span>预约科室：</span>
            <select>
                <option value="volvo">女性不孕</option>
                <option value="saab">女性不育</option>
                <option value="opel">男性不孕</option>
                <option value="audi">男性不育</option>
            </select>
        </div>
        <div class="yuyueBox tiaozheng">
            <span>预约时间：</span>
            <input type="date" value='2018-02-04' id="yuyueTime">
        </div>
        <div class="submit">
            提交
        </div>
    </div>
</div>
</div>`);