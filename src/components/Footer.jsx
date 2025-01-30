import { communityLinks, platformLinks, resourcesLinks } from "../constants"

const Footer = () => {
  return (
    <footer>
        <div>
            <div>
                <h3>Resources</h3>
                <ul>
                    {resourcesLinks.map((Link, index) => (
                        <li key={index}>
                            <a 
                                href={Link.href}
                            >
                                {Link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Platform</h3>
                <ul>
                    {platformLinks.map((link, index) => (
                        <li key={index}>
                            <a 
                                href={link.href}
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Community</h3>
                <ul>
                    {communityLinks.map((link, index) => (
                        <li key={index}>
                            <a 
                                href={link.href}
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
