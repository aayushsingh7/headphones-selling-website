import { FC } from 'react'

interface LabelsProps {
    heading:string;
    body:string;
    cl:string
}

const Labels: FC<LabelsProps> = ({heading,body,cl}) => {
  return (
    <div className={`Labels ${cl}`} >
     <h2>{heading}</h2>  
     <p>{body}</p> 
    </div>
  )
}

export default Labels