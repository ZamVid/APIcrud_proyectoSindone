const express=require('express');
const TaskController=require('../controllers/TaskController');
const router=express.Router();
router.get('/tasks',TaskController.option);
router.get('/historia',TaskController.historia);
router.get('/tienda',TaskController.tienda);
router.get('/contacto',TaskController.contacto);
router.get('/ciencia',TaskController.ciencia);
router.get('/autopsia',TaskController.autopsia);
router.get('/entierro',TaskController.entierro);
router.get('/reliquias',TaskController.reliquias);
router.get('/tasks/create',TaskController.create);
router.post('/tasks/create',TaskController.store);
router.post('/tasks/delete',TaskController.destroy);
router.get('/tasks/edit/:id',TaskController.edit);
router.post('/tasks/edit/:id',TaskController.update);

module.exports=router;