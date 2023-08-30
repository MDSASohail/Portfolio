const imgarray=["./Image/Hesham.jpg",'./Image/IMG20210105151400.jpg'];
let i=0;

// FOR IMAGE SLIDING

setInterval(()=>{
      if(i==2)
   i=0;
  document.getElementById("imgs").src=imgarray[i];
  
//   document.getElementById('image_section').style.backgroundImage="url(" + imgarray[i] + ")";

   i++;
},3000);

function showAndHide(sh,hide1,hide2,hide3)
{
    document.getElementById(hide1).style.display='none';
    document.getElementById(hide2).style.display='none';
    document.getElementById(hide3).style.display='none';
    console.log(sh)
   const id=document.getElementById(sh);
   if(id.style.display==='none')
    id.style.display='block';
   else
    id.style.display='none';
}




// Adding property to each div
const  allInnderDiv=document.querySelectorAll('.eachAni');
const  allOuterDiv=document.querySelectorAll('.ani12thEachDiv');

for(let i=0;i<allOuterDiv.length;i++)
{
    
    allOuterDiv[i].addEventListener('click',()=>{
        if(allInnderDiv[i].style.display=='none')
        {
            allInnderDiv[i].style.display='block';
            console.log("True")
        }
        else
        {
            allInnderDiv[i].style.display='none'
            console.log('False'+i)
        }
    })
}

// Making image slide in graducation

const idOfImgDiv=document.getElementById('imgSlide');
const urlArra=["./Image/g1.jpeg","./Image/g2.jpeg","./Image/g3.jpeg","./Image/g4.jpeg","./Image/g5.jpeg","./Image/g6.jpeg"];
let index=0;



setInterval(() => {
       idOfImgDiv.style.opacity=0;
        setTimeout(()=>{
            idOfImgDiv.src=urlArra[index];
            idOfImgDiv.style.opacity=1;
                 if(index==5)
                index=0;
                
                index++;
        },500)
}, 3000);

//Adding key in graduation

const keys=["I joined the college during the covid.","It provide UG and PG cources.","It demands 75% attendence.","Its full name is Zakia Afaque Islamia college.","It was established in 1971"];
let keyIndex=-1;
const ulKey=document.getElementById('ulGra');


function AddKey()
{
   const lii=document.createElement("li");
   lii.classList.add("keyli");
    keyIndex++;
    if(keyIndex!=-1)
    {
        document.getElementById('show').style.display="none";
        document.getElementById("more").style.display="block";
        document.getElementById("less").style.display="block";
    }
    
   const text=document.createTextNode(keys[keyIndex]);
   lii.appendChild(text);
   ulKey.appendChild(lii);
   if(keyIndex==4)
    {
        document.getElementById("more").style.display="none";
    }
    
}
  
function hideKey()
{
    const lc=ulKey.lastChild;
    ulKey.removeChild(lc);
    keyIndex--;
    if(keyIndex==-1)
     {
        
        document.getElementById('less').style.display='none';
        document.getElementById('show').style.display="block";
        document.getElementById('more').style.display="none";
     }
     if(keyIndex!=-1)
     {
        document.getElementById("more").style.display='block';
     }
    

}













