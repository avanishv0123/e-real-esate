import React from "react";
import { useNavigate } from "react-router-dom";
import '../agents.css'
// import { NavLink } from "react-router-dom";
export const NewAgent = () => {
    const navigate = useNavigate();

    let RegisterAgent = async (e) => {
        e.preventDefault();
        let response = await fetch("http://127.0.0.1:8000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name: e.target.fname.value,
                last_name: e.target.lname.value,
                email: e.target.email.value,
                username: e.target.username.value,
                password: e.target.password.value,
                password2: e.target.repsw.value,
                role: e.target.role.value,

            }),
        });
        let data = await response.json();
        console.log(data.status);
        if (data.status === 200) {
            navigate("/Login");
        } else {
            alert("User have not regisered...");
            navigate("/Register");
        }
    };

    return (
        <>
            <h2 className="text-light bg-primary p-3 text-uppercase">
                Become an agent by filling this form
            </h2>
            <div className="container-fluid">
                <form onSubmit={RegisterAgent}>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Enter Full Name</label>
                        <input
                            type="Name"
                            class="form-control"
                            id="exampleInputName1"
                            placeholder="Name"
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Upload Photo: </label>
                        <input type="file" id="photo" className="ml-2" name="photo" />
                    </div>
                    <div class="form-group">
                        <label for="Desc">Description</label>
                        <textarea
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="Desription"
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Mobile number: </label>
                        <input
                            type="number"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Mobile number"
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};
