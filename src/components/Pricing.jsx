import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"

const Pricing = () => {
  return (
    <div>
        <h2>
            Pricing
        </h2>
        <div>
            {pricingOptions.map((option, index) => (
                <div key={index}>
                    <div>
                        <p>
                            {option.title}
                            {option.title === "Pro" && (
                                <span>
                                    (Most Popular)
                                </span>
                            )}
                        </p>
                        <p>
                            <span>{option.price}</span>
                            <span>Month</span>
                        </p>
                        <ul>
                            {option.features.map((feature, index) => (
                                <li key={index}>
                                    <CheckCircle2 />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#">
                            Subscribe
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing
