const filePath = "./custom/scripts/jsons/menus.json"
let dishes = await fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(jsonData => {
            return jsonData
        })
        .catch(error => {
            console.error('Error:', error);
        });
const menu = dishes.menu
for (let m of menu){
    console.log(m)
}