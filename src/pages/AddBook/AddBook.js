import React from 'react'
import './AddBook.css'

export const AddBook = () => {
    return (
        <div className="main">
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title"> ADD BOOK </h2>
                            <div className="register-form" id="register-form">
                                <div className="form-group">
                                    <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="name" id="name" placeholder="Your Book Name"/>
                                </div>
                                <div className="form-group">
                                    <label for="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Your Email"/>
                                </div>
                                <div className="form-group">
                                    <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="text" name="name" id="name" placeholder="Type"/>
                                </div>
                                <div className="form-group">
                                    <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input type="text" name="name" id="name" placeholder="Description"/>
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                    <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                                </div>
                            </div>
                        </div>
                        <div className="signup-image">
                            <figure><img src="images/signup-image.jpg" alt="sing up image" /></figure>
                            <div className="upload-img">
                                <form action="upload.php" method="post" enctype="multipart/form-data">
                                    <input type="file" name="fileToUpload" id="fileToUpload"/>
                                    <input type="submit" value="Upload Image" name="submit"/>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

    </div>
    )
}