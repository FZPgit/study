var login = new Vue({
	el: "#main",
	data:{
			username: '',
			password: '',
		},
		mounted: function(){
          
        },
        methods:{
        	login: function(){
        		var that = this;
        		var name = that.username;
        		var password = that.password;
                if(name == '' || password == ''){  
                    alert("账号或密码为空")
                    return false; 
                   }
        		$.ajax({
        			type:"post",
        			url:"http://blog.com/api/user/doLogin",
        			data: {
        				phone: this.username,
        				password: this.password,
        			},
        			dataType: "json",
        			success: function(res){
                        if ( res.error_code == 0 ){
							alert("登录成功");
							location.href="./csdn.html";
							localStorage.setItem("user_id",res.data.user.userid);
							localStorage.setItem("user_img",res.data.user.userimg);
							localStorage.setItem("user_name",res.data.user.username);
						} else{
                        	alert("登录失败");
                        }
        			}
        		});
        	},   	
        }
})