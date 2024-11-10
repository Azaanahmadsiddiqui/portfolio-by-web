import "../style/Education.css"

function WorkHistory () {
  return (
    <main className="edu-main">
       <div className="edu-text">
        <h1 className="edu-h">Work History</h1>
        <p className="edu-p">I have grown through web development, professional training and academic achivements with continuous dedication.</p>
       </div>
       {/* box 1 */}
       <div className="box-con-edu">
        <div>
        <h1 className="sch-name">Technical Training Centre For Women, Karachi</h1>
        <span>Teacher</span>
        </div>
       <div className="computer">
        <h1>Respected Teacher</h1>
        <p>I teach students typing, shorthand, and MS Office skills, helping them build practical abilities for efficient communication and office tasks.</p>
       </div>
       </div>
       {/* box 2 */}
       <div className="box-con-edu">
        <div>
        <h1 className="sch-name">Governor IT Initiative</h1>
        <span>Student</span>
        </div>
       <div className="computer">
        <h1>Giaic - Reaching Quarter 2</h1>
        <p>Through hard work, I progressed to Quarter2, mastering AI, Metaverse, Blockchain, and tools like Nextjs and Tailwind CSS.</p>
       </div>
       </div>
       {/* box 3 */}
       <div className="box-con-edu">
        <div>
        <h1 className="sch-name">Web Development</h1>
        <span>Completed</span>
        </div>
       <div className="computer">
        <h1>Web Journey</h1>
        <p>I started by learning HTML, CSS, and JavaScript, building websites, freelancing, and working on personal projects to sharpen my skills.</p>
       </div>
       </div>
    </main>
  )
}

export default WorkHistory