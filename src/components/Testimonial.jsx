import { testimonial } from "../constants"

const Testimonial = () => {
  return (
    <div className="mt-20 tracking-wide">
        <h2>
            What People are saying
        </h2>
        <div>
            {testimonial.map((testimonial, index) => (
                <div key={index}>
                    <div>
                        <p>{testimonial.text}</p>
                        <div>
                            <img 
                                src={testimonial.image} 
                                alt="image" 
                            />
                            <div>
                                <h6>{testimonial.user}</h6>
                                <span>
                                    {testimonial.company}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonial
