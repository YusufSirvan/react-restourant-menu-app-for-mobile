import React from 'react'
import Info from  "./Info";
import Foods from './Foods';
import Drinks from './Drinks';
import Desserts from './Desserts';



const Home = () => {
    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://i.pinimg.com/originals/c2/1f/22/c21f22e61045d6ab7af87a722deb1288.jpg" className="d-block w-100" alt="park" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.pinimg.com/originals/c2/1f/22/c21f22e61045d6ab7af87a722deb1288.jpg" className="d-block w-100" alt="park" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.pinimg.com/originals/c2/1f/22/c21f22e61045d6ab7af87a722deb1288.jpg" className="d-block w-100" alt="park" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <h1 className='text-center ml-4'>ŞİRVAN RESTORAN</h1>
                <p className='text-left mt-3 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquid nobis earum, molestias aspernatur repudiandae explicabo officia obcaecati impedit perferendis, sed exercitationem cumque quaerat pariatur! Unde impedit animi quos minus debitis quibusdam a placeat. Maiores id sunt ipsam enim non optio doloribus ratione dignissimos provident! Perferendis atque officia quia unde dolorum consectetur inventore repellat quasi. Reiciendis ipsa laudantium nihil praesentium. Natus asperiores iure ratione autem assumenda sed animi? Error et magnam voluptas.</p>
            </div>
            <Info/>
            <Foods/>
            <Drinks/>
            <Desserts/>

        </div>
    )
}

export default Home
