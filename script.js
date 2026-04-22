// //try catch

// try{

// }catch(err){

// }

// //callbacks

// function myFun(){
//     console.log("Helloo");
// }
// setTimeout(myFun);

const fetchAPI = async ()=>{
    let imageURL  = null;
    try{
        let result = await fetch("https://dog.ceo/api/breeds/image/random")
        let data = await result.json()
        imageURL = data.message
    }
    catch(err){
        console.log(err);
    }
    let image = document.getElementById("image");
    image.src = imageURL
}
fetchAPI()