function reset(){$(".register-item").removeClass("has-error"),$(".alert-danger").remove()}function showError(e,a){var t='<small class="help-block alert alert-danger checkright">'+a+"</small>";e.parents(".register-item").addClass("has-error").after(t)}$(function(){var e=function(e){$("#dologin").click(function(a){var t=e.getValidate();t||($("#notice").addClass("show").removeClass("hide"),setTimeout(function(){$("#notice").addClass("hide").removeClass("show")},2e3),$("#captcha").append('<small class="help-block alert alert-danger checkright">请先拖动验证码到相应位置！</small>'),setTimeout(function(){$("#captcha").find(".alert-danger").remove()},2e3),a.preventDefault())}),e.appendTo("#captcha"),e.onReady(function(){$("#wait")[0].className="hide"}),e.onSuccess(function(){var a=e.getValidate();$("#challenge").val(a.geetest_challenge),$("#seccode").val(a.geetest_seccode),$("#validate").val(a.geetest_validate)})};$.ajax({url:"/home/register/geetest?t="+(new Date).getTime(),data:{__CSRF__:G_csrf},type:"get",dataType:"json",success:function(a){initGeetest({gt:a.gt,challenge:a.challenge,product:"float",offline:!a.success},e)}})}),$("#dologin").click(function(){reset();var e=$("#loginForm").validate({error:function(e,a){showError(e,a),e.one("keyup",function(){$(this).parents(".form-group").removeClass("has-error has-feedback").find(".errorinfo,.glyphicon-remove").addClass("hidden")})},submitBtn:{flag:!0}});if(e){var a={email:$("#email").val(),password:$("#password").val(),geetest_challenge:$("#challenge").val(),geetest_seccode:$("#seccode").val(),geetest_validate:$("#validate").val(),__CSRF__:$("#csrf").val()};""!==$("#challenge").val()&&""!==$("#seccode").val()&&""!==$("#validate").val()&&$.ajax({url:"/login/dologin",data:a,type:"POST",success:function(e){0===e.errno?window.location.href="/personal/@"+e.uname:alert(e.errmsg)}})}return!1}),$("#email").on("blur",function(){var e=$(this);reset(),e.next(".isright").remove();var a=/^\w+@([0-9a-zA-Z]+[.])+[a-z]{2,4}$/,t=e.val();return t&&!a.test(t)?(showError(e,"邮箱格式不正确!"),!1):void 0}),$(document).keyup(function(e){13==e.keyCode&&$("#dologin").trigger("click")});