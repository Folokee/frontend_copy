import React, { useState ,useEffect } from "react";
import editIcon from "./../images/editt.svg";
import ArticleIcon from "./../images/article.svg";
import SearchBar from "./../components/searchbar";
import { useParams } from 'react-router-dom';

function ModifierArticle() {
  const param = useParams()
  const artid = param.pk
  console.log(artid)
  let [article, setArticle] = useState(null);
  let response

  useEffect(() => {
    getArticle();
  }, [artid]);
  let getArticle = async () => {
    let response = await fetch(`/api/article/${artid}`);
    let data = await response.json();
    setArticle(data);
  }
  console.log(article)


  const [editedArticle, setEditedArticle] = useState({ ...article });
  const [editableField, setEditableField] = useState(null);

  const handleEdit = (field) => {
    setEditableField(field);
  };

  const handleSave = () => {
    setEditableField(null);
  };

  const handleCancel = () => {
    setEditedArticle((prev) => ({ ...prev, [editableField]: article[editableField] }));
    setEditableField(null);
  };

  const handleChange = (value) => {
    setEditedArticle((prev) => ({ ...prev, [editableField]: value }));
  };

  const renderField = (label, field) => (
    <div className="mb-4">
      
        {editableField === field ? (
          <>
          <h5 className="text-[#15245B] font-poppins text-10px font-medium tracking-wide md:text-20px lg:text-26px">{label} :</h5>
          <textarea
            type="text"
            value={editedArticle[field]}
            onChange={(e) => handleChange(e.target.value)}
            className="w-full h-full text-[#4F5557] font-poppins text-10px font-medium tracking-wide md:text-20px lg:text-26px bg-[#F5F5F5] "
          />
          </>
        ) : (
          <>
           <div className="flex justify-between items-center">
           <h5 className="text-[#15245B] font-poppins text-10px font-medium tracking-wide md:text-20px lg:text-26px">{label} :</h5>
           <span onClick={() => handleEdit(field)} className="cursor-pointer ml-2">
              <img src={editIcon} alt="Edit Icon" className="w-5 h-5" />
            </span>
            </div>
           <div className=" h-full text-[#4F5557] font-poppins text-10px font-medium tracking-wide md:text-20px lg:text-26px bg-[#F5F5F5 m-2] break-all ">
           {editedArticle[field]}
           </div>
          </>
        )}
      </div>
  );

  return (
    <div className="w-full h-full bg-[#FFFFFF] top-0 left-0 right-0">
      <div className="relative cursor-pointer shadow-md p-2 m-2 h-auto w-auto bg-[#F5F5F5] rounded-2xl md:p-6 md:m-20">
          <img src={ArticleIcon} alt="" className="w-16 h-16" />
        
        {renderField("Title", "title")}
        {renderField("Author", "author")}
        {renderField("Institutions", "institutions")}
        {renderField("Keywords", "keyword")}
        {renderField("References", "références")}
        {renderField("Summary", "sumup")}
        {renderField("Date", "date")}
        {renderField("Details", "details")}

        <div className="flex items-center space-x-4 p-2 md:p-4">
          {editableField ? (
            <>
              <button onClick={handleSave} className="bg-[#15245B] text-white px-4 py-2 text-10px rounded-full md:text-16px lg:text-20px">
                Save
              </button>
              <button onClick={handleCancel} className="bg-[#F5F5F5] border-2 border-solid border-[#15245B] text-[#15245B] text-10px px-4 py-2 rounded-full md:text-16px lg:text-20px">
                Cancel
              </button>
            </>
          ) : (
            <button onClick={() => handleEdit("title")} className="bg-[#15245B] text-white px-4 py-2 text-10px rounded-full md:text-16px lg:text-20px">
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModifierArticle;
