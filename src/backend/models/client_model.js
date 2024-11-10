// import connection from "src/config/mysqlOrSequelize.js";

async function findAll() {
    const queryString = "SELECT * FROM client";
    const [rows, fields] = await connection.query(queryString);
    return rows;
}

async function findByPk(pk) {
    const queryString = "SELECT * FROM client WHERE id_client = ?";
    const [rows, fields] = await connection.query(queryString, [pk]);
    return rows[0];
}

async function create(data) {
    const queryString = "INSERT INTO client (name_client, pass_client, location_client) VALUES (?,?,?)";
    const [rows, fields] = await connection.query(queryString, [data.name_client, data.pass_client, data.location_client]);
    return rows;
}

async function update(pk, data) {
    const queryString = "UPDATE client SET name_client = ?, pass_client = ?, location_client = ? WHERE id_client = ?";
    const [rows, fields] = await connection.query(queryString, [data.name_client, data.pass_client, data.location_client, pk]);
    return rows;
}

async function remove(pk) {
    const queryString = "DELETE FROM client WHERE id_client = ?";
    const [rows, fields] = await connection.query(queryString, [pk]);
    return rows;
}

export default { 
    findAll,
    findByPk,
    create,
    update,
    remove 
}

