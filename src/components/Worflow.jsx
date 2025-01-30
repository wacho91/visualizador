import { CheckCircle2 } from "lucide-react"
import codeImg from "../assets/code.jpg"
import { checklistItems } from "../constants"


const Worflow = () => {
  return (
    <div>
        <h2>
            Accelerate your{" "}
            <span>
                coding workflow.
            </span>
        </h2>
        <div>
            <div>
                <img src={codeImg} alt="code" />
            </div>
            <div>
                {checklistItems.map((item, index) => (
                    <div key={index}>
                        <div>
                            <CheckCircle2 />
                        </div>
                        <div>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Worflow
