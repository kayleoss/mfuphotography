
import {useParams} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Categories from "../Categories";
import { categories } from "../photodata";
import { useEffect, useState } from "react";

const CategorySection = () => {
    const {id} = useParams();
    const [state, setState] = useState({
        images: [], 
        loading: true
    });

    const currentCat = categories.filter((category) => category.name.toLowerCase() === id );

    useEffect(() => {
        window.scrollTo(0, 0);

        if (id) {
            fetch(`https://mfubackend.onrender.com/images/${id}`)
            .then(res => res.json())
            .then(data => setState({images: data, loading: false}))
        }
        
    }, [id])
    
    var slicedLength = Math.round(state.images.length/3);
    var colOne = state.images.slice(0, slicedLength)
    var colTwo = state.images.slice(slicedLength, slicedLength*2)
    var colThree = state.images.slice(slicedLength*2, state.images.length)
    
    return (
        <>
        <Header fixedClass='bg-light' />
            <h1 className="text-center mt-md-5 pt-5 arizona-text">{currentCat[0].name}</h1>
            <div className="container-fluid mt-md-5 pt-md-5">

                {state.loading === true ? 
                <div className="text-center">
                    <img className="mt-5 mb-huge loading-gif" src={require("../../assets/loading.gif")} alt="loading..." />
                </div>
                : ""}

                <div className="row">
                    <div className="col-sm-4">
                    {colOne.map(image => (
                        <div key={image._id}>
                            <div className="modal fade" id={'modal-' + image._id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content rounded-0">
                                    <div className="modal-body p-0">
                                        <img
                                            src={image.src} 
                                            alt={image.description}
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="modal-footer">
                                            <p><strong>{image.name}</strong> by Molly Fu</p>
                                            <button type="button" className="btn-close px-2 py-3" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                            
                            <div>
                                <button type="button" aria-label="View larger" className="btn p-0" data-bs-toggle="modal" data-bs-target={'#modal-' + image._id}>
                                    <img
                                        src={image.src} 
                                        alt={image.description}
                                        className="w-100  box-shadow"
                                    />
                                </button>
                                
                                <p className="mt-3">
                                    <strong>{image.name}</strong><br/>
                                    {image.description}<br/>
                                    <a className="text-decoration-none" href={image.purchaseLink} target='_blank' rel="noreferrer">Purchase for ${image.price}</a>
                                </p>
                            </div>
                        </div>
                        
                    ))}
                    </div>

                    <div className="col-sm-4">
                    {colTwo.map(image => (
                        <div key={image._id}>
                            <div className="modal fade" id={'modal-' + image._id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content rounded-0">
                                    <div className="modal-body p-0">
                                        <img
                                            src={image.src} 
                                            alt={image.description}
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="modal-footer">
                                            <p><strong>{image.name}</strong> by Molly Fu</p>
                                            <button type="button" className="btn-close px-2 py-3" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                            
                            <div>
                                <button type="button" aria-label="View larger" className="btn p-0" data-bs-toggle="modal" data-bs-target={'#modal-' + image._id}>
                                    <img
                                        src={image.src} 
                                        alt={image.description}
                                        className="w-100  box-shadow"
                                    />
                                </button>
                                
                                <p className="mt-3">
                                    <strong>{image.name}</strong><br/>
                                    {image.description}<br/>
                                    <a className="text-decoration-none" href={image.purchaseLink} target='_blank' rel="noreferrer">Purchase for ${image.price}</a>
                                </p>
                            </div>
                        </div>
                        
                    ))}
                    </div>

                    <div className="col-sm-4">
                    {colThree.map(image => (
                        <div key={image._id}>
                            <div className="modal fade" id={'modal-' + image._id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content rounded-0">
                                    <div className="modal-body p-0">
                                        <img
                                            src={image.src} 
                                            alt={image.description}
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="modal-footer">
                                            <p><strong>{image.name}</strong> by Molly Fu</p>
                                            <button type="button" className="btn-close px-2 py-3" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                            
                            <div>
                                <button type="button" aria-label="View larger" className="btn p-0" data-bs-toggle="modal" data-bs-target={'#modal-' + image._id}>
                                    <img
                                        src={image.src} 
                                        alt={image.description}
                                        className="w-100  box-shadow"
                                    />
                                </button>
                                
                                <p className="mt-3">
                                    <strong>{image.name}</strong><br/>
                                    {image.description}<br/>
                                    <a className="text-decoration-none" href={image.purchaseLink} target='_blank' rel="noreferrer">Purchase for ${image.price}</a>
                                </p>
                            </div>
                        </div>
                        
                    ))}
                    </div>
                </div>
                
            </div>
        <Categories />
        <Footer />
        </>
    )
};

export default CategorySection;