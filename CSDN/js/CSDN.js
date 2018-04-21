var vueAjax = new Vue({
		el:'#main',
		data:{
			list:[],
			pic:[],
			nav:[],
		},
		mounted: function(){
            this.getData();
        },
        methods:{
        	getData: function(){
        		var that = this;
	        	$.ajax({
	                url: "http://blog.com/api/index/index",
	                type: "get",
	                data: {},
	                dataType: "json",
	                success: function(res){
	                	that.list = res.data.blog_lists;
	                	that.pic = res.data.banner;
	                	that.nav = res.data.classify_lists;
	                	console.log(that.nav)
	                    var newBannerList=[];
	                    for(i=0;i<5;i++){
	                    	newBannerList = newBannerList.concat(res.data.banner);
	                    }               
	                    that.banner = newBannerList;
							var mySwiper = new Swiper ('.swiper-container', {
							    direction: 'horizontal',
							    loop: true,

							     // 如果需要分页器
							    pagination: '.swiper-pagination',
							     paginationClickable: true,
							            speed: 500,
							            loop: true,
							            observer:true,
							            observeParents:true,
							            autoplayDisableOnInteraction : false,
							            autoplay:2000,
							        })
	                },
	                error: function(res){

	                }
	            })
	     
        	},
        }
	})