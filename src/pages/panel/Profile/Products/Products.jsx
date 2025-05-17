import styles from "./Products.module.css"
import { useState, useEffect } from 'react';
import Modal from "../../../../components/Modal/Modal";


const ProductForm = ({onSubmit, data, onCancel, hideCloseButton = false, cancelButtonText = 'Cancel'}) => {
    const isCreateMode = !data;

    const [form, setForm] = useState({
        name: data?.name || '',
        description: data?.description || '',
        price: data?.price || '',
        category: data?.category || '',
        stock: data?.stock || '',
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isCreateMode) {
            fetch('http://localhost:8000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(form)
            })
            .then(response => {
                if (!response.ok) {
                    return response.json()
                    .then(errData => {
                        console.error('ProductForm: Create - Server error response body:', errData);
                        throw new Error(`Server responded with ${response.status}: ${errData.message || response.statusText}`);
                    }).catch(() => {
                        throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
                    });
                }
                return response.json();
            })
            .then(data => {
                if (data && data.product) {
                    onSubmit(data.product);
                } else {
                    console.error('ProductForm: Create - Product creation failed or malformed response. Data:', data);
                }
            })
            .catch(error => {
                console.error('ProductForm: Create - Error during fetch operation:', error);
            });
        } else {
            fetch(`http://localhost:8000/api/products/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(form)
            })
            .then(response => {
                if (!response.ok) {
                    return response.json()
                    .then(errData => {
                        console.error('ProductForm: Update - Server error response body:', errData);
                        throw new Error(`Server responded with ${response.status}: ${errData.message || response.statusText}`);
                    })
                    .catch(() => {
                        throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
                    });
                }
                return response.json();
            })
            .then(responseData => {
                if (responseData && responseData.product) {
                    onSubmit(responseData.product);
                } else {
                    console.error('ProductForm: Update - Product update failed or malformed response. Data:', responseData);
                }
            })
            .catch(error => {
                console.error('ProductForm: Update - Error during fetch operation:', error);
            });
        }
    }
    return (
        <form className={styles.userForm} onSubmit={handleSubmit}>
            <input className={styles.formInput} value={form.name} placeholder="name" name="name" onChange={handleChange} />
            <input className={styles.formInput} value={form.description} placeholder="description" name="description" onChange={handleChange} />
            <input className={styles.formInput} value={form.price} placeholder="price" name="price" onChange={handleChange} />
            <input className={styles.formInput} value={form.category} placeholder="category" name="category" onChange={handleChange} />
            <input className={styles.formInput} value={form.stock} placeholder="stock" name="stock" onChange={handleChange} />
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



const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [editProduct, setEditProduct] = useState(null);
    const [openCreateProductModal, setOpenCreateProductModal] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    const fetchProducts = async () => {
        console.log('Products: Fetching products...');
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8000/api/products', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (!response.ok) {
                const errData = await response.json().catch(() => null);
                console.error('Products: Fetch - Server error response body:', errData);
                throw new Error(`Server responded with ${response.status}: ${ (errData && errData.message) || response.statusText}`);
            }
            const data = await response.json();
            setProducts(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Products: Fetch - Error fetching products:', error);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);


    const handleDeleteProduct = (id) => {
        console.log(`Products: Attempting to delete product with ID: ${id}`);
        setLoading(true);
        fetch(`http://localhost:8000/api/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            console.log('Products: Delete - Received response from server', response);
            if (!response.ok) {
                return response.json().then(errData => {
                    console.error('Products: Delete - Server error response body:', errData);
                    throw new Error(`Server responded with ${response.status}: ${errData.message || response.statusText}`);
                }).catch(() => {
                    throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
                });
            }
            return response.json(); 
        })
        .then(data => {
            console.log('Products: Delete - Parsed server data:', data);
            if (data.success) {
                console.log('Products: Delete - Product deletion successful. Refetching products.');
                fetchProducts();
            } else {
                console.error('Products: Delete - Product deletion failed on server. Data:', data);
            }
        })
        .catch(error => {
            console.error('Products: Delete - Error during fetch operation:', error);
        })
        .finally(() => {
            setLoading(false);
            setProductToDelete(null); 
        });
    }




    return (
        <div className={styles.container}>
            {productToDelete && 
                <Modal 
                    onClose={() => setProductToDelete(null)}
                    onSubmit={() => {
                        handleDeleteProduct(productToDelete.id)
                    }} 
                    title="Delete Product"
                    description={`Are you sure you want to delete ${productToDelete.name}?`}
                />
            }
            {openCreateProductModal && 
                <Modal 
                    hideCloseButton={true}
                    hideSubmitButton={true}
                    title="Create Product"
                    description={
                        <ProductForm 
                            data={null}
                            onSubmit={(newProduct) => {
                                setProducts([...products, newProduct])
                                setOpenCreateProductModal(false)
                            }} 
                            onCancel={() => setOpenCreateProductModal(false)} 
                            cancelButtonText="close modal"
                        />
                    }
                />
            }
            {editProduct && 
                <Modal 
                    hideCloseButton={true}
                    hideSubmitButton={true}
                    title="Edit Product"
                    description={
                        <ProductForm 
                            data={editProduct}
                            onSubmit={() => {
                                fetchProducts()
                                setEditProduct(null)
                            }} 
                            onCancel={() => setEditProduct(null)} 
                            cancelButtonText="close modal"
                    />
                    }
                />
            }
            <h2 className={styles.pageTitle}>Products Management</h2>
            <h2 className={styles.tableTitle}>Products Table</h2>
            <button className={styles.createButton} onClick={() => setOpenCreateProductModal(true)}>Create Product</button>
            <br />
            <br />
            <span className={styles.searchLabel}>Search</span>
            <br />
            <input className={styles.searchInput} type="text" placeholder="by name & category" onChange={(e) => setSearch(e.target.value)}/>
            <br />
            <br />
            <table className={styles.usersTable}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? <div className={styles.loading}>Loading...</div> : 
                        products
                            .filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase()))
                            .map((p) => (
                                <tr key={p.id}>
                                    <td>{p.name}</td>
                                    <td>{p.category}</td>
                                    <td>{p.price}</td>
                                    <td>{p.stock}</td>
                                    <td className={styles.actionButtons}>
                                        <button className={styles.editButton} onClick={() => {setEditProduct(p)}}>Edit</button>
                                        <button
                                            className={styles.deleteButton}
                                            onClick={() => setProductToDelete(p)}>
                                                Delete
                                        </button>
                                    </td>
                                </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default Products;
