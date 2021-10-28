const controller = {}

controller.index = (req, res)=>{
    res.render('index', {
        titulo : "Inicio"})
}

controller.new_entry = (req, res)=>{
    res.render('new_entry', {
        titulo : "Ingresar nueva nota"})
}

controller.new_entry_post = (req, res)=>{
    if (!req.body.title || !req.body.body) {
        res.status(400).send("Todos los campos deben estar completos")
        return
    }

    let nueva_entrada = {
        titulo: req.body.title,
        contenido: req.body.body,
        publicado: new Date()
    }


}

module.exports = controller