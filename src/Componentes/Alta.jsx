import React from 'react'
import { useState } from 'react'
import "../css/SAlta.css";

const Alta = () => {

    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState(0);
    const imprimirDatos = () => {
        console.log("Product Name:", productName, " Price:", price);
    }

    return (
        <main class="AMain">
            <div class="Tittle">
                <h1 class="TittleAnimation">Add Product</h1>
            </div>
            <div class="AddProduct">
                <form class="AddProductForm">
                    <div class="form-group">
                        <label for="productName">Name:</label>
                        <input 
                        type="text" 
                        name="productName" 
                        required pattern="[A-Za-z\s]{3,50}" 
                        title="Name must contain only letters and spaces, and be between 3 and 50 characters long."
                        value= { productName }
                        onChange={(e) => setProductName(e.target.value)}
                        />

                    </div>
                    <div class="form-group">
                        <label for="price">Price:</label>
                        <input 
                        type="number" 
                        name="price" 
                        required min="0.00" 
                        title="Please enter a valid price."
                        value={ price }
                        onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div class="form-group">
                        <label for="stock">Stock:</label>
                        <input type="number" id="stock" name="stock" required min="0" step="1" title="Please enter a valid stock quantity." />
                    </div>
                    <div class="form-group">
                        <label for="brand">Brand:</label>
                        <input type="text" id="brand" name="brand" required pattern="[A-Za-z\s]{2,30}" title="Brand must contain only letters and spaces, and be between 2 and 30 characters long." />
                    </div>
                    <div class="form-group">
                        <label for="category">Category:</label>
                        <input type="text" id="category" name="category" required pattern="[A-Za-z\s]{3,30}" title="Category must contain only letters and spaces, and be between 3 and 30 characters long." />
                    </div>
                    <div class="form-group">
                        <label for="shortDescription">Short Description:</label>
                        <textarea id="shortDescription" name="shortDescription" required minlength="10" maxlength="100" title="Short description must be between 10 and 100 characters long."></textarea>
                    </div>
                    <div class="form-group">
                        <label for="longDescription">Long Description:</label>
                        <textarea id="longDescription" name="longDescription" required minlength="20" maxlength="500" title="Long description must be between 20 and 500 characters long."></textarea>
                    </div>
                    <div class="form-group inline">
                        <label for="freeShipping">Free Shipping:</label>
                        <input type="checkbox" id="freeShipping" name="freeShipping" />
                    </div>
                    <div class="form-group">
                        <label for="ageFrom">Age From:</label>
                        <input type="number" id="ageFrom" name="ageFrom" required min="0" step="1" title="Please enter a valid age." />
                    </div>
                    <div class="form-group">
                        <label for="ageTo">Age To:</label>
                        <input type="number" id="ageTo" name="ageTo" required min="0" step="1" title="Please enter a valid age." />
                    </div>
                    <div class="form-group">
                        <label for="photo">Photo:</label>
                        <input type="file" id="photo" name="photo" accept="image/*" required title="Please upload a photo of the product." />
                    </div>
                    <button onClick={ imprimirDatos } class="btn">Add Product</button>
                </form>
            </div>
        </main>
    )
}

export default Alta