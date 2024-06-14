import React from 'react';

const PageAboutMe = () => {
    return (
        <div>
            <div className="container text-center p-5">
                <section className="col p-2">
                    <p className="content_color">
                        <b>Hi!</b><br></br>
                        I am Aulia, a fresh graduate from Mathematics Major who actively seeking a position in Data Science or a Data Analysis-related field.
                        I am deeply passionate about learning new things and continuously expanding my knowledge. Currently, I am diving into the fundamentals of front-end web development.                
                    </p>
                </section>
            </div>
        
            <div className="container text-center">
                <aside className="social-links">
                    <a href="https://www.linkedin.com/in/andiauliasyahnur/">LinkedIn</a><br></br>
                    <a href="https://github.com/auliaaaz">Github</a>
                </aside>
            </div>
    
            <footer>
                <i>Aulia Syahnur @2024</i>
            </footer>
        </div>
    );
};

export default PageAboutMe;
