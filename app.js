console.log('hohoho');
(function(){
	var app = {
		data:null,
		init:function(){
			this.getJson.call(this);
		},
		getJson:function(){
			$.ajax({
				url:'http:localhost:7000/crm.json',
				dataType:'json',

			}).done(


			}
		}
		app.init();
	})();