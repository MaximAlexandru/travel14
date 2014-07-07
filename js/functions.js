function populate_categorie(id,id2){//id-supercategoria,id2-categoria
	
	string="category_id="+id2;
	$.blockUI({ message: '<img src="http://brasovtour.com/mobile-app/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://brasovtour.com/mobile-app/ajax/ajax.php",
   		    dataType: "json",
            data:  string,
            success:function(response){
               	$('.category-name').empty().append(response[0]);
               	$('.category-locations').empty().append(response[1]);
               	
            	
            	$.unblockUI();
            
            	
		  }
		});
}
function show_cut_text(){
	alert('click');
	$('.cut-text').show();
	$('.more_text').hide();
}
function getfooterlocation(){
	footer='<a href="#map" class="ui-btn-left button" id="btn-menu">Directions</a>'+
				'<a href="#" class="ui-btn-right button" id="btn-menu">Rezervare</a>';
	$('#location').find('#footer-wrapper').empty().append(footer);
	
}


function validate_login(){
		 var username = $('#username').val();
		 var password = $('#password2').val();
		string=$("#form-login").serialize();
		$.blockUI({ message: '<img src="http://brasovtour.com/mobile-app/img/busy.gif" />' });
        $.ajax({
            type: 'POST',
            url: "http://brasovtour.com/mobile-app/ajax/ajax.php",
   		    dataType: "json",
            data:  string,
            success:function(response){
            	if(response.length==0){
              localStorage['name']=username;
			  localStorage['password']=password;
			  window.location="#acasa";
              
             }else
             {
             	
             	alert('Eroare:'+response);
             }
            	$.unblockUI();
            	
		  }
		});
		
	}


	function login_history(){
		// localStorage.removeItem('name');
		// localStorage.removeItem('name');
		if(localStorage['name'] && localStorage['password']){
			window.location="#acasa";
		}
		else{
			window.location="#login";
 		}
	}
	
	
	function populate_location(id){
		string="location_id="+id;
		$.blockUI({ message: '<img src="http://brasovtour.com/mobile-app/img/busy.gif" />' });
        $.ajax({
		            type: 'POST',
		            url: "http://brasovtour.com/mobile-app/ajax/ajax.php",
		   		    dataType: "json",
		            data:  string,
		            success:function(response)
		            {
		            	dlat=response['lat'];
		            	dlng=response['lng'];
		            	$('.location-name').empty().append(response['name']);
		            	$('.location-facilities').empty().append(response['facilities']);
		            	$('.location-description').empty().append(response['description']);
			            	if(response['program-table'])
			            	{
			            		$('.location-program').empty().append(response['program-table']);
			                }
		                $('.location-photos').empty().append(response['photos']).trigger('create');
		                $('.location-photos').append(response['photos_pop']).trigger('create');
		                $('.location-contact').empty().append(response['contact']).trigger('create');
		          
		                
		               
		               
						$.unblockUI();
		            	
					  }
		});
		}
