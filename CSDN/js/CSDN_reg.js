var login = new Vue({
	el: "#main",
	data:{
			username: '',
			password: '',
			uname: '',
		},
		mounted: function(){
          
        },
        methods:{
        	register: function() {
        		var that = this;
        		var name = that.username;
        		var password = that.password;
        		$.ajax({
        			type:"post",
        			url:"http://blog.com/api/user/doReg",
        			data: {
        				phone: this.username,
        				password: this.password,
        				uname: this.uname,
        			},
        			dataType: "json",
        			success: function(res){
                        if(res.error_code == 0){  
                            alert("注册成功");                            
                        } else{
                        	alert("注册失败");
                        }
        			}
        		});
        	},      	
        }
})