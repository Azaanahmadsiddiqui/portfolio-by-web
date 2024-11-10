import "../style/Education.css"

function Education() {
  return (
    <main className="edu-main">
       <div className="edu-text">
        <h1 className="edu-h">Education</h1>
        <p className="edu-p">Education is the foundation for personal and professional growth, providing knowledge and skills that shape our future. It opens doors to opportunities, empowering individuals to achieve their full potential.     
            Here is what they have to say about our work..</p>
       </div>
       {/* box 1 */}
       <div className="box-con-edu">
        <div>
        <h1 className="sch-name">Khaton-e-Pakistan Gov. Degree Collage</h1>
        <span>Completed</span>
        </div>
       <div className="computer">
        <h1>Graduated in faculty of Arts</h1>
        <p> I do Matric and Inter in Science Pre-medical.</p>
       </div>
       </div>
       {/* box 2 */}
       <div className="box-con-edu">
        <div>
        <h1 className="sch-name">Technical Training Centre For Women</h1>
        <span>Completed</span>
        </div>
       <div className="computer">
        <h1>Diploma in Admin.Assistant</h1>
        <p>I got 1st position in Diploma of Admin.Assistant. My main subjects are Typing,Shorthand,Business English and Computer Operations.</p>
       </div>
       </div>
       {/* box 3 */}
       <div className="box-con-edu">
        <div>
        <h1 className="sch-name">Governor IT Initiative</h1>
        <span>Quater 2 Student</span>
        </div>
       <div className="computer">
        <h1>  Certified Web 3.O and metaverse</h1>
        <p>At the Governor IT Initiative, students explore AI, Metaverse, and Blockchain technologies in an accessible manner. This free program is an excellent opportunity for those interested in these innovative fields.</p>
       </div>
       </div>
    </main>
  )
}

export default Education