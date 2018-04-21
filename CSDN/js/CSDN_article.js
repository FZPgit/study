var editor = new Vue({
    		el: "#main",
    		data: {
    			title: "",
    			class_id: ""
    		},
    		mounted: function(){
    			var ue = UE.getEditor('container');
    		},
    		methods: {
    			getUeditorContent: function(){
    				return UE.getEditor('container').getContent()
    			},
    			getQuery: function(){
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
    			issue: function(){
    				$.ajax({
    					url: "http://blog.com/api/blog/doAdd",
    					type: "post",
    					dataType: "json",
    					data: {
    						"user_id": window.localStorage.user_id,
    						"title": this.title,
    						"content": this.getUeditorContent(),
    						"classify_id": this.class_id,
                            "blog_id": this.getQuery().id
    					},
    					success: function(res){
    						if(res.error_code == 0){
    							alert("发布成功即将跳转。。。。。。");
    							window.location.href="./CSDN_write.html"
    						}else {
    							alert(res.message);
    						}
    					}
    				})
    			},
    			updateBlog: function(item){
                    var that = this;
                    $.ajax({
                        url: "http://blog.com/api/blog/add",
                        type:"get",
                        dataType: "json",
                        data: {
                            user_id: window.localStorage.user_id,
                            blog_id: this.getQuery().id
                        },
                        success: function(res){
                            if(res.error_code == 0){
                                that.updateList = res.data.my_blog_info;
                                that.title = res.data.my_blog_info.title
                                // that.ue.setContent(that.updateList);
                            }else {
                                alert(res.message);
                            }
                        }
                    })
                },
    		}
    	})