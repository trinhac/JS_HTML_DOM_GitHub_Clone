
document.getElementById("div_main").innerHTML = `   
<div class ="title">
        <img src="./Images/Githus.jpg"/>
        <p>Sign in to GitHub</p>
</div>
<div class="login_account">
        <form>
            <label for="account">Username or email address</label><br/>
            <input type="email" id="account" /><br/><br/>
            <label for="password">Password</label>
            <a class="forgot" href="/."><sup>Forgot password?</sup></a><br/>
            <input type="password" id="password"/><br/> <br/>
            <input type="submit" id="submit_button" value="Sign in"/>
        </form>
</div>

<div class="create_acc">
        <p>New to GitHub? <a href="/." style="color:#5898c3;">Create an account </a>.</p>
</div>

<div class="about_git">
    <pre>
        <a href="/.">Terms</a>        <a href="/.">Privacy</a>        <a href="/.">Security</a>        <a href="/." style="color:gray;">Contact GitHub</a>
    </pre>
</div>`;
