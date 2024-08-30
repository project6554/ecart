import React from 'react'


const Header = () => { 
    
    return (
        <div>
        
        <header className="bg-dark py-5" style={{ backgroundImage: `url( "https://images.unsplash.com/photo-1724770646663-2a806ed04ca4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh"}}>
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>

        </div>
    )
}

export default Header


