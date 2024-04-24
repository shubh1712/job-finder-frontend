import React from 'react'

function Link({linkData}) {
    const {date,links,text,time} = linkData
  return (
    <div className="link">
      <div>
        <span style={{color:"white" ,display:"inline",backgroundColor: '#191f45',borderRadius:"0.5rem",padding:"0.5rem 0.8rem",marginRight:"10px"}}>Oppurtunity details</span>
        <div style={{color:"#e5e3e3b9" , padding:"1rem 0.3rem",lineHeight:"1.5rem"}}>
          {text}
        </div>
      </div>
      <div style={{lineHeight:"1.5rem"}}>
        <span style={{color:"white" ,display:"inline",backgroundColor: '#191f45',borderRadius:"0.5rem",padding:"0.5rem 0.8rem"}}>Link</span>
        <div style={{marginTop:"2px"}}>
          <a target="_blank" style={{fontWeight:"bold",color:"#e5e3e3" , padding:"0.5rem 0.5rem"}} href={links}>{links}</a>
        </div>
      </div>
      <div style={{marginTop:"1rem",display:"flex",justifyContent:"right"}}>
        <span style={{color:"grey" ,display:"inline",borderRadius:"0.5rem",padding:"0.2rem 0.8rem"}}>{date}</span>
      </div>
    </div>
  )
}

export default Link



