function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
   
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
function convertion()
{
    var number= document.getElementById("firstNumber").value;
    var finalSystem= Number(document.getElementById("finalSystem").value);
    var startSystem = Number(document.getElementById("startSystem").value);
    if ((startSystem<2)||(finalSystem>16))
    {
        str2="Wrong number system";
        document.getElementById('info').innerHTML=str2;
    }
else
{
   if (startSystem==10)
    {
    c=number;
    d=finalSystem;
    i=0;
    var arr = c.split('');
    for(i=0;i<arr.length;i++)
    {
        arr[i]=parseInt( arr[i], startSystem );
        if (arr[i]<startSystem)
        {
            check=0;
        }
        else
        {
            check=1;
        }
    }
   
    var a=[];
    while (c>=d)
    {
       a[i]=(c%d);
       c=Math.floor(c/d);
       i++;
    }
a.push(c);
var k=[];
k=a.reverse();
for (i=0;i<k.length;i++)
{
   if (k[i]==10)
   {
       k[i]="A";
   }
   if (k[i]==11)
   {
       k[i]="B";
   }
   if (k[i]==12)
   {
       k[i]="C";
   }
   if (k[i]==13)
   {
       k[i]="D";
   }
   if (k[i]==14)
   {
       k[i]="E";
   }
   if (k[i]==15)
   {
       k[i]="F";
   }
}
var str2 = k.join('');
if (check!=1)
{
document.getElementById('info').innerHTML=str2;
}
else
{
    str2="Wrong number";
    document.getElementById('info').innerHTML=str2;
}
    }
    else
    {   
        str=number;
        
        var arr = str.split('');
        for(i=0;i<arr.length;i++)
        {
            arr[i]=parseInt( arr[i], startSystem );
            if (arr[i]<startSystem)
            {
                check=0;
            }
            else
            {
                check=1;
            }
        }
        var sum=parseInt( str, startSystem );
        c=sum;
       d=finalSystem;
       i=0;
   
    var a=[];
    while (c>=d)
    {
       a[i]=(c%d);
       c=Math.floor(c/d);
       i++;
    }
a.push(c);
var k=[];
k=a.reverse();
for (i=0;i<k.length;i++)
{
   if (k[i]==10)
   {
       k[i]="A";
   }
   if (k[i]==11)
   {
       k[i]="B";
   }
   if (k[i]==12)
   {
       k[i]="C";
   }
   if (k[i]==13)
   {
       k[i]="D";
   }
   if (k[i]==14)
   {
       k[i]="E";
   }
   if (k[i]==15)
   {
       k[i]="F";
   }

    }
    
var str2 = k.join('');
if (check!=1)
{
document.getElementById('info').innerHTML=str2;
}
else
{
    str2="Wrong number";
    document.getElementById('info').innerHTML=str2;
}
}

}
}