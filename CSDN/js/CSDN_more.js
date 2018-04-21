var vueAjax = new Vue({
		el:'#main',
		data:{
			list: [],
			user_id: '',
			blog_id: '',
		},
		mounted: function(){
            this.getData();
            this.getQuery();
        },
        methods:{
        	getQuery:function(){
						var str = (location.search.length > 0 ? location.search.substring(1) : ''),
						args = {},
						items = str.length ? str.split("&") : [],
						item = null,
						name = null,
						value = null;
						for (i=0; i < items.length; i++){
							item = items[i].split("=");
							name = decodeURIComponent(item[0]);
							value = decodeURIComponent(item[1]);
							if (name.length) {
								args[name] = value;
							}
						}
						return args;
					},	
        	getData: function(dataOBJ){
        		var that = this;
	        	$.ajax({
	                url: "http://blog.com/api/blog/info?id/",
	                type: "get",
	                data:{
	                	id: window.location.search.split("=")[1],
	                },
	                dataType: "json",
	                success: function(res){
	                	that.list = res.data.blog_info;					
	                },
	                error: function(res){

	                }
	            })
	     
        	},
        	collect: function(){
        		var that = this;
        		var userId = localStorage.getItem("userid")
        		$.ajax({
        			type:"post",
        			url:"http://blog.com/api/collect/add",
        			data: {
        				user_id: 64,
        				blog_id: window.location.search.split("=")[1],
        			},
        			dataType: "json",
        			success: function(res){
        				 if(res.error_code == 0){  
                            alert("收藏成功");
                            return false;
                        } else{
                        	alert("收藏失败");
                        }
        			}
        		});
        	}
        }
	})