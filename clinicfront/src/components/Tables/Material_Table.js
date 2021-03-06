import MaterialTable from "material-table";

export default function Material_Table() {

    const data = [
        { name: "John", email: "john@gmail.com", age: 12, gender: "Male" },
        { name: "Bren", email: "bren@gmail.com", age: 24, gender: "Male" },
        { name: "Marry", email: "marry@gmail.com", age: 18, gender: "Female" },
        { name: "Shohail", email: "shohail@gmail.com", age: 25, gender: "Male" },
        { name: "Aseka", email: "aseka@gmail.com", age: 19, gender: "Female" },
        { name: "Meuko", email: "meuko@gmail.com", age: 12, gender: "Female" },
    ];
    const columns = [
        {
            title: "Name",
            field: "name",
        },
        {
            title: "Email",
            field: "email",
        },
        {
            title: "Age",
            field: "age",
        },
        {
            title: "Gender",
            field: "gender",
        },
        
    ];
    return (
        <MaterialTable
            title="My Employees"
            data={data}
            columns={columns}
            options={{ search: true, paging: false, filtering: true, exportButton: true }}
            actions={[
                {
                    icon: 'save',
                    tooltip: 'Save User',
                    onClick: (event, rowData) => alert("You saved " + rowData.name)
                },
                {
                    icon: 'delete',
                    tooltip: 'Delete User',
                    onClick: (event, rowData) => alert("You want to delete " + rowData.name)
                }
            ]}
        />
    );
}
