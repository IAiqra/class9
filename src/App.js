import "./App.css";
import './css/style.css';
import React, { useState } from 'react';
import { Home } from './component/Home.jsx';
import { Employee } from './component/Employee.jsx'; // Corrected the import name
import { Customer } from './component/Customer.jsx';
import { Contact } from './component/Contact.jsx';
import { Vendor } from './component/Vendor.jsx';
import { Header } from './component/Header.jsx';
import { CustomerDetail } from './component/CustomerDetail.jsx';
import { VendorDetail } from './component/VendorDetail.jsx';
import { Account} from './component/Account.jsx';

import {
    BrowserRouter as Router, // Corrected the import name
    Routes,
    Route,
    Link
} from 'react-router-dom';

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        onLogin(username, password);
    };

    return (
        <div className="login-form-container">
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
function NavBar() {
    return (
        <ul className="nav">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/employee">Employee</Link>
            </li>
            <li>
                <Link to="/vendor">Vendor</Link>
            </li>
            <li>
                <Link to="/customer">Customer</Link>
            </li>
            <li>
                <Link to="/contact">Contact US</Link>
            </li>
        </ul>
    )
}
function Menu(){
    return(
        <ul className="menu">
        <li>
            <Link to="/account">Account</Link>
        </li>
       
        <li>
            <Link to="/vendord">VendorDetail</Link>
        </li>
        <li>
            <Link to="/customerd">CustomerDetail</Link>
        </li>
        </ul>

    )
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (username, password) => {
        if (username === 'ali' && password === '123') {
            setIsLoggedIn(true);
        }
    };
    
    return (
        <Router>
            <div>
            {!isLoggedIn ? (
                <LoginForm onLogin={handleLogin} />
            ) : (
                <div>
                   
                    <Header/>
                    <NavBar />
                    <Menu/>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/employee" element={<Employee />} />
                        <Route path="/vendor" element={<Vendor />} />
                        <Route path="/customer" element={<Customer />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/vendord" element={<VendorDetail />} />
                        <Route path="/Customerd" element={<CustomerDetail />} />
                    </Routes>
                   
                </div>
                            )}

            </div>
        </Router>

    )
    
    }

export default (App);
