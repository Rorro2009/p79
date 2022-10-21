menu_list_array = ["Pizza Margarita Vegetariana",
                        "Pizza de Pollo Tandoori",
                        "Pizza Suprema Vegetariana",
                        "Pizza de Paneer Tikka",
                        "Pizza Vegetariana de Lujo",
                        "Pizza Extravaganza Vegetariana"];
    function Display()
    {
        var htmldata = "";  
        menu_list_array.sort();
        for (var i = 0; i < menu_list_array.length; i++)
        {
            htmldata = htmldata + menu_list_array[i] + "<br>"
        }
        document.getElementById("desplegar-menu").innerHTML = htmldata;
    }

    function add_item(){
        var htmldata;
		var imgtags='<img id="im1" src="pizzaImg.png">'
        var item = document.getElementById("añadir").value;
        menu_list_array.sort();
        htmldata="";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("desplegar_addedmenu").innerHTML = htmldata;
		
    }

function add_top(){
	var item=document.getElementById("añadir").value;
    menu_list_array.push(item);
	add_item();
}

