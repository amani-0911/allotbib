import React, { Component} from 'react';
import { connect } from 'react-redux';

import DoctorPanel from './../DoctorComponent/DoctorPanel';
import PatientPanel from '../PatientComponents/PatientPanel';
import AppNavbar from './AppNavbar';
import { getUsers, verify } from '../../actions/authActions';
import { getDoctors } from '../../actions/patientActions';

import { getAllAppointments } from '../../actions/appointmentActions';
import { TheLayout } from '../AdminComponents/containers';

import Services from '../GeneralComponents/services/Services';
import Footer from '../GeneralComponents/Footer/Footer';
import {Button} from '../GeneralComponents/button/Button';
import {Link}  from "react-router-dom";
import { AcUnit, Videocam } from "@material-ui/icons";

class HomePage extends Component {
    
     checkType = (userType) => {
        console.log(userType)
        console.log("inside")
        switch(userType){
            case "patient":
                return <PatientPanel/>
            case "doctor":
                return <DoctorPanel/>
            case "admin":
                console.log("bug"); 
                return <TheLayout/> 
            default:
                return;
        }
        }
        


    render(){
        const {user, auth} = this.props;
        const userType = (( user || {} ).userType || {})
        
        return(
            <div>
                  <AppNavbar />
                 {user?
                this.checkType(userType):auth===false && <>
                
                 <div className="homeHero">
             <div className="homeHeroTop">
                 <h4 className="homeHeroTopText">To continue to treat yourself, think about the video consultation.</h4>
                 <span className="homeHeroTopDesc">It’s simple, fast, and reimbursed like an in-office consultation.</span>
             </div>
             <div className="hemeHeroButtom">
                 <div className="homeHeroBottomLeft">
                   
                 </div>
                 <div className="homeHeroBottomCenter">
                 <Link to='/'>
                        <Button buttonSize='btn--large' buttoncolor='green'> 
                     <span className="buttontext"> <Videocam className="iconButton" /> Make an appointment in video</span> 
                         </Button>
                    </Link>
                 <div className="solutionbar">
                   <AcUnit  className="iconsSolution"/>
                    <div className="infobar">
                    <h4 className="infoTitle">
                        An ideal solution to COVID-19    
                    </h4>
                    <span className="infoDesc">
                         Avoid contact with others while continuing to treat yourself
                    </span>
                    </div>
                  </div>
                 </div>
                 <div className="homeHeroBottomRight">
 
                 </div>
             </div>
           </div>
           <Services />
           </>}
           <Footer />
            
            </div>
        )
    }


}

const mapStateToProps = state => ({
    user: state.auth.user,
    auth: state.auth.isAuthenticated,
    otp:state.auth.otp

});

export default connect(mapStateToProps, {getUsers,getAllAppointments,getDoctors, verify} )(HomePage);