import { useState } from "react";
import { AUTH } from "../../../apiEndpoints";
import "./auth.css"


const Authorization = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(AUTH, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            console.log(result);
            localStorage.setItem('access', result.data.access);
            localStorage.setItem('refresh', result.data.refresh);
        } catch (error) {
            console.error('Error:', error);
            alert(error);
        }
    };

return (
    <div className="header-block">
        <form onSubmit={handleSubmit} className="form">
            <input type="text" name="username" className="input" value={formData.username} onChange={handleChange} />
            <input type="password" name="password" className="input" value={formData.password} onChange={handleChange} />
            <button type="submit" className="button">Авторизация</button>
        </form>
    </div>
);
};

export default Authorization;
