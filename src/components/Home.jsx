import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { useState } from "react";
import { enhancedImageAPI } from "../utils/enhanceImageApi";
const Home = () => {
   const[uploadImage,setUploadImage]=useState(null);
   const[enhancedImage,setEnhancedImage]= useState(null);
   const[loading,setloading]=useState(false);
   const UploadImageHandler = async(file)=>{
    setUploadImage(URL.createObjectURL(file));
    console.log(file);
    setloading(true); 
    try{
        const enhancedURL= await enhancedImageAPI(file);
        setEnhancedImage(enhancedURL);
        setloading(false);
// code which may produce error
    }catch(error){
//code to handle the error andshow masage
    console.log(error);
    alert("Error enhancing the image ,please try again later")
    }
   };
    return (
    <>
        <ImageUpload  UploadImageHandler={UploadImageHandler} />
        <ImagePreview 
        loading={loading}
         uploaded={uploadImage} 
         enhanced={enhancedImage?.image}
         />

    </>
  )
}

export default Home