menu_list_array = ["Pizza Margarita Vegetariana",
                        "Pizza de Pollo Tandoori",
                        "Pizza Suprema Vegetariana",
                        "Pizza de Paneer Tikka",
                        "Pizza Vegetariana de Lujo",
                        "Pizza Extravaganza Vegetariana"];
    
    function Display(){
        var html_data="";
        menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            html_data=html_data+ menu_list_array[i] + '<br>'
        }
        document.getElementById("desplegar-menu").innerHTML = html_data;
    }

    function add_item(){
        var html_data;
		var imgtags='<img id="im1" src="pizzaImg.png">'
        var item = document.getElementById("añadir").value;
        menu_list_array.sort();
        html_data="";
        for(var i=0;i<menu_list_array.length;i++){
            html_data=html_data+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("desplegar_addedmenu").innerHTML = html_data;
		
    }

function add_top(){
	var item=document.getElementById("añadir").value;
    menu_list_array.push(item);
	add_item();
}
