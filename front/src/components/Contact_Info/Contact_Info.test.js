import React from 'react'

class Contact_Info extends React.Component {

    constructor(props) {


        super(props);
    }



    render() {

        return (


            <div className="Contact_Info">

                <div className="Contact_Map_Info">

                    <div>

                        <h1>Contact</h1>
                        <ul>
                            <li><a href="#"><i class="fas fa-envelope"></i> Ghaseel@blouze.com</a></li>
                            <br />
                            <li><a href="#"><i class="fas fa-phone-square-alt"></i> +961 4 873 389</a></li>
                        </ul>
                        <div className="Social_Media">
                          <a href="#">  <i class="fab fa-facebook-square" id="facebook"></i></a>
                          <a href="#"> <i class="fab fa-instagram" id="insta"></i></a> 
                        </div>
                        <p>Find us: Pigier Building 2nd Floor - Jemmayzeh Main Road -<br /> Beirut - Lebanon</p>
                    </div>

                    <div className="Contact_Map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.796545038249!2d35.50972951463375!3d33.89489333345428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f16fb24fc5583%3A0xa37552bc126dfe51!2sCodi!5e0!3m2!1sen!2slb!4v1563795596839!5m2!1sen!2slb" width="600" height="320" allowfullscreen></iframe>
                    </div>

                </div>


            </div>
        )




    }




}

export default Contact_Info