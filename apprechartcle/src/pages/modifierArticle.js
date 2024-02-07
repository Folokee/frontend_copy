import React, { useState ,useEffect } from "react";
import editIcon from "./../images/editt.svg";
import ArticleIcon from "./../images/article.svg";
import SearchBar from "./../components/searchbar";
import { useParams } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';


function ModifierArticle() {
  const param = useParams()
  const artid = param.pk
  const [article, setArticle] = useState({});
  const [editedArticle, setEditedArticle] = useState({}); 
  useEffect(() => {
    getArticle();
  },[]);
    let getArticle = async () => {
    let response = await fetch(`/api/article/${artid}`,{
      method: "GET" , 
      mode: "cors", 
       cache: "no-cache", 
       credentials: "same-origin", 
       headers: {
         "Content-Type": "application/json",
       },
       redirect: "follow",
       referrerPolicy: "no-referrer",
    });
    let data = await response.json();
    setArticle({...data});
    setEditedArticle({...data}) ; 
  }

  console.log(editedArticle) ;
  console.log(article) ;
  const handleEdit = (field) => {
  };

  const handleSave = async () => {
    let response = await fetch(`/api/article/${artid}`,{
    method: "POST" , 
    mode: "cors", 
       cache: "no-cache", 
       credentials: "same-origin", 
       headers: {
         "Content-Type": "application/json",
       },
       redirect: "follow",
       referrerPolicy: "no-referrer",
    body: JSON.stringify({
      "titre" :  document.getElementsByName("titre")[0].value , 
      "auteurs" : document.getElementsByName("auteurs")[0].value ,
      "institutions" : document.getElementsByName("institutions")[0].value ,
      "mot_cles" :  document.getElementsByName("mot_cles")[0].value ,
      "references" :  document.getElementsByName("references")[0].value ,
      "resume" :  document.getElementsByName("resume")[0].value ,
      "date_pub" :  document.getElementsByName( "date_pub" )[0].value ,
      "contenu" :  document.getElementsByName("contenu")[0].value ,
    }),
    }
    );

    if(response.ok)  {let data = await response.json();}
    else {
      console.log("the fetch is not working well")
    }
  };
  const handleCancel = ()  => {
         window.location.reload() ;
  }
  const handleChange = (field,value) => {
    setArticle((prev) => ({ ...prev, [field] : value }));
    setEditedArticle((prev) => ({ ...prev, [field] : value }));
  };
  const renderField = (label, field) => (
    <div className="mb-4">
          <h5 className="text-[#15245B] font-poppins text-10px font-medium tracking-wide md:text-20px lg:text-26px">{label} :</h5>
          < TextareaAutosize
            name={field}
            value={ editedArticle[field]  }
            onChange={(e)=> { handleChange(field,e.target.value)  }}
            className="resize-none w-full h-auto overflow-hidden text-[#4F5557] font-poppins text-10px font-medium tracking-wide md:text-20px lg:text-26px bg-[#F5F5F5] "
          />
    </div> 
  );
  return (
    <div className="w-full h-full bg-[#FFFFFF] top-0 left-0 right-0">
      <div className="relative cursor-pointer shadow-md p-2 m-2 h-auto w-auto bg-[#F5F5F5] rounded-2xl md:p-6 md:m-20">
          <img src={ArticleIcon} alt="" className="w-16 h-16" />
        
        

        { renderField("Title" , "titre")  }
        {renderField("Author", "auteurs")}
        {renderField("Institutions", "institutions")}
        {renderField("Keywords", "mot_cles")}
        {renderField("References", "references")}
        {renderField("Summary", "resume")}
        {renderField("Date", "date_pub")}
        {renderField("Details", "contenu")}  


        <div className="flex items-center space-x-4 p-2 md:p-4">
            <>
              <button onClick={() =>  {handleSave(); window.location.reload()}} className="bg-[#15245B] text-white px-4 py-2 text-10px rounded-full md:text-16px lg:text-20px">
                Save
              </button>
              <button onClick={() =>  {handleCancel()}} className="bg-[#F5F5F5] border-2 border-solid border-[#15245B] text-[#15245B] text-10px px-4 py-2 rounded-full md:text-16px lg:text-20px">
                Cancel
              </button>
            </> 
        </div>
      </div>
    </div>
    
  );

}

export default ModifierArticle;
