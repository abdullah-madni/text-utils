import React, {useEffect} from 'react'

export default function About(props) {
    useEffect(() => {
        props.setpagePath('/about');
    });
    
    let changeTitle = ()=>{
        document.title = "TextUtils - About";
        // props.setpagePath('/about');
    }
    changeTitle();



    return (
    <>
    <h1 className='mb-3'>About US</h1>
    <div className="accordion" id="myAccordion">
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1">
                    What is TextUtils?
                </button>
            </h2>
            <div id="collapse-1" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="accordion-body">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem officia cum error expedita praesentium placeat consequuntur magnam odio doloribus cumque, ratione dicta amet, quod fugit. Est quam pariatur placeat maiores!
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2">
                    What are the features?
                </button>
            </h2>
            <div id="collapse-2" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="accordion-body">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem officia cum error expedita praesentium placeat consequuntur magnam odio doloribus cumque, ratione dicta amet, quod fugit. Est quam pariatur placeat maiores!
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3">
                    Why we create this app?
                </button>
            </h2>
            <div id="collapse-3" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div className="accordion-body">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem officia cum error expedita praesentium placeat consequuntur magnam odio doloribus cumque, ratione dicta amet, quod fugit. Est quam pariatur placeat maiores!
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

