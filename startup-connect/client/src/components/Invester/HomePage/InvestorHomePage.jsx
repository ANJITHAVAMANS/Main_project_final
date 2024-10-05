import React,{useEffect} from 'react'
import './InvestorHomePage.css'
import { CommonNavbar } from '../../commonNavbar/commonNavbar'
import Footer_2 from '../../Footer/Footer_2'
import InvestorNav from '../InvestorNav/InvestorNav'
import homepageimg from '../../../assets/investor_home_herosection.png'
import home_ent_img from '../../../assets/inv_home_ent.png'
import home_startpl_img from '../../../assets/inv_home_startpl.png'
import home_req_img from '../../../assets/inv_home_req.png'
import home_img2 from '../../../assets/investor_home_side_img.png'
import Investor_Footer from '../Investor_Footer/Investor_Footer'
import { useNavigate } from 'react-router-dom'

function InvestorHomePage() {

    const navigate =useNavigate()
    useEffect(()=>{
        if(localStorage.getItem("Investor") == null ){
          navigate("/");
        }
      },[navigate]);
  return (
    <>
        <CommonNavbar/>
        <InvestorNav/>
        <section className='investor_home_sec1 mb-5'>
            <div className='row'>
                <div className='col investor_home_sec1_col'>
                    <div className='investor_home_sec1_text'>
                    <h5 className=''>Wealth is when small 
                        efforts produce big results. 
                        Poverty is when big efforts 
                        produce small results.</h5>
                    </div>
                </div>
                <div className='col investor_home_sec1_img'>
                    <div className='investor_home_sec1_img_div'>
                        <img className='pt-5 investor_home_sec2_img' src={homepageimg}/>
                    </div>
                </div>
            </div>
        </section>
        <section className='container investor_home_sec2 mb-5'>
            <div className='row'>
                <div className=' col investor_home_sec2_ent mx-3 '>
                    <div>
                        <div className='invhome_ent_img_div'>
                        <img className='pt-3' src={home_ent_img}/>
                        </div>
                        <div className='invhome_ent_txt_div'>
                        <h5>Entrepreneur</h5>
                        <h5>878.76k</h5>
                        </div>
                    </div>
                </div>
                <div className='col investor_home_sec2_startpl mx-3 '>
                    <div>
                    <div className='invhome_startpl_img_div'>
                        <img className='pt-3' src={home_startpl_img}/>
                        </div>
                        <div className='invhome_startpl_txt_div'>
                        <h5>Startup Plan</h5>
                        <h5>3547</h5>
                        </div>
                    </div>
                </div>
                <div className='col investor_home_sec2_req  mx-3'>
                    <div>
                    <div className='invhome_ent_img_div'>
                        <img className='pt-3' src={home_req_img}/>
                        </div>
                        <div className='invhome_ent_txt_div'>
                        <h5>Request</h5>
                        <h5>3547</h5>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section className='container mb-5'>
            <div className='row'>
                <div className='col '>
                <h4>Your Journey to Success</h4>
                <div className='inv_home_sec3_txt'>
                    <p>Welcome to Softution, where we connect investors with exciting startup opportunities. Discover innovative projects from different industries that have the potential to grow and succeed. Our platform offers clear and concise information about each startup, helping you make confident investment choices. Whether you’re a seasoned investor or new to venture capital, we provide the tools and support you need to invest in the future of business.</p>
                </div>
                </div>
                <div className='col'>
                    <div>
                        <img src={home_img2} />
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default InvestorHomePage