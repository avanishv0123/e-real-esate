import React from 'react'
import { AgentDashboard } from './AgentDashboard'

export const Sell = () => {
    return (
        <>
            {/* <!-- Breadcrumb --> */}
            {/* <section id="bc" class="mt-3">
                <div class="container-fluid">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href='/'>
                                    <i class="fas fa-home"></i> Home</a>
                            </li>
                            <li class="breadcrumb-item active"> Listings</li>
                        </ol>
                    </nav>
                </div>
            </section> */}

            {/* <!-- Listings --> */}
            {/* <section id="listings" class="py-4">
                <div class="container">
                    <div class="row">

                        <div class="col-md-6 col-lg-4 mb-4">
                            <div class="card listing-preview">
                                <img class="card-img-top" src="{{ listing.photo_main.url }}" alt="" />
                                <div class="card-img-overlay">
                                    <h2>
                                        <span class="badge badge-secondary text-white">Av</span>
                                    </h2>
                                </div>
                                <div class="card-body">
                                    <div class="listing-heading text-center">
                                        <h4 class="text-primary">listing title</h4>
                                        <p>
                                            <i class="fas fa-map-marker text-secondary"></i> state</p>
                                    </div>
                                    <hr />
                                    <div class="row py-2 text-secondary">
                                        <div class="col-6">
                                            <i class="fas fa-th-large"></i> Sqft: </div>
                                        <div class="col-6">
                                            <i class="fas fa-car"></i> Garage:</div>
                                    </div>
                                    <div class="row py-2 text-secondary">
                                        <div class="col-6">
                                            <i class="fas fa-bed"></i> Bedrooms: </div>
                                        <div class="col-6">
                                            <i class="fas fa-bath"></i> Bathrooms: </div>
                                    </div>
                                    <hr />
                                    <div class="row py-2 text-secondary">
                                        <div class="col-12">
                                            <i class="fas fa-user"></i> </div>
                                    </div>

                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </section> */}
            <AgentDashboard />


        </>
    )
}
