import ourCrew from '../data/ourCrew'

function About() {


  return (
    <>

      <main className='about_main_content'>
        <h2>About</h2>


        <div className="container">
          <div className="row g-5">

            {ourCrew.map((member) => {

              return (
                <div className="col-12 col-md-6" key={member.id}> {/* ⚠️ responsive da sistemare */}
                  <div className="card crew-card">

                    <div className="card-header">

                      <h3 className="card-title">{member.name}</h3>

                      <div className='d-flex'>

                        <div className='profile_titles'>
                          <div className="card-text profile_title">{member.title}</div>
                          <p className="card-text profile_role fst-italic"><small><br />{member.role}</small></p>
                        </div>

                      <p className="card-text profile_vibe">{member.vibe}</p>
                      
                      </div>

                        <img src="https://picsum.photos/100" className="card-img-top" alt={member.name} />

                    </div>

                    <div className="card-body member-bio-info">
                      <p className="card-text profile_bio">{member.bio}</p>
                      <span className="card-text">{member.funFact}</span>
                    </div>

                  </div>
                </div>


              )
            })}
          </div>
        </div>

      </main>

    </>
  )
}

export default About
