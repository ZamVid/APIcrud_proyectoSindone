function option(req,res){
    req.getConnection((error,conexion)=>{
        conexion.query('SELECT * FROM posts',(error,registros)=>{
            if(error){
                res.json(err);
            }
            console.log(registros);
            res.render('tasks/option',{registros});
        });
    });
}
function create(req,res){
    res.render('tasks/option');
}
function historia(req,res){
    res.render('tasks/historia');
}
function tienda(req,res){
    res.render('tasks/tienda');
}
function contacto(req,res){
    res.render('tasks/contacto');
}
function ciencia(req,res){
    res.render('tasks/ciencia');
}
function autopsia(req,res){
    res.render('tasks/autopsia');
}
function entierro(req,res){
    res.render('tasks/entierro');
}
function reliquias(req,res){
    res.render('tasks/reliquias');
}
function store(req,res){
    const data=req.body;
    req.getConnection((error,conexion)=>{
        conexion.query('INSERT INTO posts SET ?',[data],(error,renglones)=>{
            console.log(renglones);
            res.redirect('/tasks')
        });
    });
}
function destroy(req,res){
    const id=req.body.id;
    req.getConnection((error,conexion)=>{
        conexion.query('DELETE FROM posts WHERE id=?',[id],(error,registros)=>{
            console.log(registros);
            res.redirect('/tasks')
        });
    });
}
function edit(req,res){
    const id=req.params.id;
    req.getConnection((error,conexion)=>{
        conexion.query('SELECT * FROM posts WHERE id=?',[id],(error,registros)=>{
            if(error){
                res.json(error);
            }
            res.render('tasks/edit',{registros});
        });
    });
}
function update(req,res){
    const id=req.params.id;
    const data=req.body;
    req.getConnection((error,conexion)=>{
        conexion.query('UPDATE posts SET ? WHERE id=?',[data,id],(error,registros)=>{
            res.redirect('/tasks');
        });
    });
}
module.exports={
    option:option,
    create:create,
    store:store,
    destroy:destroy,
    edit:edit,
    update:update,
    historia:historia,
    tienda:tienda,
    contacto:contacto,
    ciencia:ciencia,
    autopsia:autopsia,
    entierro:entierro,
    reliquias:reliquias
}