import { useState } from "react";
import { FORECAST } from "../../apiEndpoints";
import "./search.css"

const Search = () => {
    const accessToken = localStorage.getItem('access');
    const [formData, setFormData] = useState({
        city: "",
        days: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const headers = {
                "Content-Type": "application/json"
            };

            if (accessToken) {
                headers['Authorization'] = `Bearer ${accessToken}`;
            }
            const response = await fetch(FORECAST, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error:', error);
            alert(error);
        }
    }


return (
    <div className="search-block">
        <form onSubmit={handleSubmit} className="form">
            <input 
                type="text" 
                name="city" className="input"
                value={formData.city} 
                onChange={handleChange} 
                placeholder="Enter city"
            />
            <input 
                type="number" 
                name="days" className="input"
                min="0" max="3"
                value={formData.days} 
                onChange={handleChange} 
                placeholder="Enter number of days 0 - 3"
            />
            <button type="submit" className="button">Поиск</button>
        </form>
    </div>
    );
};

export default Search;