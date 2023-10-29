import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

function Form(props) {
    useEffect(() => {
        props.setpagePath('/')
    });

    let [text, setText] = useState("");

    let changeTitle = ()=>{
        document.title = "TextUtils - Home";
        // props.setpagePath('/')
    }
    changeTitle();

    
    let handleOnSubmit = (e) => {
        e.preventDefault();
    }

    let handleChangeText = (e)=>{
        setText(e.target.value);
    }

    let convertUpercase = ()=>{
        setText(text.toUpperCase());
    }
        
    function convertLowercase (){
        setText(text.toLowerCase());
    }

    let resetText = ()=>{
        setText('');
    }

    let copyText = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to clipboard!', 'success');
    }

    let removeSpaces = ()=>{
        let newText = text.replace(/ {2,}/g, ' ').trim();
        setText(newText);
    }

    let cptEachWord = ()=>{
        let newText = text.split(" ");
        newText.forEach((ele, i) => {
            newText[i] = ele.charAt(0).toUpperCase() + ele.slice(1);
        });
        newText = newText.join(" ");
        setText(newText);
    }

    return (
    <>
        <form onSubmit={handleOnSubmit}>
            <h1 className="mb-3">{props.heading}</h1>
            <div className="mb-3">
                <textarea value={text} onChange={handleChangeText} className='form-control' name="mytxt" rows="10"></textarea>
            </div>
            <div className="mb-3 d-flex flex-wrap" style={{gap:'6px 1px'}}>
                <button className="btn btn-primary" onClick={convertUpercase} disabled={text === ""}>
                    Convert to Upercase
                </button>
                &nbsp;
                <button className="btn btn-primary" onClick={convertLowercase} disabled={text === ""}>
                    Convert to Lowercase
                </button>
                &nbsp;
                <button className="btn btn-primary" onClick={cptEachWord} disabled={text === ""}>
                    Capitalize each word
                </button>
                &nbsp;
                <button className="btn btn-primary" onClick={removeSpaces} disabled={text === ""}>
                    Remove Extra Spaces
                </button>
                &nbsp;
                <button className="btn btn-primary" onClick={resetText} disabled={text === ""}>
                    Clear Text
                </button>
                &nbsp;
                <button className="btn btn-primary" onClick={copyText} disabled={text === ""}>
                    Copy Text
                </button>
            </div>
        </form>
        <div className="">
            <h3>Text Summary</h3>
            <p>
                words <b>{text === "" ? 0 : text.trim().split(/\s+/).filter(ele =>  ele !== ' ').length}</b>
                &emsp;
                characters <b>{text.length}</b>
                <br />
                Minute to read <b>{Math.round((text.length/150) * 1000) / 1000}</b>
            </p>
            <h3>Preview</h3>
            <p>{text===''?'Enter some text in above textarea to preview here.':text}</p>
        </div>
    </>
    )
}

Form.propTypes = {
    heading: PropTypes.string.isRequired
}

export default Form;

