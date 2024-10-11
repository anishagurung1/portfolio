//Home section 
const Home = () => {
    return (
    <section id="home-section" className="container-fluid full-height d-flex justify-content-center flex-column align-items-center">

        <div className="container text-center">
            <p id="name" className="display-1 display-md-2 display-lg-3 fw-bold">
                Anisha Gurung
            </p>
        </div>

        <div className="container d-flex justify-content-center">
            <ul id="home-info" className="d-flex flex-wrap gap-5"
            style={{
                position: "relative", 
                listStyleType: "square", 
            }}>
                <li>Student</li>
                <li>Marketing</li>
                <li>4th year</li>
                <li>The University of Akron</li>
            </ul>
        </div>

    </section>

    );
};
//About me section 
const AboutMe = () => {
    const paragraph1 = `
        Hello! My name is Anisha Gurung, and I am currently a senior at the University of Akron, 
    majoring in Marketing. I was born and raised in India and spent two years living in Nepal 
    before moving to the United States at the end of 2017 as a Bhutanese Nepali refugee. This 
    journey has profoundly shaped my aspirations; from a young age, I have dreamed of becoming 
    a businesswoman, always drawn to the world of commerce.`

    const paragraph2 = `    
        My diverse background has significantly influenced my understanding of and passion for marketing. 
    I gained valuable experience as a social media intern, where I successfully managed multiple platforms 
    including Facebook, Instagram, and LinkedIn. Currently, I am collaborating with one of my professors on 
    a research project focusing on refugee consumer behavior. In this role, I have successfully distributed 
    and collected 218 completed survey papers, demonstrating my ability to conduct field research and gather 
    crucial data. This experience has not only enhanced my analytical skills but also deepened my understanding 
    of diverse consumer groups in the marketing field.`

    const paragraph3 =`
        In my free time, I enjoy taking pictures, hiking, and spending quality time with friends and family. 
    A fun fact about me is that I can speak and understand three languages: Hindi, Nepali, and English. `

    const paragraph4 = `
    Thank you for joining me on this journey! I look forward to sharing more insights and experiences with you. 
     `;// do not delete this 


    return (
    <section id="about-me-section" style={{paddingTop:"60px"}}>

        <div className="container text-center">
            <p id="about-me-header" className="display-3 display-md-2 display-lg-3">
                About me
            </p>
        </div>
        <div className="container " style={{ width:"45%" ,border: "2px solid grey"}}>
            <pre className="about-me-paragraph" >
                {paragraph1}
            </pre>
            <pre className="about-me-paragraph">
                {paragraph2}
            </pre>
            <pre className="about-me-paragraph">
                {paragraph3}
            </pre>
            <pre className="about-me-paragraph">
                {paragraph4}
            </pre>
        </div>

    </section>

    );
};

//Resume section 
const Resume = () => {

    //format dates 
    const months = [ 
        'Present',
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'November', 
        'December'];
    const monthsJoin = months.join('|');
    const regexDate = new RegExp(
        `((${monthsJoin})\\s?\\d{4}(?:\\s?-?\\s?(${monthsJoin})(\\s?\\d{4}?)?)?)`, 
        'gi'
    );
    const resumeSection = [
        'Education', 
        'Relevant Coursework', 
        'Internship Experience', 
        'On-Campus Work Experience', 
        'Work Experience', 
        'Leadership and Extracurricular Experience',
        'Technical Skills'
    ]//do not delete this 
    //regular expression that matchs any keywords
    const regexSection = new RegExp(`(${resumeSection.join('|')})`, 'gi'); //global and cases-insensitive


    const filePath = `./resume/resume.docx`; //path of file

    fetch(filePath)
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.arrayBuffer();
    })
    .then(arrayBuffer => {
        return mammoth.convertToHtml({ arrayBuffer: arrayBuffer });
    })
    .then(result => {
        const html = result.value.replace(regexSection, '<span class="resumeSectionsHeader"><u>$1</u></span>');
        document.getElementById('resume-data').innerHTML = html.replace(regexDate, '<span class="resumeDates">($1)</span>');
    })
    .catch(err => console.error('Error loading DOCX:', err));

    return (
        <section id="resume-section" className="height-full pb-5" style={{paddingTop:"60px"}}>
            <div className="container text-center">
                <p id="resume-header" className="display-3 display-md-2 display-lg-3">
                    Resume
                </p>
            </div>
            <div id="resume-data" className=" container p-5" style={{border: "2px solid grey"}}/>
        </section>
    )
} /* End of Resume Component */


//Blogs section
const Blogs = () => {
    const blogs = {
        blog1: {title: "Out of My Comfort Zone", 
            image: "./images/out-of-my-comfort-zone-blog.png", 
            link: "https://www.nationalmillennialcommunity.com/single-post/out-of-my-comfort-zone"}, 

        blog2: {title: "Cleveland: A City that Embraces You", 
            image: "./images/a-cleveland-a-city-that-embraces-you-blog.png", 
            link:"https://www.nationalmillennialcommunity.com/single-post/cleveland-a-city-that-embraces-you"}
    }
    return (
        <section className="container-fluid" id="blogs-section" style={{ paddingTop: "60px" }}>
        <div className="container text-center">
            <p id="blogs-header" className="display-3 display-md-2 display-lg-3">
                Blogs
            </p>
        </div>
    
        <div className="container d-flex gap-3 justify-content-center" id="blogsPost">
            {Object.keys(blogs).map(key => {
                return (
                    <div className="post text-center" key={key}>
                        <img 
                            src={blogs[key]?.image} 
                            className="responsive-image"  // Apply the responsive class
                            alt={blogs[key]?.title} 
                        />
                        <p style={{ width: "100%", padding: "10px 0 20px 0", backgroundColor: "green" }}>
                            <a className="post-link" id={key} href={blogs[key]?.link}>
                                {blogs[key]?.title}
                            </a>
                        </p>
                    </div>
                );
            })}
        </div>
    </section>
    
    

    )
}

//Contact me section
const ContactMe = () => {
    return (
        <section  className="container-fluid" id="contact-me-section" style={{paddingTop:"60px"}}>
            <div className="container text-center">
                <p id="contact-me-header" className="display-3 display-md-2 display-lg-3">
                    Contact me
                </p>
            </div>
        <div className="container mt-5">
        <form>
            <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" required/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required/>
            </div>
            <div className="form-group mb-4">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Enter your message" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>

        
        </section>

    )
}




const Portfolio = () => {
    return (
        <div>
            {/*Home section */}
            <Home/>
            {/*About me section */}
            <AboutMe/>
            {/*Resume section */}
            <Resume/>
            {/*Blogs section */}
            <Blogs/>
            {/*Contact me section */}
            <ContactMe/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Portfolio/>) 
