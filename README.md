# Proyecto2_Padel_Reserva

|  Method  | URL | Description |
| ------------- | ------------- | ------------- |
| Content Cell  | Content Cell  | Content Cell  |
| Content Cell  | Content Cell  | Content Cell  |

GET	/	Landing	
GET	/registro	Register Form Render	
POST	/registro	Register Form Post	
GET	/iniciar-sesion	Login Render
POST	/iniciar-sesion	Login Post
POST	/cerrar-sesion	Log-out	
GET	/perfil/:id	User profile
POST	/perfil/:id/edit	User edit form GET
POST	/perfil/:id/edit	User edit form POST	
POST	/perfil/:id/eliminar	User DELETE form POST	
GET	/partidos	Match list	
GET	/partidos/crear	Create match Render
POST /partidos/crear	Create match Post	
GET	/usuario/:id/:casoId	Case details	
GET	/usuario/:id/:casoId/editar	Case edit	
POST	/usuario/:id/:casoId/editar	Case edit POST	
POST	/usuario/:id/:casoId/eliminar	Case edit DELETE	
POST	/usuario/:id/caso/reportar	Case report	
POST	/usuario/:id/caso/comentar	Case comment	
POST	/usuario/:id/caso/eliminar-comentario	Case comment delete --	
GET	/eventos/	Event list	
GET	/evento/crear	Event create	
POST	/evento/crear	Event create	
GET	/evento/:id/editar	Event edit	
POST	/evento/:id/editar	Event edit	
POST	/evento/:id/borrar	Event delete	
POST	/evento/:id/unirse	Event join	
POST	/evento/:id/des-unirse	Event un-join	
GET	/api/cases	Cases API
