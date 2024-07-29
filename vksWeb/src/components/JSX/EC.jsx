import React, { useState } from 'react'
import '../CSS/EC.css'
import '../CSS/Skills.css'

const EC = () => {

    const qualification = () =>{
        const [toogleState, setToogleState] = useState(1);

        const toogleTab = (index) => {
            setToogleState(index);
        }
    }

    return (
        <section className="job">
            <div className='ec-head'>
                Extra-Cirricular
            </div>

            <div className="ec-cont">
                {/* <div className="ec-tabs">
                    <div className={toogleState === 1 ? "ec-active" : "ec"}>
                    <div className= "ec">
                        <p>Extra-Cirricular</p>
                    </div>

                    <div className= "exp">
                    <div className={toogleState === 2 ? "exp-active" : "exp"}>
                        <p>Experince</p>
                    </div>
                </div> */}

                <div className="ec-sec">
                    <div className="ec-content ec-content-active">
                        <div className="ec-data">
                            <div>
                                <p className="title">CSI, DIT</p>
                                <p className="info">Serving as President</p>
                                <p className="date">2024 - 2025</p>
                            </div>
                            <div>
                                <span className='rounder' ></span>
                                <span className='line' ></span>
                            </div>
                        </div>
                        <div className="ec-data">
                            <div></div>
                            <div>
                                <span className='rounder' ></span>
                                <span className='line' ></span>
                            </div>
                            <div>
                                <p className="title">CSI, DIT</p>
                                <p className="info">Vice President</p>
                                <p className="date">2023 - 2024</p>
                            </div>
                        </div>
                        <div className="ec-data">
                            <div>
                                <p className="title">TEDxDYPIT</p>
                                <p className="info">Design & Management Lead</p>
                                <p className="date">2023</p>
                            </div>
                            <div>
                                <span className='rounder' ></span>
                                <span className='line' ></span>
                            </div>
                        </div>
                    </div>
                    <div className="ec-content">        
                        <div className="j-data">
                            <div>
                                <p className="title">XYX</p>
                                <p className="date">2024 - 2025</p>
                                <p className="info">jhbsbdaubvhbf</p>
                            </div>
                            <div>
                                <span className='rounder' ></span>
                                <span className='line' ></span>
                            </div>
                            
                        </div>
                        <div className="j-data">
                            <div></div>
                            <div>
                                <span className='rounder' ></span>
                                <span className='line' ></span>
                            </div>
                            <div>
                                <p className="title">XYX</p>
                                <p className="date">2024 - 2025</p>
                                <p className="info">jhbsbdaubvhbf</p>
                            </div>
                            
                        </div>
                        <div className="j-data">
                            <div>
                                <p className="title">XYX</p>
                                <p className="date">2024 - 2025</p>
                                <p className="info">jhbsbdaubvhbf</p>
                            </div>
                            <div>
                                <span className='rounder' ></span>
                                <span className='line' ></span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EC