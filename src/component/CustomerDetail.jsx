import '../css/style.css';

export function CustomerDetail() {
    const handleAdd = () => {
        const name = document.getElementById('name').value;
        const cnic = document.getElementById('cnic').value;
        const father = document.getElementById('father').value;
        const gender = document.getElementById('gender').value;
        
        if (name && cnic && father && gender) {
            const newRow = document.createElement('div');
            newRow.className = 'customer-row';
            newRow.innerHTML = `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>CNIC:</strong> ${cnic}</p>
                <p><strong>Father Name:</strong> ${father}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <!-- You can display the image here -->
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            `;

            const customerContainer = document.getElementById('customer-container');
            customerContainer.appendChild(newRow);

            document.getElementById('name').value = '';
            document.getElementById('cnic').value = '';
            document.getElementById('father').value = '';
            document.getElementById('gender').value = 'Select';
        }
    };

   

    return (
        <div className="box">
            <h1>Customer Detail</h1>
            <label>Customer Name</label>
            <input type="text" id="name"  />
            <br />
            <label id='CNIC'>Customer CNIC</label>
            <input type="number" id="cnic" />
            <br />
            <label>Father Name</label>
            <input type="text" id="father"  />
            <br />
            <label>Gender</label>
            <select id="gender">
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
            </select>
            <br />
            <input type="file" id="image" />
            <br />
            <button onClick={handleAdd}>Add Customer</button>
            <div id="customer-container"></div>
        </div>
    );
}
