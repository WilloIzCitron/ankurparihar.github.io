var GithubOAuthWindow,input_email=document.querySelector(".input-group__input input#email"),input_email_detail=document.querySelector(".input-group__details .input_email_message");function checkEmailValidity(){input_email_detail.innerHTML=input_email.validity.valid?"At least 6 characters":"Invalid email"}function openSignInPopUp(){var e="https://github.com/login/oauth/authorize?client_id=ac8e2ed8d62d346e1595&scope=repo",t="width=400,toolbar=1,resizable=1,scrollbars=yes,height=400,top=100,left=100";if(void 0===GithubOAuthWindow||GithubOAuthWindow.closed)GithubOAuthWindow=window.open(e,"GithubOAuth",t);else{try{GithubOAuthWindow.document}catch(n){GithubOAuthWindow=window.open(e,"GithubOAuth",t)}"Microsoft Internet Explorer"==navigator.appName?(GithubOAuthWindow.close(),GithubOAuthWindow=window.open(e,"GithubOAuth",t)):GithubOAuthWindow.focus()}}function signIn(){console.log("AUTH_INFO: Initiating sign in"),openSignInPopUp(),console.log("AUTH_INFO: Launched OAuth window");try{var e=document.querySelector(".btn_sign_github"),t=document.createElement("span");e.innerHTML="Waiting for input"}catch(e){console.log(e)}var n=setInterval(function(){if(GithubOAuthWindow.closed){clearInterval(n),console.log("AUTH_INFO: Closed OAuth window");try{e.style.opacity=0,t.classList.add("btn__loading"),t.innerHTML='<span class="spins"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"></path></svg></span>',e.parentElement.appendChild(t),e.parentElement.classList.add("btn--disabled")}catch(e){console.log(e)}if(!checkAccessToken())return console.log("AUTH_ERR : Access token count not be saved to cookie"),void showSignOutcome("error","Could not fetch access token");console.log("AUTH_INFO: Access token saved to cookie"),getUser();var o=setInterval(function(){!0===successfull_sign_in?(clearInterval(o),showSignOutcome("success","Successfully logged in"),loadDoc("/index.html","nav-home-icon","home")):!1===successfull_sign_in&&(showSignOutcome("error","Something went wrong"),clearInterval(o))},1e3)}},1e3)}function resetSignPanel(){try{var e=document.querySelector(".btn_sign_github").parentElement.parentElement.querySelector(".msg");e.innerHTML="",e.classList.remove("danger-color"),e.classList.remove("success-color")}catch(e){console.log(e)}}function showSignOutcome(e,t){resetSignPanel();var n=document.querySelector(".btn_sign_github").parentElement.parentElement.querySelector(".msg");n.innerHTML=t,"error"===e?(n.classList.add("danger-color"),setSignOutStatus()):"success"===e&&(n.classList.add("success-color"),setSignInStatus())}