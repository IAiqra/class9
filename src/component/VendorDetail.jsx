export function VendorDetail() {
    const handleAdd = () => {
        const name = document.getElementById('name').value;
        const cnic = document.getElementById('cnic').value;
        const father = document.getElementById('father').value;
        const gender = document.getElementById('gender').value;
        
        if (name && cnic && father && gender) {
            const newRow = document.createElement('div');
            newRow.className = 'employee-row';
            newRow.innerHTML = `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>CNIC:</strong> ${cnic}</p>
                <p><strong>Father Name:</strong> ${father}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <!-- You can display the image here -->
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            `;

            const employeeContainer = document.getElementById('employee-container');
            employeeContainer.appendChild(newRow);

            document.getElementById('name').value = '';
            document.getElementById('cnic').value = '';
            document.getElementById('father').value = '';
            document.getElementById('gender').value = 'Select';
        }
    };
    return(
        <div className="box1">
        <h1>Vender Detail</h1>
        <label id='Name'>Name</label>
        <input type="text" id="name"/>
        <label id='CNIC1'>Contact Person</label>
        <input type="number" id="cnic" />
        <br />
        <label id='FatherName'>Father Name</label>
        <input type="text" id="father"  />
        <br />
        <label id='gen'>Gender</label>
        <select id="gender">
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
        </select>

        <label id='DOB'>D.O.B</label>
        <input type="date" id="dob" placeholder="27/08/2023" />

        <br />
        <input type="file" id="image"/>
        <br />
        <label id='MS'>Maritial Status</label>
        <select id="marital">
            <option>Married</option>
            <option>Unmarried</option>
        </select>
        <br/>
        <label id='num'>Phone #</label>
        <input type="number" id="phone" placeholder="Phone" />
        <label id='num1'>Mobile #</label>
        <input type="number" id="mobile" placeholder="Mobile" />
        
        <br />
        <button onClick={handleAdd}>Add Employee</button>
        <div id="employee-container"></div>
    </div>
    )
}