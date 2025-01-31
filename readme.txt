do the calculation stuff

type of website contain 
key value pair of 
  const types = [
    { name: "Dynamic", img: "https://gashwatechnologies.com/images/dynamic_web_designing_himachal_shimla.gif" },
    { name: "Static", img: "https://www.slnsoftwares.com/images/gif/webdesign17.gif" },
    { name: "Bootstrap", img: "https://embedpress.com/wp-content/uploads/2022/06/How-To-Embed-Interactive-Gif-On-WordPress-Site-Without-Coding-1.gif" },
    { name: "WordPress", img: "https://templatesjungle.com/wp-content/uploads/edd/2023/05/freebies-cover.jpg" },
  ];
  inme se dynamic --> 4 hardness value le 
  static --> 3
  bootstrap --> 2
  wordpress --> 1
take and save this value for some time


.com --> 40000
.net --> 4000
.org --> 2000
.in --> 1000
.pk , .work --> 500

jab user inmse se koi value dalega to phir ye uske hisab se value save karenge 


additional function add karne me 
payment gateway --> 800 
chat --> 2500
maps --> 1000
translation --> 2000
social login --> 1000
 const additionalOptions = ["Payment Gateway", "Chat", "Social Login", "Maps", "Translation"];


server cost 
  const calculatePrice = () => {
    if (selectedServer === "50 person") setFinalPrice("$50");
    else if (selectedServer === "500 person") setFinalPrice("$500");
    else if (selectedServer === "5000 person") setFinalPrice("$5000");
    else if (selectedServer === "500000 person") setFinalPrice("$50000");
    else setFinalPrice("Final Price Display");
  };
isme 
50 --> high value : 2000 , low value : 500
500 --> high value : 10000 , low value : 2000
5000 --> high value : 50000, low value : 10000
50000 --> high value : 100000 , low value : 50000
 default me high value hi return kare par user jab ease button dabaye to low value ke hisab se calculation How


 final price user ko mile through
pehle hardness value 
4 ko total pricing ka 9 times  badha ke batao 
3 toatl pricing ka 6 times  badha ke bataye 
2 toatl pricing ka 4 times  badha ke batqaye
1 toatl pricing ka 3 times  badha ke batayte

ab calcualtion kuch is tarah hogi 
user select kara dyanmic so save ho gaya hardness value 4
domain maan lo domain select kiya user ne to 40000 add ho gaye 
phir usne api add ki translate add kiya or login add kiya to value 2000 , 1000 add ho jaye 

phir server add kiya to maan lo 5000 logo ke liye add kiya to phir 50000 add ho gaya 

so ab net calculation dikhayega = 40000 + 2000 + 1000 + 50000 = 93000
ab iska 90 percent badha ke bataye to phir hua 9 time of 93000 + 93000 = 930000
retunr kar de 930000 return kar de 
or agar ease ka button dabaye to phir 
low value me convert ho jyae server ki