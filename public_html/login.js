var attempt = 3;
function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if( username == "Man_Men" && password == "M4V123" )
    {
        alert("Login Successful!");
        window.location = "index.html";
        return false;
    }
    else
    {
        if( username == "Arjun_P" && password == "M4V123" )
        {
            alert("Login Successful!");
            window.location = "index.html";
            return false;
        }
        else
        {
            if( username == "V_B" && password == "M4V123" )
            {
                alert("Login Successful!");
                window.location = "index.html";
                return false;
            }
            else
            {
                if( username == "admin" && password == "P4ssw0rd22//" )
                {
                    alert("Login Successful!");
                    window.location = "index.html";
                    return false;
                }
                else{
                    if( username == "zk" && password == "M4V123")
                    {
                                          alert("Login Successful!");
                    window.location = "index.html";
                    return false; 
                    }
                    else{
                attempt --;
                alert("You have " + attempt + " attempt/s left.")
                    if( attempt == 0)
                    {
                        document.getElementById("username").disabled = true;
                        document.getElementById("password").disabled = true;
                        document.getElementById("submit").disabled = true;
                    }
                }
            }
        }
    }
}