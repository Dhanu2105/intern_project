        let myWindow; 
        function know() 
        {  
            let text=  "Request access \n Do you wish to continue?"; 
            if (confirm(text) == true) { 
                myWindow = window.open("login.html", "", "width=600,height=600"); 
            } 
 
             else { 
                 myWindow.close(); 
                } 
            } 