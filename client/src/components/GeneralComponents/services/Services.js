import { Devices, Event, PostAdd, Schedule } from '@material-ui/icons';
import React, { Component } from 'react'
import Title from '../title/Title'
import "./services.css"
export default class Services extends Component {
  state={
      services:[
          {
              icons: <Event className="serviceIcon" />,
              title:"Book an appointment online",
              info:"Find a specialty then choose the practitioner and the schedule that suits you. Log into the waiting room 15 minutes before the start of the teleconsultation"
          }, 
           {
            icons: <Devices className="serviceIcon" />,
            title:"Perform your teleconsultation",
            info:'Describe your symptoms to a practitioner trained in teleconsultation, in complete confidentiality from your computer or smartphone.'
        },
          {
            icons: <PostAdd className="serviceIcon" />,
            title:"Get medical advice",
            info:"Benefit from an opinion, a diagnosis and if necessary a valid prescription in pharmacies, accessible online from your personal space."
        }, 
         {
            icons:<Schedule  className="serviceIcon"/>,
            title:"Saving time and convenience",
            info:'Save time, perform your video consultation comfortably from your home and collect your prescriptions directly on Allotbib in complete safety.'
        }
      ]
  }
  
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="servicesWrapper">
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return(
                            <article key={index} className="service">
                            <span >{item.icons}</span>
                            <h6 className="serviceTitle">{item.title}</h6>
                            <p className="serviceDesc">{item.info}</p>
                        </article>);
                    })}
                </div>
                </div>
            </section>
        )
    }
}
