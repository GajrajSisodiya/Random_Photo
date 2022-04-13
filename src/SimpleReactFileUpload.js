import React, { useEffect, useState } from 'react'

const inputFields = {
    width: 'inherit',
    fontFamily: 'arial',
    padding: '6px',
    boxSizing: 'border-box',
  }
  const postBtnStyle = {
    border: 'none',
    margin: 0,
    color: '#fff',
    fontWeight: 'bold',
    padding: '16px 20px',
    background: '#7D4C92 ',
    width: '300px',
  }

  const mainFields = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
  const imgFields = { 
    width: '300px',
    marginBottom: '20px',
    height: 'auto',
  }
  const imagesFields = { 
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'top center'
 }
 const boxinputFields = { 
    width: '300px',
    marginBottom: '15px',
 }

function SimpleReactFileUpload() {
    const [imageUrl, setImageUrl] = useState("https://picsum.photos");
    const [randomImgNumber, setRandomImageNumber] = useState();
    const [category, setCategory] = useState();
  
    useEffect(() => {
        const random = Math.floor((Math.random() * 250) + 1);
        setRandomImageNumber(random)
      }, []);
  
     const handleSubmit = (e) => {
        e.preventDefault();
        if(localStorage.getItem('category') === null){
            const arr = {};
            arr[category] = [`${imageUrl}/${randomImgNumber}`];
            localStorage.setItem('category', JSON.stringify(arr));
            window.location.reload();
            alert("Your image has been saved");
        }

        else{ 
        const newCategory=JSON.parse(localStorage.getItem('category'));
        if(!newCategory[category]){
            newCategory[category]=[`${imageUrl}/${randomImgNumber}`];
            window.location.reload();
            alert("Your image has been saved");
        }

        else{
            newCategory[category].push(`${imageUrl}/${randomImgNumber}`);
            window.location.reload();
            alert("Your image has been saved");
        }
        localStorage.setItem('category',JSON.stringify(newCategory));
      }
    }
    return(
      <div style={mainFields}>
          <div style={imgFields}><img style={imagesFields} src={`${imageUrl}/${randomImgNumber}`} alt="Random Image!" /></div>
          <div style={boxinputFields}> <input style={{}} style={inputFields} type="text" 
         placeholder="Enter Category Title" onChange={(e) => setCategory(e.target.value)}/>
        </div>
        <button onClick={handleSubmit} style={postBtnStyle}>Post</button>
      </div>
    );
  }
export default SimpleReactFileUpload