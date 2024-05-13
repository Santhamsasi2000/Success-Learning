const classes =[
{
  title:"GRE",
  abbrevation:"Graduate Record Examinations"
},
{
  title:"GMAT",
  abbrevation:"Graduate Management Admission Test"
},
{
  title:"SAT",
  abbrevation:"The Scholastic Assessment Test"
},
{
  title:"NEET",
  abbrevation:"National Entrance cum Eligibility Test"
},
{
  title:"TOEFL",
  abbrevation:"Test of English as a Foreign Language"
},
{
  title:"IELTS",
  abbrevation:"International English Language Testing System"
}
];

const Programs = () => {
  return (
    <div className="program">
       <p className="heading-program">Programs we offer</p>
       <hr/>
       <div className="courses">
          {
            classes.map((classItem,index)=>(
              <Program key={index} title={classItem.title} abbrevation={classItem.abbrevation}/>
            ))
          }
       </div>
       <span><hr/></span>
    </div>
  )
}
export default Programs

const Program = (props) => {
  return (
    <div className="all-courses">
        <div className="course-name">
          <p className="title">{props.title}</p>
          <p className="abbrevation">{props.abbrevation}</p>
        </div>
        <div className="months">
            <p>8 months</p>
            <p>Classroom</p>
        </div>
    </div>
  )
}



