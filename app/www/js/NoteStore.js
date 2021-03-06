
(
	function (){

		var app = angular.module('starter.noteStore', []);

		app.factory('noteStore',    function( ){
		  var $notas =  angular.fromJson(window.localStorage['notas'] || '[]');

		  function persist(){
		  	window.localStorage['notas'] = angular.toJson($notas);
		  }
		  return {
		    list : function(){
		      return $notas;
		    },
		    get :function (id){
		      return $notas.filter(function(nota) {
		        return nota.id === id;
		      })[0];
		    }, 
		    create :  function (nota){
		        $notas.push(nota);
		        persist();
		    },
		    update: function (nota){
		      for (var i = $notas.length - 1; i >= 0; i--) {
		         if ($notas[i].id == nota.id) {
		            $notas[i] = nota;
		            persist();
		            return ;
		         }
		      }
		    },
		    remove: function (id){
		      for (var i = $notas.length - 1; i >= 0; i--) {
		         if ($notas[i].id == id) {
		            $notas.splice(i, 1);
		            persist();
		            return ;
		         }
		      }
		    }
		  };
		})
	}()
);