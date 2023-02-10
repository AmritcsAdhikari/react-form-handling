import React, { useState } from 'react'

const UserRegistration = () => {

    let [user, setUser] = useState({
        username : "",
        email : "",
        password: "",
        designation : "",
        gender : "",
        bio : "",
        terms : false
    });

   // let [disableButton, setDisableButton] = useState(false);

    let checkForEmptyFields= ()=>{
        for(let key of Object.keys(user)){
            if(((key === 'terms') && (user[key] === false)) || (user[key] === "")){
                
                    return true;
            }
        }
            return false;
    }
    

    let updateUser = (event)=>{
        if(event.target.type === 'checkbox'){
            setUser((prevState)=>{
                return {
                    ...prevState,
                    [event.target.name] : event.target.checked
                }
            })
        }
        else {
            setUser((prevState)=>{
          
                return {
                    ...prevState,
                    [event.target.name] : event.target.value
                }
            });
        }
    }
/*
**another-solution**
    let updateUser = (event)=>{
            setUser((prevState)=>{
                return {
                    ...prevState,
                    [event.target.name] : event.target.type === 'checkbox' ? event.target.checked : event.target.value
                }
            });
    }

 */
    let submitRegister = (event)=>{
        event.preventDefault();
        console.log(user);
    }
    return (
        <>
        <pre>{JSON.stringify(user)}</pre>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card shadow-lg">
                            <div className="card-header bg-warning">
                                <p className='text-primary'>User Registration</p>
                            </div>
                            <div className="card-body bg-light">
                                <form onSubmit={e => submitRegister(e)}>
                                    <div className="mb-2">
                                        <input 
                                            value={user.username}
                                            name={'username'}
                                            onChange={e => updateUser(e)}
                                            className='form-control' 
                                            type='text' 
                                            placeholder='Username'/>
                                    </div>
                                    <div className="mb-2">
                                        <input
                                            value={user.email}
                                            name={'email'}
                                            onChange={e => updateUser(e)} 
                                            className='form-control' type='email' placeholder='Email'/>
                                    </div>
                                    <div className="mb-2">
                                        <input 
                                            value={user.password}
                                            name={'password'}
                                            onChange={e => updateUser(e)}
                                            className='form-control' type='password' placeholder='Password'/>
                                    </div>
                                    <div className="mb-2">
                                        <select 
                                            value={user.designation}
                                            name={'designation'}
                                            onChange={e => updateUser(e)}
                                            className='form-control'>
                                            <option value="">Select Designation</option>
                                            <option value="Software Engineer">Software Engineer</option>
                                            <option value="Sr. Software Engineer">Sr. Software Engineer</option>
                                            <option value="Devops Engineer">Devops Engineer</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <label className='form-check-label'>Gender</label>
                                        <input 
                                            value={'Male'}
                                            name={'gender'}
                                            onChange={e => updateUser(e)}
                                            type='radio' className='form-check-input' />
                                            <label className='form-check-label'>Male</label>
                                        <input
                                            value={'Female'}
                                            name={'gender'}
                                            onChange={e => updateUser(e)} 
                                            type='radio' className='form-check-input' />
                                            <label className='form-check-label'>Female</label>
                                    </div>
                                    <div className='mb-2'>
                                        <textarea 
                                            value={user.bio}
                                            name={'bio'}
                                            onChange={e => updateUser(e)}
                                            className='form-control' cols="30" rows="3" placeholder='Bio'></textarea>
                                    </div>
                                    <div className='mb-2'>
                                        <input 
                                            value={user.terms}
                                            name={'terms'}
                                            onChange={e => updateUser(e)}
                                            type="checkbox" className='form-check-input' />
                                        <label className='form-check-label'> Accept Terms and Conditions </label>
                                    </div>
                                    <div className='mb-2'>
                                        <input 
                                            disabled={checkForEmptyFields()}
                                            type="submit" value='Register' className='btn btn-warning' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserRegistration