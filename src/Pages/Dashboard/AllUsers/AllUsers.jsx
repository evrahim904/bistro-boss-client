import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })






    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method:'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleDelete = user => {
    console.log('heelooo')
    }
    return (

        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | all users</title>
            </Helmet>
            <h3 className="text-3xl semi-bold my-5">total users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>role</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role === 'admin'? 'admin':
                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-500 text-white btn-xl"><FaUserShield></FaUserShield></button>
                            
                            }</td>
                            <td>
                                <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600 text-white btn-xl"><FaTrashAlt></FaTrashAlt></button>
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;