(function(){
	var app = {
		init:function(){
			this.getJson.call(this);
		},
		getJson:function(){
			$.ajax({
				url:'/crm.json',
				dataType:'json',
				success:function (data){
					var infos = data.customers;
					for (var i = 0; i < infos.length; i++){
						$('.crm').append('<ul>' + '<div>' + 'id:' + infos[i]['id'] + '</div>' + '</br>'
						+ '<div>' + 'Prénom: ' + infos[i]['first_name'] + '</div>' 
						+ '<div>' + 'Nom: ' + infos[i]['last_name'] + '</div>' 
						+ '<div>' + 'Entreprise: ' + infos[i]['company']+'</div>' 
						+ '<div>' + 'Titre: ' + infos[i]['role'] + '</div>'
						+'<div>' + 'Tel: ' + infos[i]['phone'] + '</div>'
						+'<div>' + 'Mail: '+ infos[i]['email'] + '</div>'
						+'<div>' + 'Déscription: ' + infos[i]['description'] + '</div>'+ '</br>'
						+'</ul>');
					}
				}

			});
			}
		}
		app.init();
	})();