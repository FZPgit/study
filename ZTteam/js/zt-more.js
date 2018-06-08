var vm = new Vue({
	el: "#content",
	data: {
		list: {},
		subject: [],
	},
	mounted: function(){
		this.getData();
	},
	methods: {
		getData: function(){
			var that = this;
			$.ajax({
				url: "http://api.zhituteam.com/api/teacher/info/id/",
				type: "get",
				data: {
					id: window.location.search.split("=")[1],
				},
				dataType: "json",
				success: function(res){
					that.list = res.data.teacher;
					that.subject = res.data.teacher.subject;
				},
			})
		}
		// getQueryStringArgs: function(){
		// 		var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
		// 		args = {},
		// 		items = qs.length ? qs.split("&") : [],
		// 		item = null,
		// 		name = null,
		// 		value = null,
		// 		i = 0,
		// 		len = items.length;
		// 		for (i=0;i<len;i++){
		// 			item = items[i].split("=");
		// 			name = decodeURICcomponent(item[0]);
		// 			value = decodeURICcomponent(item[1]);
		// 			if (name.length) {
		// 				args[name] = value;
		// 			};
		// 		}
		// 		return args;
		// 	}
	}
})
