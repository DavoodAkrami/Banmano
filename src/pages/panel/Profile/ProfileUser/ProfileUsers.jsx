import { useState, useEffect } from "react";
import Modal from "../../../../components/Modal/Modal";
import styles from "./ProfileUsers.module.css";


const UserFormManagement = ({onSubmit, data, onCancel, hideCloseButton = false, cancelButtonText = 'Cancel'}) => {
    const isCreateMode = !data;

    const [form, setForm] = useState({
        email: data?.email || '',
        name: data?.name || '',
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        console.log('log');
        
        e.preventDefault()
        if (isCreateMode) {
            fetch('http://localhost:8000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(form)
            })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res.user) {
                    console.log('success');
                    onSubmit(res.user)
                } else {
                    console.log('error');
                }
            })
        } else {
             fetch('http://localhost:8000/api/users/'+ data.id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(form)
            })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res.user) {
                    console.log('success');
                    onSubmit(res.user)
                } else {
                    console.log('error');
                }
            })
        }
    }
    
    return (
        <form className={styles.userForm} onSubmit={handleSubmit}>
            <input className={styles.formInput} value={form.email} placeholder="Email" name="email" onChange={handleChange} />
            <input className={styles.formInput} value={form.name} placeholder="Name" name="name" onChange={handleChange} />
            <button className={styles.submitButton} type="submit">{isCreateMode ? 'create' : 'update'}</button>
            {!hideCloseButton && 
                <button
                    className={styles.cancelButton}
                    onClick={() => onCancel()} 
                >{cancelButtonText}
                </button>
            }
        </form>
    )
}

const ProfileUsers = () => {
    
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [editUser, setEditUser] = useState(null);
    const [openCreateUserModal, setOpenCreateUserModal] = useState(false);
    const [deleteUser, setDeleteUser] = useState(null);

    const fetchUsers = async () => {
        const response = await fetch('http://localhost:8000/api/users', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDeleteUser = (id) => {
        setLoading(true)
        fetch(`http://localhost:8000/api/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                fetchUsers()
            }
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <div className={styles.container}>
            {deleteUser && 
                <Modal 
                    onClose={() => setDeleteUser(false)} 
                    onSubmit={() => {
                        handleDeleteUser(deleteUser.id)
                        setDeleteUser(false)
                    }} 
                    title="Delete User" 
                    description={`Are you sure you want to delete ${deleteUser.name}?`}
                />
            }
            {openCreateUserModal && 
                <Modal 
                    hideCloseButton={true}
                    hideSubmitButton={true}
                    title="Create User" 
                    description={
                        <UserFormManagement 
                            data={null}
                            onSubmit={(user) => {
                                setUsers([...users, user])
                                setOpenCreateUserModal(false)
                            }} 
                            onCancel={() => setOpenCreateUserModal(false)} 
                            cancelButtonText="close modal"
                        />
                    }
                />
            }
            {editUser && 
                <Modal 
                    hideCloseButton={true}
                    hideSubmitButton={true}
                    title="Edit User" 
                    description={
                        <UserFormManagement 
                            data={editUser}
                            onSubmit={() => {
                                fetchUsers()
                                setEditUser(null)
                            }} 
                            onCancel={() => setEditUser(null)} 
                            cancelButtonText="close modal"
                    />
                    }
                />
            }
            <h2 className={styles.pageTitle}>Profile Users Page</h2>
            <h2 className={styles.tableTitle}>Table</h2>
            <button className={styles.createButton} onClick={() => setOpenCreateUserModal(true)}>Create User</button>
            <br />
            <br />
            <span className={styles.searchLabel}>Search</span>
            <br />
            <input className={styles.searchInput} type="text" placeholder="by name & email" onChange={(e) => setSearch(e.target.value)}/>
            <br />
            <br />
            <table className={styles.usersTable}>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>is admin</th>
                        <th>name</th>
                        <th>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? <div className={styles.loading}>Loading...</div> : 
                        users
                            .filter(user => user.name.includes(search) || user.email.includes(search))
                            .map((user) => (
                                <tr key={user.id} className={user.isAdmin ? styles.adminRow : styles.userRow}>
                                    <td>{user.email}</td>
                                    <td>{user.isAdmin ? 'Admin' : 'User'}</td>
                                    <td>{user.name}</td>
                                    <td className={styles.actionButtons}>
                                        <button className={styles.editButton} onClick={() => {setEditUser(user)}}>Edit</button>
                                        {!user.isAdmin && 
                                            (
                                                <button
                                                    className={styles.deleteButton}
                                                    onClick={() => setDeleteUser(user)}>
                                                        Delete
                                                </button>
                                            )
                                        }
                                    </td>
                                </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProfileUsers;