image_array = [
  'a1.jpeg',
  'a2.jpeg',
  'a3.jpeg',
  'a4.jpeg',
  'a4.jpeg',
  'a6.jpeg',
  'a7.jpeg',
  'a8.jpeg',
  'a9.jpeg',
  'a10.jpeg',
  'a11.jpeg',
  'a12.jpeg',
  'a13.jpeg',
  'a14.jpeg',
  'a15.jpeg',
  'a16.jpeg',
  'a17.jpeg',
  'a18.jpeg',
  'a19.jpeg',
  'a20.jpeg',
  'a21.jpeg',
  'a22.jpeg',
  'b1.jpeg',
  'b2.jpeg',
  'b3.jpeg',
  'b4.jpeg',
  'b5.jpeg',
  'b6.jpeg',
  'b7.jpeg',
  'b8.jpeg',
  'b9.jpeg',
  'b10.jpeg',
  'b11.jpeg',
  'b12.jpeg',
  'b13.jpeg',
  'b14.jpeg',
  'b15.jpeg',
  'b16.jpeg',
  'b17.jpeg',
  'b18.jpeg',
  'b19.jpeg',
  'b20.jpeg',
  'b21.jpeg',
  'b22.jpeg',
  'b23.jpeg',
  'b24.jpeg',
  'b25.jpeg',
  'b26.jpeg',
  'b27.jpeg',
  'b28.jpeg',
  'b29.jpeg',
  'b30.jpeg',
  'b31.jpeg',
  'b32.jpeg',
  'b33.jpeg',
  'b34.jpeg',
  'b35.jpeg',
  'b36.jpeg',
  'b37.jpeg',
  'b38.jpeg',
  'b39.jpeg',
  'b40.jpeg',
  'b41.jpeg',
  'b42.jpeg',
  'b43.jpeg',
  'b44.jpeg',
  'b45.jpeg',
  'c.jpeg'
  

]

function get_random_image(){
  
  random_index = Math.floor(Math.random() * image_array.length);


  if (random_index <=21) {

    document.getElementById("inner_container").style.height="750px";
    document.getElementById("inner_container").style.width="100%";


     selected_image = image_array[random_index];

  document.getElementById('image_shower').src = `./fotos/${selected_image}`


  }

  else 
  {
    document.getElementById("inner_container").style.height="1000px";
    document.getElementById("inner_container").style.width="750px";

     selected_image = image_array[random_index];
  document.getElementById('image_shower').src = `./fotos/${selected_image}`
  }
  
 
}

