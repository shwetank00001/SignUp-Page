import React from "react"

export default function App() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */

    const [formData, setFormData] = React.useState({
        email: "",
        password:"",
        passwordConf : "",
        okayToEmail: false
    })
    


    // function handleSubmit(event) {
    //     event.preventDefault()
    //     const confirm = formData.password === formData.passwordConf ? console.log("Signed up successfully !") : "Passwords do not match !"
    //     console.log(confirm)
    //     const newsletterCheck = formData.okayToEmail ? "Thanks for signing up for our newsletter! " : ""
    //     console.log(newsletterCheck)
        
    // }

    function handleSubmit(event){
        event.preventDefault()
        if(formData.password === formData.passwordConf){
            console.log("Successfully signed up! ")
        }
        else {
            console.log("Passwords Do Not match")
            return
        }

        if(formData.okayToEmail){
            console.log("Thanks for signing up for our newsletter! ")
        }

    }
    
    function handleChange(event){
        const {type,name,value,checked} = event.target
        setFormData(function(item){
            return{
                ...item,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    name='email'
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    name='password'
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    name="passwordConf"
                    value={formData.passwordConf}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleChange}
                        name='okayToEmail'
                        checked={formData.okayToEmail}                 
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
